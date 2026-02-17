import { graphql } from '@octokit/graphql';

export interface GitHubStats {
  totalStars: number;
  totalRepos: number;
  totalForks: number;
  followers: number;
  topLanguages: string[];
  commitsByMonth: { month: string; commits: number }[];
}

interface Language {
  name: string;
  size: number;
}

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

export async function fetchGitHubStats(username: string, token: string): Promise<GitHubStats> {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  });

  console.log(`Fetching stats for user: ${username}`);

  // Fetch user data and repositories
  const query = `
    query($username: String!) {
      user(login: $username) {
        followers {
          totalCount
        }
        repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}) {
          totalCount
          nodes {
            stargazerCount
            forkCount
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const result: any = await graphqlWithAuth(query, { username });

    const user = result.user;
    const repos = user.repositories.nodes;

    // Calculate total stars and forks
    const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazerCount, 0);
    const totalForks = repos.reduce((sum: number, repo: any) => sum + repo.forkCount, 0);

    // Aggregate languages across all repos
    const languageMap = new Map<string, number>();
    
    repos.forEach((repo: any) => {
      repo.languages.edges.forEach((edge: any) => {
        const langName = edge.node.name;
        const langSize = edge.size;
        languageMap.set(langName, (languageMap.get(langName) || 0) + langSize);
      });
    });

    // Sort languages by size and get top 10
    const topLanguages = Array.from(languageMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name]) => name);

    // Fetch commit activity for last 12 months
    const commitsByMonth = await fetchCommitActivity(username, token);

    const stats: GitHubStats = {
      totalStars,
      totalRepos: user.repositories.totalCount,
      totalForks,
      followers: user.followers.totalCount,
      topLanguages,
      commitsByMonth,
    };

    console.log('Stats fetched successfully:', stats);
    return stats;
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    throw error;
  }
}

async function fetchCommitActivity(username: string, token: string): Promise<{ month: string; commits: number }[]> {
  // Get last 12 months
  const months: { month: string; commits: number }[] = [];
  const now = new Date();
  
  // Use GitHub's search API to count commits per month
  // Note: This is an approximation as GitHub API has limitations for commit counting
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  for (let i = 11; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthStr = `${monthNames[month]} ${year.toString().slice(2)}`;
    
    // For the commit chart, we'll use a GraphQL query to get contribution data
    months.push({
      month: monthStr,
      commits: 0, // Will be populated by a separate query
    });
  }

  try {
    // Fetch contribution calendar data
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${token}`,
      },
    });

    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const result: any = await graphqlWithAuth(query, { username });
    const weeks = result.user.contributionsCollection.contributionCalendar.weeks;

    // Aggregate commits by month
    const commitsByMonthMap = new Map<string, number>();

    weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        const date = new Date(day.date);
        const monthYear = `${monthNames[date.getMonth()]} ${date.getFullYear().toString().slice(2)}`;
        commitsByMonthMap.set(monthYear, (commitsByMonthMap.get(monthYear) || 0) + day.contributionCount);
      });
    });

    // Update months array with actual commit counts
    months.forEach(m => {
      m.commits = commitsByMonthMap.get(m.month) || 0;
    });

    return months;
  } catch (error) {
    console.warn('Could not fetch commit activity, using placeholder data:', error);
    return months;
  }
}

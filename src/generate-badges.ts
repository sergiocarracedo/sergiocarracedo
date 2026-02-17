import { GitHubStats } from './fetch-stats.js';

export function generateBadgeTable(stats: GitHubStats): string {
  const { totalStars, totalRepos, totalForks, followers, topLanguages } = stats;

  // Format numbers with commas for readability
  const formatNumber = (num: number): string => num.toLocaleString();

  // Create shields.io badge URLs
  const createBadge = (label: string, value: string, color: string): string => {
    const encodedLabel = encodeURIComponent(label);
    const encodedValue = encodeURIComponent(value);
    return `https://img.shields.io/badge/${encodedLabel}-${encodedValue}-${color}?style=for-the-badge&logo=github`;
  };

  // Format languages as comma-separated string (limit display to avoid too long badge)
  const languagesStr = topLanguages.slice(0, 5).join(', ') + (topLanguages.length > 5 ? ', ...' : '');

  // Generate the markdown table
  const table = `
| Metric | Badge |
|--------|-------|
| ⭐ Total Stars | ![Stars](${createBadge('Stars', formatNumber(totalStars), '4c8eda')}) |
| 📦 Repositories | ![Repos](${createBadge('Repositories', formatNumber(totalRepos), '2ea44f')}) |
| 🔀 Total Forks | ![Forks](${createBadge('Forks', formatNumber(totalForks), 'f39c12')}) |
| 👥 Followers | ![Followers](${createBadge('Followers', formatNumber(followers), '8e44ad')}) |
| 💻 Top Languages | ![Languages](${createBadge('Languages', languagesStr, 'e74c3c')}) |
`.trim();

  return table;
}

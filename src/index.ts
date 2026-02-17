import { fetchGitHubStats } from './fetch-stats.js';
import { generateBadgeTable } from './generate-badges.js';
import { generateCommitChart } from './generate-commit-chart.js';
import { updateReadme } from './update-readme.js';

async function main() {
  try {
    // Get environment variables
    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_REPOSITORY_OWNER || process.env.GITHUB_ACTOR || 'sergiocarracedo';

    if (!token) {
      throw new Error('GITHUB_TOKEN environment variable is required');
    }

    console.log('Starting GitHub stats update...\n');

    // Step 1: Fetch GitHub stats
    console.log('1. Fetching GitHub stats...');
    const stats = await fetchGitHubStats(username, token);
    console.log('✓ Stats fetched\n');

    // Step 2: Generate badge table
    console.log('2. Generating badge table...');
    const badgeTable = generateBadgeTable(stats);
    console.log('✓ Badge table generated\n');

    // Step 3: Generate commit chart
    console.log('3. Generating commit chart...');
    const commitChart = generateCommitChart(stats);
    console.log('✓ Commit chart generated\n');

    // Step 4: Combine badge table and chart
    const statsContent = `${badgeTable}\n\n### 📊 Commit Activity (Last 12 Months)\n${commitChart}`;

    // Step 5: Update README
    console.log('4. Updating README...');
    await updateReadme(statsContent);
    console.log('✓ README updated\n');

    console.log('✅ GitHub stats update completed successfully!');
  } catch (error) {
    console.error('❌ Error updating GitHub stats:', error);
    process.exit(1);
  }
}

main();

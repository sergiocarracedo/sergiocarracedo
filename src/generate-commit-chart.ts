import { GitHubStats } from './fetch-stats.js';

export function generateCommitChart(stats: GitHubStats): string {
  const { commitsByMonth } = stats;

  // Prepare data for QuickChart
  const labels = commitsByMonth.map(m => m.month);
  const data = commitsByMonth.map(m => m.commits);

  // QuickChart configuration
  const chartConfig = {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Commits',
        data,
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Commit Activity - Last 12 Months',
          font: {
            size: 18
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          },
          title: {
            display: true,
            text: 'Number of Commits'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        }
      }
    }
  };

  // Encode the chart configuration for URL
  const encodedChart = encodeURIComponent(JSON.stringify(chartConfig));
  const chartUrl = `https://quickchart.io/chart?c=${encodedChart}&width=800&height=400&backgroundColor=white`;

  // Return markdown image tag
  return `![Commit Activity](${chartUrl})`;
}

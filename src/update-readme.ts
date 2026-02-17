import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const START_MARKER = '<!-- GITHUB_STATS:START -->';
const END_MARKER = '<!-- GITHUB_STATS:END -->';

export async function updateReadme(statsContent: string): Promise<void> {
  const readmePath = join(process.cwd(), 'README.md');

  try {
    // Read current README
    let readme = await readFile(readmePath, 'utf-8');

    // Get current timestamp
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0] + ' UTC';

    // Create the full stats section with markers and timestamp
    const statsSection = `${START_MARKER}
### 📈 GitHub Statistics

${statsContent}

*Last updated: ${timestamp}*
${END_MARKER}`;

    // Check if markers exist
    const hasMarkers = readme.includes(START_MARKER) && readme.includes(END_MARKER);

    if (hasMarkers) {
      // Replace content between markers
      const startIndex = readme.indexOf(START_MARKER);
      const endIndex = readme.indexOf(END_MARKER) + END_MARKER.length;
      
      const before = readme.substring(0, startIndex);
      const after = readme.substring(endIndex);
      
      readme = before + statsSection + after;
      console.log('Updated existing stats section in README');
    } else {
      // Find the "📊 Connection & Stats" section and add markers after it
      const statsHeaderPattern = /## 📊 Connection & Stats/;
      
      if (statsHeaderPattern.test(readme)) {
        readme = readme.replace(
          statsHeaderPattern,
          `## 📊 Connection & Stats\n\n${statsSection}\n`
        );
        console.log('Added stats section with markers to README');
      } else {
        // Fallback: append to end of file
        readme += `\n\n${statsSection}\n`;
        console.log('Appended stats section to end of README');
      }
    }

    // Write updated README
    await writeFile(readmePath, readme, 'utf-8');
    console.log('README.md updated successfully');
  } catch (error) {
    console.error('Error updating README:', error);
    throw error;
  }
}

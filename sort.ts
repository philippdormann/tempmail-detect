import * as fs from 'fs/promises';

async function sortTextFileAlphabetically(filePath: string): Promise<void> {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const lines = fileContent.split('\n');
        const sortedLines = lines.filter(line => line.trim() !== '').sort(); // Filter out empty lines and sort
        const sortedContent = sortedLines.join('\n');
        await fs.writeFile(filePath, sortedContent);
        console.log(`File ${filePath} sorted alphabetically.`);
    } catch (error) {
        console.error(`Error sorting file ${filePath}:`, error);
    }
}

sortTextFileAlphabetically("./domains.txt").catch(console.error);
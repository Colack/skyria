/*
    Run this script to use prettier to clean up all .js files in the server directory.
*/

import prettier from 'prettier';
import fs from 'fs';
import path from 'path';
import { logColor } from '../server/util/logColor.js';
import { prettierConfig } from '../server/util/prettierConfig.js';

const serverDir = path.join(__dirname, '../server');
const files = fs.readdirSync(serverDir);

files.forEach((file) => {
    if (file.endsWith('.js')) {
        const filePath = path.join(serverDir, file);
        const code = fs.readFileSync(filePath, 'utf-8');
        const formattedCode = prettier.format(code, {
            ...prettierConfig,
            filepath: filePath,
        });

        fs.writeFileSync(filePath, formattedCode);
        logColor(`Formatted ${file}`, 'green');
    }
});

logColor('All files formatted', 'green');
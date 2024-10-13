import chalk from 'chalk';

export function logColor(message, color) {
    console.log(chalk[color](message));   
}
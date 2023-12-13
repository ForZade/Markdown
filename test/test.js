const fs = require('fs');
const formatMarkdown = require('../index');
const markdownText = fs.readFileSync('./test.md', 'utf-8');

const formattedText = formatMarkdown(markdownText);
console.log(formattedText);

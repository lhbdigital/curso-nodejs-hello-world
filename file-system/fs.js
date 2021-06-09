const fs = require('fs');

const content = fs.readFileSync('example-file.json', { encoding: 'utf8' });

console.log(content);
console.log(content.name);

const parsedContent = JSON.parse(content);

console.log(parsedContent);
console.log(parsedContent.name);

parsedContent.age += '1';

fs.writeFileSync('example-file.json', JSON.stringify(parsedContent, null, 2), { encoding: 'utf8' });

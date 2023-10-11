const fs = require('fs');

let ipsum = fs.readFileSync('./readme.md', 'UTF-8');

console.log(ipsum);

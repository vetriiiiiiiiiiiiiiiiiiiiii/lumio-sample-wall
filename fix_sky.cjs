const fs = require('fs');
const filePath = 'd:\\inti\\src\\components\\canvas\\rooms\\About\\InfiniteSkyManager.jsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replaceAll('SHAN', 'LUMMIO');
content = content.replaceAll('Shan', 'Lummio');
content = content.replace(/DEVELOPER/g, 'AGENCY');
content = content.replace(/Creative Full Stack Developer/g, 'Premium Digital Design Agency');

fs.writeFileSync(filePath, content);
console.log('InfiniteSkyManager updated');

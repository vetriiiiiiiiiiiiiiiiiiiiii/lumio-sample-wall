const fs = require('fs');
const filePath = 'd:\\\\inti\\\\src\\\\components\\\\canvas\\\\entrance\\\\EntranceDoors.jsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replaceAll('#fcf3c6', '#050505');
content = content.replaceAll('#311059', '#D4AF37');
content = content.replace('\"Creative Dev\"', '\"Space Planning\"');
content = content.replace('\"Frontend Eng\"', '\"Millwork\"');
content = content.replace('\"Full Stack\"', '\"Architecture\"');
content = content.replace('\"3D & Motion\"', '\"Interiors\"');
content = content.replace('Full Stack ??', 'Lumio Design');
content = content.replace('@Lumio.dev', 'Est. 2015');

fs.writeFileSync(filePath, content);
console.log('EntranceDoors colors and text updated');

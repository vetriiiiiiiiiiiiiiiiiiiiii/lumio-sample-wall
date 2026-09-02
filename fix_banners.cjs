const fs = require('fs');
const f = 'd:\\\\inti\\\\src\\\\components\\\\canvas\\\\entrance\\\\EntranceDoors.jsx';
let c = fs.readFileSync(f, 'utf8');
c = c.replace('\"Full Stack\"', '\"Architecture\"');
c = c.replace('\"3D & Motion\"', '\"3D Rendering\"');
fs.writeFileSync(f, c);

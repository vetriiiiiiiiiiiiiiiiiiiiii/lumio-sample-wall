const fs = require('fs');
const filePath = 'd:\\\\inti\\\\src\\\\components\\\\canvas\\\\corridor\\\\HeroText.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace SHAN with LUMIO array
const shanArray =         { char: 'S', baseX: -0.9, splitDir: -1.8 },
        { char: 'H', baseX: -0.3, splitDir: -0.6 },
        { char: 'A', baseX: 0.3, splitDir: 0.6 },
        { char: 'N', baseX: 0.9, splitDir: 1.8 },;

const lumioArray =         { char: 'L', baseX: -1.2, splitDir: -1.8 },
        { char: 'U', baseX: -0.6, splitDir: -1.0 },
        { char: 'M', baseX: 0.0, splitDir: 0.0 },
        { char: 'I', baseX: 0.6, splitDir: 1.0 },
        { char: 'O', baseX: 1.2, splitDir: 1.8 },;

content = content.replace(shanArray, lumioArray);
content = content.replaceAll('Shan', 'Lumio');
content = content.replaceAll('SHAN', 'LUMIO');
content = content.replaceAll('creative full stack developer', 'premium interior architecture & design');
content = content.replaceAll('Creative Full Stack Developer', 'Premium Interior Architecture & Design');

fs.writeFileSync(filePath, content);
console.log('HeroText.jsx restored to Lumio');

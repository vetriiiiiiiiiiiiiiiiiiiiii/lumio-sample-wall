const fs = require('fs');
const filePath = 'd:\\\\inti\\\\src\\\\components\\\\canvas\\\\corridor\\\\HeroText.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const oldLetters = \        { char: 'S', baseX: -0.9, splitDir: -1.8 },
        { char: 'H', baseX: -0.3, splitDir: -0.6 },
        { char: 'A', baseX: 0.3, splitDir: 0.6 },
        { char: 'N', baseX: 0.9, splitDir: 1.8 },\;

const newLetters = \        { char: 'L', baseX: -1.2, splitDir: -1.8 },
        { char: 'U', baseX: -0.6, splitDir: -1.0 },
        { char: 'M', baseX: 0.0, splitDir: 0.0 },
        { char: 'I', baseX: 0.6, splitDir: 1.0 },
        { char: 'O', baseX: 1.2, splitDir: 1.8 },\;

content = content.replace(oldLetters, newLetters);

content = content.replaceAll('Shan', 'Lumio');
content = content.replaceAll('SHAN', 'LUMIO');

const oldTagline = \        { text: 'Creative', baseX: -1.3, splitDir: -1.8 },
        { text: 'Full Stack', baseX: -0.4, splitDir: -0.6 },
        { text: 'Developer', baseX: 0.4, splitDir: 0.6 },
        { text: 'Interactive', baseX: 1.3, splitDir: 1.8 },\;

const newTagline = \        { text: 'Premium', baseX: -1.3, splitDir: -1.8 },
        { text: 'Interior', baseX: -0.4, splitDir: -0.6 },
        { text: 'Design', baseX: 0.4, splitDir: 0.6 },
        { text: 'Architecture', baseX: 1.3, splitDir: 1.8 },\;

content = content.replace(oldTagline, newTagline);

fs.writeFileSync(filePath, content);
console.log('HeroText.jsx updated correctly');

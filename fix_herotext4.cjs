const fs = require('fs');
const filePath = 'd:\\inti\\src\\components\\canvas\\corridor\\HeroText.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const newLetters = `        { char: 'L', baseX: -1.5, splitDir: -2.0 },
        { char: 'U', baseX: -0.9, splitDir: -1.2 },
        { char: 'M', baseX: -0.3, splitDir: -0.4 },
        { char: 'M', baseX: 0.3,  splitDir: 0.4 },
        { char: 'I', baseX: 0.9,  splitDir: 1.2 },
        { char: 'O', baseX: 1.5,  splitDir: 2.0 },`;

const newTagline = `        { text: 'Premium', baseX: -1.5, splitDir: -2.0 },
        { text: 'Digital', baseX: -0.5, splitDir: -0.6 },
        { text: 'Design', baseX: 0.5, splitDir: 0.6 },
        { text: 'Agency', baseX: 1.5, splitDir: 2.0 },`;

content = content.replace(/const letters = useMemo\(\(\) => \[\s*(?:\{[^\}]*\},\s*)+\s*\], \[\]\);/m, 
`const letters = useMemo(() => [
${newLetters}
    ], []);`);

content = content.replace(/const taglineWords = useMemo\(\(\) => \[\s*(?:\{[^\}]*\},\s*)+\s*\], \[\]\);/m,
`const taglineWords = useMemo(() => [
${newTagline}
    ], []);`);

content = content.replaceAll('SHAN', 'LUMMIO');
content = content.replaceAll('Shan', 'Lummio');

fs.writeFileSync(filePath, content);
console.log('HeroText.jsx successfully updated');

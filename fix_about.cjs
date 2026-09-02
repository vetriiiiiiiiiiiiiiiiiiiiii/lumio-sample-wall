const fs = require('fs');
const filePath = 'd:\\inti\\src\\sections\\About.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace brand name
content = content.replaceAll('ABOUT LUMIO INTERIORS', 'ABOUT LUMMIO DIGITAL');
content = content.replaceAll('The Lumio Interiors Story', 'The Lummio Digital Story');

// Replace description
content = content.replace('We bridge the gap between visionary design and flawless execution—ensuring every space feels intentional, luxurious, and unmistakably yours.', 'We bridge the gap between visionary digital design and flawless technical execution—ensuring every digital experience feels intentional, premium, and unmistakably yours.');

content = content.replace('Our mission is to elevate the human experience through thoughtful, innovative, and beautiful interior design. We strive to create environments that are not just visually stunning, but deeply resonant and inherently liveable.', 'Our mission is to elevate the human experience through thoughtful, innovative, and beautiful digital design. We strive to create web experiences and applications that are not just visually stunning, but deeply performant and inherently usable.');

// Replace highlightCards array
const newCards = `const highlightCards = [
  {
    title: "Creative Development",
    desc: "Seamlessly blending aesthetic vision with interactive front-end code to create harmonious digital experiences."
  },
  {
    title: "UI/UX Design",
    desc: "Designing and structuring bespoke user interfaces that perfectly suit your brand's lifestyle and audience."
  },
  {
    title: "Full Stack Engineering",
    desc: "Building robust, scalable backends to maximize both functionality and speed, ensuring apps that perform flawlessly."
  },
  {
    title: "Product Management",
    desc: "Overseeing development, testing, and deployment to ensure your product is shipped flawlessly, on time and on budget."
  },
  {
    title: "3D & Motion",
    desc: "Providing immersive WebGL renders and virtual interactions so users can experience your brand in three dimensions."
  },
  {
    title: "Brand Identity",
    desc: "Curating the perfect blend of typography, color, and motion to add the final layer of personality to your digital home."
  }
];`;
content = content.replace(/const highlightCards = \[[\s\S]*?\];/, newCards);

// Replace skills array
const newSkills = `['Interactive Web Experiences', 'Full Stack Architecture', 'UX/UI Design', 'Custom WebGL', 'E-Commerce Solutions', 'Motion Design', 'Brand Identity', 'SEO Optimization']`;
content = content.replace(/\['Residential Design'.*?\]/, newSkills);

// Replace closing statement
content = content.replace(/We don't just decorate rooms — we design lifestyles./g, "We don't just build websites — we design digital experiences.");

fs.writeFileSync(filePath, content);
console.log('About.jsx updated to Lummio Digital');

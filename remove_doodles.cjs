const fs = require('fs');
const filePath = 'd:\\\\inti\\\\src\\\\components\\\\canvas\\\\entrance\\\\EntranceDoors.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Hide bricks texture (which has doodles baked in)
content = content.replace('map={bricksTexture}', ''); 

// Also let's just turn off the visibility of the whole cat group and other doodles
// We can just add visible={false} to the meshes if we can find them, or just replace the texture references with null

content = content.replace('map={catFrontBodyTexture}', 'visible={false}');
content = content.replace('map={windowSketchTexture}', 'visible={false}');
content = content.replace('map={avatarWindowTexture}', 'visible={false}');
content = content.replace('map={treeTexture}', 'visible={false}');
content = content.replace('map={mouseTexture}', 'visible={false}');
content = content.replace('map={potTexture}', 'visible={false}');
content = content.replace('map={bugTexture}', 'visible={false}');
content = content.replace('map={inkSplashTexture}', 'visible={false}');
content = content.replace('map={speechBubbleTexture}', 'visible={false}');

fs.writeFileSync(filePath, content);
console.log('Doodles hidden');

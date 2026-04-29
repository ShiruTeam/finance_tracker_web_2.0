const fs = require('fs');
const path = require('path');

// Find all .tsx files
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      callback(filePath);
    }
  });
}

function convertImageToImg(content) {
  // Match Image components that can be multi-line
  let result = content;
  
  // Pattern 1: <Image ... src="..." alt="..." ... /> on multiple lines
  result = result.replace(/<Image\s+([^>]*?)src=\{?"([^"]+)"([^>]*?)alt=?"([^"]+)"([^>]*?)\/>/gs, 
    (match, before, src, between1, alt, after) => {
      // Remove width, height, priority attributes
      const cleanAttrs = [before, between1, after]
        .join(' ')
        .replace(/\s+width=\{?[^}\s]+\}?/g, '')
        .replace(/\s+height=\{?[^}\s]+\}?/g, '')
        .replace(/\s+priority\s*/g, '')
        .trim();
      
      return `<img src="${src}" alt="${alt}" ${cleanAttrs}/>`;
    });

  // Pattern 2: <Image with closing tag </Image>
  result = result.replace(/<Image\s+([^>]*?)>/gs, (match, attrs) => {
    let src = '';
    let alt = '';
    let className = '';
    
    const srcMatch = attrs.match(/src=\{?"([^"]+)"/);
    const altMatch = attrs.match(/alt="([^"]*)"/);
    const classMatch = attrs.match(/className="([^"]*)"/);
    
    if (srcMatch) src = srcMatch[1];
    if (altMatch) alt = altMatch[1];
    if (classMatch) className = classMatch[1];
    
    let imgTag = `<img src="${src}" alt="${alt}"`;
    if (className) imgTag += ` className="${className}"`;
    imgTag += ' />';
    
    return imgTag;
  });
  
  // Remove closing Image tags
  result = result.replace(/<\/Image>/g, '');
  
  return result;
}

walkDir('./src', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = convertImageToImg(content);
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
});

console.log('Done fixing Image components');

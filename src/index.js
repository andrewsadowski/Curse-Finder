const fs = require('fs');

const readDirAndFile = locale => {
  const dir = fs.readdirSync('./data', 'utf-8');
  // console.log(dir);
  const isLocaleCovered = dir.includes(locale);
  if (isLocaleCovered) {
    const file = fs.readFileSync(`./data/${locale}`);
    console.log(file.toString());
  }
};

console.log(readDirAndFile('es'));

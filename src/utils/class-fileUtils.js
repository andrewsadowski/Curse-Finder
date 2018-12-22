const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);

class FileUtil {
  fileToArr(pathName) {
    const file = fs.readFile(pathName, 'utf8', err => {
      if (err) {
        throw err;
      }
    });
    const fileArr = file.split(' ');
    return fileArr;
  }

  async dirToArr(pathName) {
    try {
      const dir = await readdir(pathName);
      return dir;
    } catch (error) {
      if (error) {
        throw new Error(error);
        return `Unable to find dir: ${error}`;
      }
    }
  }

  async readFileByLocale(locale) {
    try {
      const dataDirArr = await dirToArr('./data');
      console.log(await dataDirArr);
      if (dataDirArr.includes(locale)) {
        const fileContent = await fs.readFileSync(`./data/${locale}`);
        const lineBreakRegEx = /\n/g;
        const arrFileContent = await fileContent
          .toString()
          .split(lineBreakRegEx);
        console.log(Array.isArray(arrFileContent));
        console.log(arrFileContent.length, arrFileContent);
        return arrFileContent;
      }
      return console.log(
        `The locale ${locale} is not currently supported... sorry!`
      );
    } catch (error) {
      throw new Error(error);
    }
}

const sub = new FileUtil();

console.log(sub.readFileByLocale('cs'));

module.exports = {
  FileUtil
};

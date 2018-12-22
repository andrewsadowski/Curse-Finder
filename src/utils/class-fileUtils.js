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
    const dataDirArr = await fs.readdir(
      './data',
      async (err, files) => {
        if (err) throw new Error(err);
        if (files.includes(locale)) {
          const fileContent = await fs.readFileSync(
            `./data/${locale}`
          );
          const lineBreakRegEx = /\n/g;
          const arrFileContent = await fileContent
            .toString()
            .split(lineBreakRegEx);
          const stringifiedContent = fileContent.toString();
          return { stringifiedContent, arrFileContent };
        }
        return console.log(
          `The locale ${locale} is not currently supported... sorry!`
        );
      }
    );
    return dataDirArr;
  }
}

const sub = new FileUtil();

console.log(sub.readFileByLocale('cs'));

module.exports = {
  FileUtil
};

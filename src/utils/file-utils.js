const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
/**
 * TODO: - Create utility that writes matches to console && file
 */
const fileToArr = pathName => {
  const file = fs.readFile(pathName, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
  const lineBreakRegEx = /\n/g;
  const fileArr = file.split(lineBreakRegEx);
  return fileArr;
};

/**
 *
 * @param {string} pathName - relative path to directory
 */
const dirToArr = async pathName => {
  try {
    const dir = await readdir(pathName);
    return dir;
  } catch (error) {
    if (error) {
      throw new Error(error);
      return `Unable to find dir: ${error}`;
    }
  }
};

/**
 *
 * @param {string} locale - Two letter locale code
 */
const readFileByLocale = async locale => {
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
};

// const output = readFileByLocale('es');
// console.log(output);
// console.log(Array.isArray(output);

module.exports = {
  fileToArr,
  dirToArr,
  readFileByLocale
};

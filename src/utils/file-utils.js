const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readfile = promisify(fs.readFile);

/**
 * TODO: - Create utility that writes matches to console && file
 */

/**
 *
 * @param {string} pathName - absolute path as string
 */
const fileToArr = async pathName => {
  const file = await readfile(pathName, 'utf8');
  const lineBreakRegEx = /\n/g;
  const fileArr = file.split(lineBreakRegEx);
  return fileArr;
};

/**
 *
 * @param {string} pathName - relative path to directory
 * TODO - utilize readFile instead of readFileSync
 */
const dirToArr = async pathName => {
  try {
    const dir = await readdir(pathName);
    return dir;
  } catch (error) {
    if (error) {
      throw new Error(error);
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
    if (dataDirArr.includes(locale)) {
      const fileContent = await fs.readFileSync(`./data/${locale}`);
      const lineBreakRegEx = /\n/g;
      const arrFileContent = await fileContent
        .toString()
        .split(lineBreakRegEx);
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

module.exports = {
  fileToArr,
  dirToArr,
  readFileByLocale
};

const fs = require('fs');

/**
 * TODO: - Create utility that orders said words
 * TODO: - Create utility that write matches to console && file
 */

const fileToArr = pathName => {
  const file = fs.readFile(pathName, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
  const fileArr = file.split(' ');
  return fileArr;
};

/**
 *
 * @param {string} locale - Two letter locale code
 */
const readFileByLocale = async locale => {
  const dataDirArr = await fs.readdir(
    './data',
    async (err, files) => {
      if (err) throw new Error(err);
      if (files.includes(locale)) {
        const fileContent = await fs.readFileSync(`./data/${locale}`);
        console.log(fileContent.toString());
        const stringifiedContent = fileContent.toString();
        return { stringifiedContent, fileContent };
      }
      console.log(
        `The locale ${locale} is not currently supported... sorry!`
      );

      return files;
    }
  );
  return dataDirArr;
};

module.exports = {
  fileToArr,
  readFileByLocale
};

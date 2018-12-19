const fs = require("fs");

/**
 * TODO: - Create utility that orders said words
 * TODO: - Create utility that write matches to console && file
 */

const fileToArr = pathName => {
  const file = fs.readFile(pathName, "utf8", err => {
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
 * @param {string} locale - Two letter locale code
 */
const readFileByLocale = async locale => {
  const dataDirArr = await fs.readdir("./data", async (err, files) => {
    try {
      if (err) throw new Error(err);
      if (files.includes(locale)) {
        const fileContent = await fs.readFileSync(`./data/${locale}`);
        const lineBreakRegEx = /\n/g;
        const arrFileContent = await fileContent
          .toString()
          .split(lineBreakRegEx);
        console.log(fileContent.toString());
        console.log(arrFileContent);
        const stringifiedContent = fileContent.toString();
        return { stringifiedContent, arrFileContent };
      }
      return console.log(
        `The locale ${locale} is not currently supported... sorry!`
      );

      return dataDirArr;
    } catch (err) {
      throw new Error(err);
    }
  });
};
readFileByLocale("cs");

// console.log(cs.stringifiedContent, cs.arrNaughtyContent);

module.exports = {
  fileToArr,
  readFileByLocale
};

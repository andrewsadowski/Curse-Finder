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
  try {
    const dataDirArr = await fs.readdir("./data", async (err, files) => {
      if (err) throw new Error(err);
      if (files.includes(locale)) {
        const fileContent = await fs.readFileSync(`./data/${locale}`);
        const lineBreakRegEx = /\n/g;
        const arrNaughtyContent = await fileContent
          .toString()
          .split(lineBreakRegEx);
        const stringifiedContent = await fileContent.toString();
        return { stringifiedContent, arrNaughtyContent };
      }
      return console.log(
        `The locale ${locale} is not currently supported... sorry!`
      );
    });
  } catch (err) {
    throw new Error(err);
  }
};
let cs = readFileByLocale("cs");

console.log(cs, cs.stringifiedContent, cs.arrNaughtyContent);

module.exports = {
  fileToArr,
  readFileByLocale
};

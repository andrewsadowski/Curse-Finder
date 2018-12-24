const fs = require('fs');
const alphaSort = require('alpha-sort');
const collator = new Intl.Collator();

const { readFileByLocale, dirToArr } = require('./file-utils');

const lowerCaseArrItems = arr => {
  let lowerCaseArr = arr.map(i => i.toLowerCase());
  return lowerCaseArr;
};

const sortLocaleSpecificFile = async locale => {
  try {
    const localeArr = await readFileByLocale(locale);
    let lowerCaseLocaleArr = await lowerCaseArrItems(localeArr);

    // console.log(
    //   `localeArr: ${localeArr}\n lowerCase: ${lowerCaseLocaleArr}`
    // );
    let sortedArr = await lowerCaseLocaleArr.sort(alphaSort.asc);
    // console.log(`localeArr: ${localeArr}\n sortedArr: ${sortedArr}`);
    return sortedArr;
  } catch (err) {
    throw new Error(err);
  }
};

// sortLocaleSpecificFile('es');
module.exports = {
  sortLocaleSpecificFile,
  lowerCaseArrItems
};

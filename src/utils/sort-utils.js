const fs = require('fs');
const alphaSort = require('alpha-sort');

const collator = new Intl.Collator();

const { readFileByLocale, dirToArr } = require('./file-utils');

let compare = (a, b) => (a === b ? 0 : collator.compare(a, b));

const getLocaleSpecificFile = async (pathName, locale) => {
  const localeArr = await readFileByLocale(locale);
  console.log(collator('cs'));
  let sortedArr = await localeArr.sort(alphaSort.asc);
  console.log(`localeArr: ${localeArr}\n sortedArr: ${sortedArr}`);
  return sortedArr;
};

getLocaleSpecificFile('sv');

/**
 * TODO - Sort array with INTL.colator (locale, array)
 */

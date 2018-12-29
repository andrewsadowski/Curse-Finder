const {
  fileToArr,
  dirToArr,
  readFileByLocale
} = require('../utils/file-utils');
const {
  lowerCaseArrItems,
  sortLocaleSpecificFile
} = require('../utils/sort-utils');

console.log(lowerCaseArrItems(['Merlin', 'Gandalf', 'Allanon']));
const testFile =
  '/Users/andrewsadowski/dev/nodeTest/Curse-Finder/src/__tests__/test-file.txt';

describe('file-utils', () => {
  test('fileToArr', async () => {
    const fileContent = await fileToArr(testFile);
    expect(Array.isArray(fileContent)).toBeTruthy();
  });

  test('readFileByLocale', async () => {
    const localeText = await readFileByLocale('es');
    expect(Array.isArray(localeText)).toBeTruthy();
  });

  test('dirToArr', async () => {
    const directory = await dirToArr('./data');
    console.log(directory);
  });
});

describe('sort-utils', () => {
  test('lowerCaseArrItems', () => {
    expect(
      lowerCaseArrItems(['Merlin', 'Gandalf', 'Allanon'])
    ).toEqual(['merlin', 'gandalf', 'allanon']);
  });
  xtest('sortLocaleSpecificFile', () => {});
});

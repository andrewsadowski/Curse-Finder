const {
  fileToArr,
  readFileByLocale
} = require('../utils/file-utils');

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
});

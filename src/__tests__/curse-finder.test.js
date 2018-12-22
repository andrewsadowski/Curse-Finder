const {
  fileToArr,
  readFileByLocale
} = require('../utils/file-utils');

const testFile = './test-file.txt';

describe('file-utils', () => {
  test('fileToArr', () => {
    expect(() => typeof fileToArr(testFile).toBe('array'));
  });

  test('readFileByLocale', async () => {
    const localeText = await readFileByLocale('es');
    expect(Array.isArray(localeText)).toBeTruthy();
  });
});

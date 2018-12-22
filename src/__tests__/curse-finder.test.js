const {
  fileToArr,
  readFileByLocale
} = require('../utils/file-utils');
const { FileUtil } = require('../utils/class-fileUtils');

const testFile = './test-file.txt';

beforeAll(async () => {
  const localeText = await readFileByLocale('cs');
  console.log(await `localeText: ${localeText}`);
  return localeText;
});

describe('file-utils', () => {
  test('fileToArr', () => {
    expect(() => typeof fileToArr(testFile).toBe('array'));
  });

  test('readFileByLocale', async () => {
    expect.assertions(1);

    // const localeText = await readFileByLocale('cs');
    // // const localeTextLength = await localeText.length;
    // console.log(localeText);

    expect(typeof localeText).toBe('array');
  });
});

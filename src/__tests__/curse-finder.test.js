const { fileToArr, readFileByLocale } = require("../utils/file-utils");

const testFile = "./test-file.txt";

describe("file-utils", () => {
  test("fileToArr", () => {
    expect(() => fileToArr(testFile).toBe(typeof "array"));
  });
  test("readFileByLocale", async done => {
    const localeText = await readFileByLocale("es");
    console.log(localeText);
    const stringText = await localeText.stringifiedContent;
    const arrLocaleText = await localeText.arrNaughtyContent;

    expect(() => readFileByLocale("cs").toBe(typeof "object"));
    expect(arrLocaleText).toBe(typeof "array");
    done();
  });
});

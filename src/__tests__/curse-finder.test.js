const { fileToArr, readFileByLocale } = require("../utils/file-utils");

const testFile = "./test-file.txt";

describe("file-utils", () => {
  test("fileToArr", () => {
    expect(() => fileToArr(testFile).toBe(typeof "array"));
  });
  test("readFileByLocale", async () => {
    const localeText = await readFileByLocale("es");
    const stringText = localeText.stringifiedContent;
    const arrLocaleText = localeText.arrNaughtyContent;

    expect(() => readFileByLocale("cs").toBe(typeof "array"));
    expect(arrNaughtyContent).toBe(typeof "array");
  });
});

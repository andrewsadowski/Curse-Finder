const { fileToArr, readFileByLocale } = require("../utils/file-utils");
const { FileUtil } = require("../utils/class-fileUtils");

const testFile = "./test-file.txt";

describe("file-utils", () => {
  test("fileToArr", () => {
    expect(() => fileToArr(testFile).toBe(typeof "array"));
  });
  test("readFileByLocale", async done => {
    const localeText = await readFileByLocale("es");
    // console.log(localeText);

    expect(() => readFileByLocale("cs").toBe(typeof "array"));
    done();
  });
});

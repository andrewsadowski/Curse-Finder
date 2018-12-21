const { fileToArr, readFileByLocale } = require("../utils/file-utils");
const { FileUtil } = require("../utils/class-fileUtils");

const testFile = "./test-file.txt";

const localeArr = async () => {
  const localeText = await readFileByLocale("es");

  return localeText;
};

describe("file-utils", () => {
  test("fileToArr", () => {
    expect(() => typeof fileToArr(testFile).toBe("array"));
  });
  xtest("readFileByLocale", async () => {
    // // const localeText = await localeArr();
    // console.log(readFileByLocale("es"));
    // // const localeText = await readFileByLocale("es");
    // expect(() => readFileByLocale("es")).toBe("array");
  });
});

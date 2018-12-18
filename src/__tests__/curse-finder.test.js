const { fileToArr, readFileByLocale } = require("../utils/file-utils");
const testFile = "./test-file.txt";

describe("file-utils", () => {
  test("fileToArr", () => {
    expect(() => fileToArr("./test-file.txt").toBe(typeof "array"));
  });
});

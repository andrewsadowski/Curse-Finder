const meow = require("meow");

const { readFileByLocale } = require("./utils/file-utils");

const cli = meow(
  `
	Usage
	  $ curseFinder -f [file-path] -l [locale-code]
	Options
	  --file, -f  Absolute Path To File  
    --locale, -l  Locale Code
	Examples
	  $ curseFinder -f 'Users/fakeUser/Desktop/naughtyTextFile.txt' -l 'ar'
`,
  {
    flags: {
      file: {
        type: "string",
        alias: "f"
      },
      locale: {
        type: "string",
        alias: "l"
      }
    }
  }
);
const input = cli.input[0];
const flags = cli.flags;
const locale = cli.flags.locale || cli.flags.l;
console.log(`locale: ${locale}`);

(async () => {
  const localeData = await readFileByLocale(locale);
  // console.log(input, flags);
  return localeData;
})();

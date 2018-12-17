const meow = require('meow');

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
        type: 'string',
        alias: 'f'
      },
      locale: {
        type: 'string',
        alias: 'l'
      }
    }
  }
);
const input = cli.input[0];
const flags = cli.flags;

(async () => {
  await input;
  return console.log(input, flags);
})();

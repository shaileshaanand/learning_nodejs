var async = require("async");
var fs = require("fs");
const filenames = [
  "0.txt",
  "1.txt",
  "2.txt",
  "3.txt",
  "4.txt",
  "5.txt",
  "6.txt",
  "7.txt",
  "8.txt",
  "9.txt",
];

async.each(filenames, (filename) => {
  fs.readFile(
    `files/${filename}`,
    {
      encoding: "utf8",
      flag: "r",
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(filename, data.length);
      }
    }
  );
});

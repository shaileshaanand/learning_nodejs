const async = require("async");
const fs = require("fs").promises;
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
Promise.all(
  filenames.map(async (filename) => {
    return fs.readFile(`files/${filename}`, {
      encoding: "utf8",
      flag: "r",
    });
  })
).then((data) => {
  console.log(data.join("\n"));
});

// console.log(content);

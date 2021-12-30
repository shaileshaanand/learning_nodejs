// http server with file upload form
// Language: javascript

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(fs.readFileSync("home.html", { encoding: "utf-8", flag: "r" }));
    } else if (req.url === "/upload") {
      req.rawHeaders.req.on("data", (chunk) => {
        fs.appendFile("uploads/upload.pdf", chunk, "binary", (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File saved");
          }
        });
      });
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Done");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 Page Not Found");
    }

    res.end();
  })
  .listen(8080);

const http = require("http");
const fs = require("fs");

const listener = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fs.readFileSync("home.html", { encoding: "utf-8", flag: "r" }));
  } else if (req.url === "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fs.readFileSync("admin.html", { encoding: "utf-8", flag: "r" }));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 Page Not Found");
  }

  res.end();
};

http.createServer(listener).listen(8080);

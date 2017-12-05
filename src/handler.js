const fs = require("fs");

const handler = (filePath, type, res) => {
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("Error on the server side");
      console.log(err);
    }
    res.writeHead(200, { "Content-type": type });
    res.end(file);
  });
};

module.exports = handler;

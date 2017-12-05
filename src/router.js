const handler = require("./handler");
const router = (req, res) => {
  const { url } = req;
  // const url = req.url;
  const filePath = { "/": __dirname + "/../public/index.html" }[url];
  const type = { "/": "text/html" }[url];
  if (url === "/") {
    handler(filePath, type, res);
  } else {
    res.writeHead(404);
    res.end("Not Found ");
  }
};

module.exports = router;

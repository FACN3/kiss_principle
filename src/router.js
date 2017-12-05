const handler = require("./handler");
const add_user =require ("./database/add_user");

console.log('typeof add_user', typeof add_user);

const router = (req, res) => {
  const { url } = req;
  // const url = req.url;
  const filePath = { "/": __dirname + "/../public/index.html" }[url];
  const type = { "/": "text/html" }[url];
  if (url === "/") {
    handler(filePath, type, res);
  }else if(url==="/add_user"){

    add_user("test","password",10,"email@example.com","DontKnow",res);

  } else {
    res.writeHead(404);
    res.end("Not Found ");
  }
};

module.exports = router;

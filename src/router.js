const handler = require("./handler");
const add_user =require ("./database/add_user");
const qs = require("querystring");

console.log('typeof add_user', typeof add_user);

const router = (req, res) => {
  const { url } = req;
  // const url = req.url;
  const filePath = { "/": __dirname + "/../public/index.html" }[url];
  const type = { "/": "text/html" }[url];
  if (url === "/") {
    handler(filePath, type, res);
  }else if(url==="/add_user"){

    var data = "";
    req.on("data" ,(chunk)=>{
        data += chunk;


    });
    req.on("end", () => {
      console.log(data);
      console.log('parsed string', qs.parse(data));
      const user = qs.parse(data)
      add_user(user.user_name, user.password,parseInt(user.age),user.email,user.gender,res);



    });


  } else {
    res.writeHead(404);
    res.end("Not Found ");
  }
};

module.exports = router;

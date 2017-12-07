const http = require("http");
const fs = require("fs");
const router = require("./router");
const fb_places = require("./fb_api");
/*
fs.readFileSync(__dirname + '/../config.env', (err, file) => {
  if(err){console.log('error');}
  console.log(file);
});
*/
fb_places();
//console.log('env2', env2);
const port = process.env.PORT || 3003;
const host = process.env.HOST || "localhost";
const server = http.createServer(router);

server.listen(port, () => {
  console.log(`We are listing at http://${host}:${port}`);
  //console.log("we are listing at"+host+":"+port);
});

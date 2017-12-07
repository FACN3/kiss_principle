const handler = require("./handler");
const add_user = require("./database/add_user");
const add_review = require("./database/add_review");
const get_places = require("./database/get_places");
const get_reviews = require("./database/get_reviews");

const qs = require("querystring");
let response;
const cb = (err) => {
  if(err) {
    response.writeHead(500);
    response.end();
  }
  console.log('success');
  response.writeHead(302,{'Location':'/'});
  response.end();
}

console.log("typeof add_user", typeof add_user);

const router = (req, res) => {
  response = res;
  const { url } = req;
  console.log("requested url: ", url);
  // const url = req.url;
  const filePath = {
    "/": __dirname + "/../public/index.html",
    "/index.js": __dirname + "/../public/index.js",
    "/style.css": __dirname + "/../public/style.css"
  }[url];
  const type = {
    "/": "text/html",
    "/index.js": "application/javascript",
    "/style.css": "text/css"
  }[url];

  if (url === "/" || url === "/index.js" || url === "/style.css") {
    handler(filePath, type, res);
  } else if (url.indexOf("get_review") === 1) {
    var cafe = url.substring(url.indexOf("?") + 1);
    console.log("cafe_name:", unescape(url));
    get_reviews(res, unescape(cafe));
  } else if (url === "/get_places") {
    get_places(res);
  } else if (url === "/add_user") {
    var data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      console.log(data);
      console.log("parsed string", qs.parse(data));
      const user = qs.parse(data);
      add_user(
        user.user_name,
        user.password,
        parseInt(user.age),
        user.email,
        user.gender,
        cb
      );
    });
  } else if (url === "/add_review") {
    var data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      console.log(data);
      console.log("parsed string", qs.parse(data));
      const review = qs.parse(data);
      add_review(
        review.name_id,
        review.place_id,
        review.review,
        parseInt(review.rating),
        cb
      );
    });
  } else {
    res.writeHead(404);
    res.end("Not Found ");
  }
};

module.exports = router;

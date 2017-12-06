const request = require("request");
const add_place = require("./database/add_place");
require("env2")("./config.env");
let url = `https://graph.facebook.com/v2.11/search?type=place&center=32.69925,35.30483&distance=1000&categories=["FOOD_BEVERAGE"]&fields=name,location&access_token=300398043801756|${
  process.env.FB_SECRET
}`;

const fb_api = () => {
  request.get(url, (error, response, body) => {
    const { data } = JSON.parse(body);
    data.forEach(place => {
      add_place(
        place.name,
        8,
        `(${place.location.latitude},${place.location.longitude})`,
        `${place.location.street}, ${place.location.street}`,
        null
      );
    });
  });
};

module.exports = fb_api;

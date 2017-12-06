console.log('index.js run');

function getPlaces() {
  //console.log('trying to run');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      populate(JSON.parse(xhr.responseText));
      //console.log('we are here');
      console.log(xhr.responseText);
    }
  };
  xhr.open("GET", "/get_places", "true");
  //console.log('after xhr.open');
  xhr.send();
}

function populate(places) {
  var bar = document.getElementById("search_bar");
  var list = document.createElement("datalist");
  var input = document.getElementById("dropdown")
  list.id = "coffee_shops"
  input.appendChild(list);
  places.forEach(function(place) {
    var name = document.createElement("option");
    name.value = place.name;
    list.appendChild(name);
  });
}

function display_review(data) {
  var div = document.getElementById("con");
  if(data){
    data.forEach(function(element) {
      var review = document.createElement("h2");
      review.textContent = element.review;
      div.appendChild(review);
    })
  }
  else{
    var review = document.createElement("h2");
    review.textContent = 'There is no reviews for this cafe';
    div.appendChild(review);
  }
}

document.getElementById('form').addEventListener('submit', getReviews)


function getReviews(event){
  console.log('event', event);
  event.preventDefault();
  console.log('trying to get reviews');
  var xhr = new XMLHttpRequest();
  word = document.getElementById('dropdown').value;
  console.log('lets get the data');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // populate(JSON.parse(xhr.responseText));
      console.log(JSON.parse(xhr.responseText));
      display_review(JSON.parse(xhr.responseText));
      // console.log(xhr.responseText);
    }
  };
  if (word) {
    xhr.open("GET", '/get_review?' + word, "true");
    xhr.send();
  }
}

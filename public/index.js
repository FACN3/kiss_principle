function getPlaces() {
  //console.log('trying to run');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      populate(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", "/get_places", "true");
  //console.log('after xhr.open');
  xhr.send();
}

function populate(places) {
  var bar = document.getElementById("search_bar");
  var list = document.createElement("datalist");
  var input = document.getElementById("dropdown");
  list.id = "coffee_shops";
  input.appendChild(list);
  places.forEach(function(place) {
    var place_name = document.createElement("option");
    place_name.value = place.name;
    list.appendChild(place_name);
  });
}

function display_review(response) {
  var div = document.getElementById("con");
  while (div.firstChild) {
    div.firstChild.remove();
  }

  var map = document.createElement("div");
  map.className = "map";
  var data = response.rows;
  document.getElementById("place_id").value = response.id;
  if (data.length > 0) {
    data.forEach(function(element) {
      var review = document.createElement("h2");
      review.textContent = element.review;
      div.appendChild(review);
    });
  } else {
    var review = document.createElement("h2");
    review.textContent = "There is no reviews for this cafe";
    div.appendChild(review);
  }
  div.appendChild(map);
  showMap(response.location, response.name, map);
}

document.getElementById("form").addEventListener("submit", getReviews);

function getReviews(event) {
  console.log("event", event);
  event.preventDefault();
  console.log("trying to get reviews");
  var xhr = new XMLHttpRequest();
  word = document.getElementById("dropdown").value;
  console.log("lets get the data");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // populate(JSON.parse(xhr.responseText));
      console.log(JSON.parse(xhr.responseText));
      display_review(JSON.parse(xhr.responseText));
      // console.log(xhr.responseText);
    }
  };
  if (word) {
    xhr.open("GET", "/get_review?" + word, "true");
    xhr.send();
  }
}
function showMap(location, name, mapDiv) {
  console.log("Ere");
  map = new google.maps.Map(mapDiv, {
    center: { lat: location.x, lng: location.y },
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: name
  });
}
getPlaces();

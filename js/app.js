var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder()
  var mapOptions = {
    center: { lat: 37.7833, lng: -122.4167},
    zoom: 8
  };
 map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
}

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
  '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

function initialize() {
  var mapOptions = {
    center: { lat: 37.7833, lng: -122.4167},
    zoom: 8
  };
  var map = new
  google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
  '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

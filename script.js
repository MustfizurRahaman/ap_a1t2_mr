var map = L.map('map').setView([37.75, -122.4], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

  // load GeoJSON from an external file
var ratIcon = L.icon({
    iconUrl: 'http://maptimeboston.github.io/leaflet-intro/rat.gif',
    iconSize: [20, 20]
});

$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson", function(data) {
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, {icon: ratIcon});
        }
    }).addTo(map);
});


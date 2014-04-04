var map = L.map('map').
    setView([37.39103, -5.99579], 9);

// OFFICIAL http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
// BASIC http://{s}.acetate.geoiq.com/tiles/acetate/{z}/{x}/{y}.png
// GEOGRAPHIC: http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png

L.tileLayer('http://{s}.tile.cloudmade.com/9067860284bc491e92d2342cc51d47d9/998/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href=”http://openstreetmap.org”>OpenStreetMap</a> contributors, <a href=”http://creativecommons.org/licenses/by-sa/2.0/”>CC-BY-SA</a>, Imagery © <a href=”http://cloudmade.com”>CloudMade</a>',
    maxZoom: 18
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 10,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
    color: "#111", fillColor: "#ffaa00"
};

L.geoJson(sevilla, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    // style: function(feature) {
    //     switch (feature.properties.category) {
    //         case 'good': return {color: "#111", fillColor: "#ffaa00"};
    //         case 'bad':   return {color: "#111", fillColor: "#ccc"};
    //     }
    // },
    // filter: function(feature, layer) {
    //     return feature.properties.category == $('#select-category').val();
    // }
}).addTo(map);

var marker = L.marker([37.39103, -5.99579],{name: "Demo", draggable: true}).addTo(map);

marker.on('click', function(d) { $('#content-box h3').text(d.latlng.toString()); });

function onEachFeature(feature, layer) {
    console.log(sevilla);
    layer.bindPopup("<b>"+feature.properties.title +
                    "</b><br>"+feature.properties.placename);
}
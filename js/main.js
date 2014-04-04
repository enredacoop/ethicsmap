var map = L.map('map').
    setView([37.37, -5.93], 13);

// OFFICIAL http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
// OFFICIAL more info: http://{s}.tile.osm.org/{z}/{x}/{y}.png
// BASIC http://{s}.acetate.geoiq.com/tiles/acetate/{z}/{x}/{y}.png
// GEOGRAPHIC: http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png
// http://{s}.tile.cloudmade.com/9067860284bc491e92d2342cc51d47d9/998/256/{z}/{x}/{y}.png

L.tileLayer('http://{s}.tile.cloudmade.com/9067860284bc491e92d2342cc51d47d9/998/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href=”http://openstreetmap.org”>OpenStreetMap</a> contributors, <a href=”http://creativecommons.org/licenses/by-sa/2.0/”>CC-BY-SA</a>, Imagery © <a href=”http://cloudmade.com”>CloudMade</a>',
    maxZoom: 18
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 10,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJson(sevilla, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    // style: function(feature) {
    //     console.log(feature.properties.cat);
    //     switch (feature.properties.cat) {
    //         case 'good': return {color: "#111", fillColor: "#ffaa00"};
    //         case 'bad':   return {color: "#111", fillColor: "#ccc"};
    //         default: return {color: "#111", fillColor: "#F00"};
    //     }
    // },
    onEachFeature: function(feature, layer) {
        // layer.bindPopup(feature.properties.name);
    },
    // filter: function(feature, layer) {
    //     return feature.properties.cat == $('#select-category').val();
    // }
})
.on('click', function(d) {
    // alert(d.layer.feature.properties.name);
    $('#content-box').show();
})
.addTo(map);

$('#content-box #close').click(function() {
    $('#content-box').hide();
});


// if('geolocation' in navigator){
//    navigator.geolocation.getCurrentPosition(success);
// }
// function success(pos){
//    map.setView([pos.coords.latitude, pos.coords.longitude],13);
// }
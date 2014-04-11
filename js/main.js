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
    fillOpacity: 0.8,
    color: '#F80000',
    fillColor: '#F80000'
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
    $('#name-breadcrumb').text(d.layer.feature.properties.name);
    $('#name').html(d.layer.feature.properties.name);
    $('#des').text(d.layer.feature.properties.des);
    $('#cat').text(d.layer.feature.properties.cat);
    $('#direccion').html("<span class='glyphicon glyphicon-map-marker'></span> " + d.layer.feature.properties.dire + " - " + d.layer.feature.properties.localidad + "(" + d.layer.feature.properties.provincia + ")");
    $('#phone').text(d.layer.feature.properties.phone);
    $('#url').html("<a href='" + d.layer.feature.properties.url + "' target='_blank'>" + d.layer.feature.properties.url + "</a>");
    $('#mail').html("<a href='mailto:" + d.layer.feature.properties.mail + "' target='_blank'>" + d.layer.feature.properties.mail + "</a>");
    $('#content-box').show();
})
.addTo(map);

$('#close').click(function() {
    $('#content-box').hide();
});

$('#about-link').click(function() {
    $('#about-box').show();
});

$('#about-close').click(function() {
    $('#about-box').hide();
});

$('#other').click(function() {
    alert("This action will show you places in the same category #cooperation");
});

$('#nearby').click(function() {
    alert("This action will show you places nearby from the current place #cooperation");
});



// if('geolocation' in navigator){
//    navigator.geolocation.getCurrentPosition(success);
// }
// function success(pos){
//    map.setView([pos.coords.latitude, pos.coords.longitude],13);
// }
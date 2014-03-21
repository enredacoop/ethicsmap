var map = L.map('map').
    setView([37, 5], 5);


// http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href=”http://openstreetmap.org”>OpenStreetMap</a> contributors, <a href=”http://creativecommons.org/licenses/by-sa/2.0/”>CC-BY-SA</a>, Imagery © <a href=”http://cloudmade.com”>CloudMade</a>',
    maxZoom: 18
}).addTo(map);

// L.control.scale().addTo(map);

// L.marker([41.66, -4.71],{draggable: true}).addTo(map);
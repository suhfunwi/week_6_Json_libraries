let centerOfCountryCoordinates = [39.50, -98.35]
//latitude and longitude of the middle of the US, in kansas
let zoomLevel = 4
let map = L.map('bridge-map').setView(centerOfCountryCoordinates, zoomLevel)
//where the view is and the zoom level of the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//tile images
bridges = [
    {"Bridge_Name":"Verrazano-Narrows Bridge", "City, State": "New York, NY", "Span": "1298.4", "Location": [40.6066, -74.0447]},
    {"Bridge_Name":"Golden Gate Bridge", "City, State": "San Francisco and Marin, CA", "Span": "1280.2", "Location": [37.8199, -122.4783]},
    {"Bridge_Name":"Mackinac Bridge", "City, State": "Mackinaw and St Ignace, MI", "Span": "1158.0", "Location": [45.8174, -84.7278]},
    {"Bridge_Name":"George Washington Bridge", "City, State": "New York, NY and New Jersey, NJ", "Span": "1067.0", "Location": [40.8517, -73.9527]},
    {"Bridge_Name":"Tacoma Narrows Bridge", "City, State": "Tacoma and Kitsap, WA", "Span": "853.44", "Location": [47.2690, -122.5517]},
] //data array for the bridges
let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [50, 95],
    iconAnchor: [22, 94],
    popupAnchor: [3, -76]
})//custom bridge marker
bridges.forEach(function (bridgeInfo){
    let markerText = `<b>${bridgeInfo.Bridge_Name}<br>${bridgeInfo.Span}</b> `
    L.marker(bridgeInfo.Location, {icon: bridgeIcon}).bindPopup(markerText).addTo(map)
})// add the name and length to the popup of each bridge,
// as well as the custom leaflet marker

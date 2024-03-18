let metroAreaCenterCoordinates = [44.96, -93.2]
//latitude and longitude
let zoomLevel = 9
//1 = whole world, the max is 20 = city blocks
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)
//tells leaflet where we want to set the view of the map
//maps also need tiles, which is the background that shows road, buildings etc
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//'L' is the leaflet object
//this is the link to get the correct tile images
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]
//array of data for minnesota state colleges
campuses.forEach(function (collegeCampus){
    let markerText = `<b>${collegeCampus.name}</b><br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})
//a loop to add all their markers and popups to the
// map without writing the individual code
//also bolds them

// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu"> Website</a>')
//     .addTo(map)
// //adds a map marker for mctc to the map
// //bindPopup adds a popup to the marker that says minneapolis
// // can also add html to the popup, and add a link
// let  stPaulCoordinates = [44.9483, - 93.1099]
// let stPaulMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)
// //does the same for st Paul
// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale College<br><a href="https://www.normandale.edu">Website</a>')
//     .addTo(map)
// //same process
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'dodgerblue',
    radius: 30000,
    fillOpacity: 0.2
    //for fillOpacity, 1 would make it a solid colored circle
    // and 0 makes it see through
})
    .bindPopup('Twin Cities Metro Area')
    .addTo(map)
//adds a circle to the middle of the metro area

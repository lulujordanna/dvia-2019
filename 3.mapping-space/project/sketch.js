// the data loaded from a USGS-provided CSV file
var table;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("../data/all_month.csv", "csv", "header");
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // call our function (defined below) that populates the maps with markers based on the table contents
    addCircles();

    // generate a p5 diagram that complements the map, communicating the earthquake data non-spatially
    createCanvas(800, 200)
    background(233)
    stroke(255);

    var colorScale = chroma.scale('YlGnBu').mode('lch')
    var start = 30;
    var step = 40;

for (var i=0; i<17; i++){
    var loc = start + i*step
    fill(colorScale(i/17).rgb())
    rect(loc, 20, 40, 75);
  }
}

function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map
    mymap = L.map('quake-map').setView([38.7745018, -120.7409973], 5.5);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/

    var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }).addTo(mymap);;
}

function addCircles(){
    // calculate minimum and maximum values for magnitude and depth
    var magnitudeMin = 0.0;
    var magnitudeMax = columnMax(table, "mag");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    var depthMin = 0.0;
    var depthMax = columnMax(table, "depth");
    console.log('depth range:', [depthMin, depthMax])

    // step through the rows of the table and add a dot for each event
    for (var i=0; i<table.getRowCount(); i++){
        var row = table.getRow(i)

        // skip over any rows where the magnitude data is missing
        if (row.get('mag')==''){
            continue
        }

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: '#296c96',      // the dot stroke color
            fillColor: '#4591bf', // the dot fill color
            fillOpacity: 0.25,  // use some transparency so we can see overlaps
            radius: row.getNum('mag')* 10000
        })

        // place the new dot on the map
        circle.addTo(mymap);
    }
}

// // removes any circles that have been added to the map
// function removeAllCircles(){
//     mymap.eachLayer(function(layer){
//         if (layer instanceof L.Circle){
//             mymap.removeLayer(layer)
//         }
//     })
// }

// get the maximum value within a column
function columnMax(tableObject, columnName){
    // get the array of strings in the specified column
    var colStrings = tableObject.getColumn(columnName);

    // convert to a list of numbers by running each element through the `float` function
    var colValues = _.map(colStrings, float);

    // find the largest value in the column
    return _.max(colValues);
}

// get the minimum value within a column
function columnMin(tableObject, columnName){
    // get the array of strings in the specified column
    var colStrings = tableObject.getColumn(columnName);

    // convert to a list of numbers by running each element through the `float` function
    var colValues = _.map(colStrings, float);

    // find the largest value in the column
    return _.min(colValues);
}

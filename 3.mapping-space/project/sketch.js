// the data loaded from a USGS-provided CSV file
var table;
let img;

// my leaflet.js map
var mymap;
var colorScale = chroma.scale('YlGnBu').mode('lch')

//magnitude scale + values
let scale = ['-1', '0', '1', '2', '3', '4', '5', '6']; 
var totalValues = [565, 3360, 5340, 1530, 314, 581, 122, 9];

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("../data/all_month2.csv", "csv", "header");
    img = loadImage('../project/day-graph.png');
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // call our function (defined below) that populates the maps with markers based on the table contents
    addCircles();

    // generate a p5 diagram that complements the map, communicating the earthquake data non-spatially
    createCanvas(1440, 3000)
    background(233)
    noStroke()
    
    //Setting up Typography
    textFont("Proxima Nova")
    fill(0)
    textSize(16)

    push(); 
    textSize(28)
    textStyle(BOLD)
    text(`Evaluating Magnitude`, 45, 55)
    pop(); 
    
    text(`Plotting ${table.getRowCount()} seismic events`, 45, 78)

    var start = 45;
    var step = 170;
    for (var i=0; i<8; i++){
        var loc = start + i*step
        fill(colorScale(i/8).rgb())
        rect(loc, 100, 170, 50);
    }

    for (var i=0; i<8; i++){
        var loc = start + i*step
        fill(0)
        text(scale[i], loc + 75, 180);
    }
    
    // push();
    // textSize(20)
    // textStyle(BOLD)
    // text(`Plotting ${table.getRowCount()} seismic events in order of occurance from October 7th to November 6th`, 45, 220)
    // pop(); 
    
    // image(img, 30, 230, 1380, 1200)
    
    push();
    textSize(20)
    textStyle(BOLD)
    text(`Plotting ${table.getRowCount()} seismic events grouped by magnitude`, 45, 1500)
    pop(); 

    var start2 = 23;
    var step2 = 45;

    for (var i=0; i<8; i++){
        var loc = start2 + i*step2
        text(scale[i], loc + 26, 1535);
    }

    for (var i = 0; i < totalValues.length; i++) {
        fill(colorScale(i/8).rgb()); 
        rect(i * 45 + 45, 1540, 20, totalValues[i]);
    }

    stroke('white')
    fill('white')
    rect(900, 1540, 500, 400)

    push();
    fill(0)
    text(`Paragraph`, 920, 1600)
    pop();
}

function setupMap(){
    /*
    LEAFLET CODE
    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map
    mymap = L.map('quake-map').setView([38.499427, -122.949844], 4);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/

    var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 2,
        maxZoom: 6,
        ext: 'png'
    }).addTo(mymap);;
}

function addCircles(){
    // calculate minimum and maximum values for magnitude and depth
    var magnitudeMin = columnMin(table, "magReclass");
    var magnitudeMax = columnMax(table, "magReclass");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    // step through the rows of the table and add a dot for each event
    for (var i=0; i<table.getRowCount(); i++){
        var row = table.getRow(i)

        // skip over any rows where the magnitude data is missing
        if (row.get('magReclass')==''){
            continue
        }

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: colorScale(row.getNum('magReclass')/6).hex(), // the dot stroke color
            fillColor: colorScale(row.getNum('magReclass')/6).hex(), // the dot fill color
            fillOpacity: 1.0,
            radius: row.getNum('magReclass')* 10000
        })

        // place the new dot on the map
        circle.addTo(mymap);
    }
}

///////////////////
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
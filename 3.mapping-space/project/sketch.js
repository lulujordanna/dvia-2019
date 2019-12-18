// the data loaded from a USGS-provided CSV file
var table;
let img;
let img2;

// my leaflet.js map
var mymap;
var colorScale = chroma.scale('YlGnBu').mode('lch').domain([0, 7])

//magnitude scale + values
let scale = ['-1', '0', '1', '2', '3', '4', '5', '6']; 
var totalValues = [565, 3360, 5340, 1530, 314, 581, 122, 9];

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("../data/all_month2.csv", "csv", "header");
    img = loadImage('../project/day-graph.png');
    img2 = loadImage('../project/totals.png');
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // call our function (defined below) that populates the maps with markers based on the table contents
    addCircles();

    // generate a p5 diagram that complements the map, communicating the earthquake data non-spatially
    createCanvas(1440, 4000)
    background(255)
    noStroke()
    
    //Setting up Typography
    textFont("Montserrat")
    fill(141, 153, 163)
    textSize(16)

    //Color Scale
    var start = 45;
    var step = 170;
    for (var i=0; i<8; i++){
        var loc = start + i*step
        fill(colorScale(i).hex())
        rect(loc, 60, 170, 22);
    }

    for (var i=0; i<8; i++){
        var loc = start + i*step
        fill(141, 153, 163)
        text(scale[i], loc + 75, 110);
    }

    push();
    stroke(141, 153, 163);
    strokeWeight(0.25);
    line(45, 150, 1400, 150);
    pop(); 

    //Graph by Day
    push();
    textSize(22)
    textStyle(BOLD)
    fill(141, 153, 163)
    text(`MAGNITUDE BY DAY`, 45, 215)
    pop(); 

    push();
    fill(141, 153, 163)
    let s = `Earthquakes are grouped by representative value of the Richter magnitude scale. Each bar highlights of the total number of earthquakes for that day.`
    text(s, 45, 225, 1400, 300)
    pop();
    
    image(img, 30, 250, 1300, 1287)

    push();
    stroke(141, 153, 163);
    strokeWeight(0.25);
    line(45, 1540, 1400, 1540);
    pop(); 
    
    //Graph by Magnitude
    push();
    textSize(22)
    textStyle(BOLD)
    fill(141, 153, 163)
    text(`MAGNITUDE BY CLASSIFICATION`, 45, 1610)
    pop(); 

    var start2 = 23;
    var step2 = 45;

    for (var i=0; i<8; i++){
        var loc = start2 + i*step2
        text(scale[i], loc + 26, 1665);
    }

    for (var i = 0; i < totalValues.length; i++) {
        fill(colorScale(i).hex()); 
        rect(i * 45 + 45, 1675, 22, totalValues[i]);
    }

    image(img2, 495, 1675, 800, 34)

    push();
    fill(141, 153, 163)
    let s2 = `Both diagrammatic visualizations highlight that the dominate earthquake magnitude size falls between 0 - 2. Mapping this by classification provides an aggregated view, while the stacked bar chart above is a in-depth representation of the same data.`
    text(s2, 500, 1730, 820, 300)
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
    mymap = L.map('quake-map', {scrollWheelZoom: false }).setView([38.499427, -122.949844], 4);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/

    var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	minZoom: 2,
    maxZoom: 6,
 }).addTo(mymap);
}

function addCircles(){
    // calculate minimum and maximum values for magnitude and depth
    var magnitudeMin = columnMin(table, "mag");
    var magnitudeMax = columnMax(table, "mag");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    // step through the rows of the table and add a dot for each event
    for (var i=0; i<table.getRowCount(); i++){
        var row = table.getRow(i)

        // skip over any rows where the magnitude data is missing
        if (row.get('mag')==''){
            continue
        }

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: colorScale(row.getNum('magReclassColor')).hex(), // the dot stroke color
            fillColor: colorScale(row.getNum('magReclassColor')).hex(), // the dot fill color
            fillOpacity: 1.0,
            radius: row.getNum('mag')* 10000
        })

        // place the new dot on the map
        circle.bindPopup(moment(row.get('time')).format('MMMM Do YYYY') + "," + " " + row.getNum('mag') + " " + 'magnitude' ).addTo(mymap);
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
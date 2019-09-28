var colours = ['#B6CBDD','#457ABF','#8CC4ED','#FFEDAE','#FFB4BB','#A991E8','#C1F0F4','#F17A97','#F2526E','#CCE6A9','#F2C53D','#F28729']; 
var gradient = chroma.scale(colours).mode('lab'); 
function colourForProgress(pct){
  return gradient(pct).hex(); 
}

var shades = ['#CCCCCC','#999999','#666666', '#333333' ,'#000000'];
var grayscale = chroma.scale(shades).mode('lab'); 
function shadesForProgress(pct){
  return grayscale(pct).hex(); 
}

function setup() {
  createCanvas(400, 400); 
  frameRate(60); 
}

function draw() {
  background(255); 
  var now = clock(); 

  push();
  var yearShade = shadesForProgress(now.progress.year);
  noStroke(); 
  fill(yearShade); 
  rect(50,50,300,300); 
  pop();

  push();
  var monthColour = colourForProgress(now.progress.month); 
  fill(monthColour);
  noStroke(); 
  rect(150,150,100,100); 
  pop();
}
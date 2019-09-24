var colours = ['#B6CBDD','#457ABF','#8CC4ED','#FFEDAE','#FFB4BB','#A991E8','#C1F0F4','#F17A97','#F2526E','#CCE6A9','#F2C53D','#F28729']; 

var gradient = chroma.scale(colours).mode('lab'); 
function colourForProgress(pct){
  return gradient(pct).hex(); 
}

function setup() {
  createCanvas(400, 400); 
  frameRate(60); 
}

function draw() {
  background(255); 
  var now = clock(); 

  noStroke(); 
  fill(234,234,234); 
  rect(50,50,300,300); 

  var monthColour = colourForProgress(now.progress.month); 
  fill(monthColour); 
  rect(150,150,100,100); 
}
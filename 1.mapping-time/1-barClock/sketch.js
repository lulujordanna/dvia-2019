var x = 20; 
var y = 20; 
var barHeight = 20; 
var maxWidth = 760;  
var spacing = 10; 

var discrete = false;  // the bars move smoothly.

function setup() {
	createCanvas(800, 120); 
}

function draw() {
  background(255);
  noStroke();

  
  var now = clock()
  if (discrete){
    var hourWidth = map(now.hour, 1,12, 0,maxWidth);
    var minsWidth = map(now.min,  0,60, 0,maxWidth); 
    var secsWidth = map(now.sec,  0,60, 0,maxWidth); 
  }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = maxWidth * now.progress.day;
    minsWidth = maxWidth * now.progress.hour;
    secsWidth = maxWidth * now.progress.min;
  }

  //draw 3 background bars to indicate the max width
  fill(244, 244, 244);
  rect(x, y, maxWidth,  barHeight);
  rect(x, y + barHeight+spacing,  maxWidth,  barHeight);
  rect(x, y + 2*(barHeight+spacing), maxWidth,  barHeight);

  //Draw the hours bar at the top
  fill(59,137,175);
  rect(x, y, hourWidth, barHeight);

  //The minutes bar in the middle
  fill(113, 182, 214);
  rect(x, y +    barHeight+spacing,  minsWidth, barHeight);

  //The seconds bar at the bottom
  fill(166, 227, 252);
  rect(x, y + 2*(barHeight+spacing), secsWidth, barHeight);

  //Draw the lines for the hour indicators 
  stroke(255);
  var start = 51.66;
  var step = 31.66;
  for (var i=0; i<24; i++){
    var loc = start + i*step
    line(loc, 20, loc, 40);
  }

  //Draw the lines for the minute and second indicators 
  stroke(255);
  var start = 32.66;
  var step = 12.66;
  for (var i=0; i<60; i++){
    var loc = start + i*step
    line(loc, 42, loc, 120);
  }
}
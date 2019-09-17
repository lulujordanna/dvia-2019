var x = 20 
var y = 20
var maxWidth = 200; 
var hourHeight = 200; 
var minuteHeight = 100; 
var secondsHeight = 50; 
var spacing = 10 

var discrete = true // The bars 'tick' from one value to the next

function setup() {
	createCanvas(440, 410)
}

function draw() {
  background(255)
  noStroke()

  var now = clock()
  if (discrete){
    var hourWidth = map(now.hour, 1,12, 0,maxWidth) 
    var minsWidth = map(now.min,  0,60, 0,maxWidth) 
    var secsWidth = map(now.sec,  0,60, 0,maxWidth)
  } else{
    hourWidth = maxWidth * now.progress.day
    minsWidth = maxWidth * now.progress.hour
    secsWidth = maxWidth * now.progress.min
  }

  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  let dayColour = lerpColor(from, to, now.progress.day);

  // Draw 3 background bars of different sizes 
  fill(244, 244, 244)
  rect(x, y, maxWidth, hourHeight)
  rect(x+100, y+100 + 100+spacing,  maxWidth,  minuteHeight)
  rect(x+200, y+200 + 2*(50+spacing), maxWidth, secondsHeight)

  // Draw the hours bar at the top
  fill(dayColour)
  rect(x, y, hourWidth, hourHeight)

  // The minutes bar in the middle
  fill(113, 94, 170)
  rect(x+100, y+100 + minuteHeight+spacing,  minsWidth, minuteHeight)

  // The seconds bar at the bottom
  fill(148, 134, 191)
  rect(x+200, y+200 + 2*(secondsHeight+spacing), secsWidth, secondsHeight)
} 
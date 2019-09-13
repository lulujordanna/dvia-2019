var x = 20 // starting x position to draw
var y = 20  // starting y position to draw
var maxWidth = 200; 
var hourHeight = 200; 
var minuteHeight = 100; 
var secondsHeight = 50; 
var spacing = 10 // the vertical space to skip between bars

var discrete = true // flag whether to have the bars 'tick' from one value to the next or move smoothly,

//this gets called only once in the very beginning
function setup() {
	createCanvas(440, 410)
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(255)
  noStroke()

  // measure the current time & calculate the width in pixels of each bar
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

  //draw 3 background bars to indicate the max width
  fill(244, 244, 244)
  rect(x, y, maxWidth, hourHeight)
  rect(x+100, y+100 + 100+spacing,  maxWidth,  minuteHeight)
  rect(x+200, y+200 + 2*(50+spacing), maxWidth, secondsHeight)

  // draw the hours bar at the top...
  fill(79,48,141)
  rect(x, y, hourWidth, hourHeight)

  // ...the minutes bar in the middle...
  fill(113, 94, 170)
  rect(x+100, y+100 + minuteHeight+spacing,  minsWidth, minuteHeight)

  // ...and the seconds bar at the bottom
  fill(148, 134, 191)
  rect(x+200, y+200 + 2*(secondsHeight+spacing), secsWidth, secondsHeight)
} 
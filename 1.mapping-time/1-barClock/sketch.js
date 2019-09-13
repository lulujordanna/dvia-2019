
var x = 20 // starting x position to draw
var y = 20  // starting y position to draw
var barHeight = 20 // height of each bar
var maxWidth = 760 // maximum width of each bar (the actual width will always be ≤ this)
var spacing = 10 // the vertical space to skip between bars

var discrete = false // flag whether to have the bars 'tick' from one value to the next or move smoothly,

//this gets called only once in the very beginning
function setup() {
	createCanvas(800, 120)
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(255)
  noStroke()

  // measure the current time & calculate the width in pixels of each bar
  var now = clock()
  if (discrete){
    // the map() function lets us *normalize* a value from a starting range then *project* it into another range
    var hourWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
    var minsWidth = map(now.min,  0,60, 0,maxWidth)  // from mins (0–60) to pixels (0–maxWidth)
    var secsWidth = map(now.sec,  0,60, 0,maxWidth)  // from secs (0–60) to pixels (0–maxWidth)
  }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = maxWidth * now.progress.day
    minsWidth = maxWidth * now.progress.hour
    secsWidth = maxWidth * now.progress.min
  }

  //draw 3 background bars to indicate the max width
  fill(244, 244, 244)
  rect(x, y, maxWidth,  barHeight)
  rect(x, y + barHeight+spacing,  maxWidth,  barHeight)
  rect(x, y + 2*(barHeight+spacing), maxWidth,  barHeight)

  // draw the hours bar at the top...
  fill(59,137,175)
  rect(x, y, hourWidth, barHeight)

  // ...the minutes bar in the middle...
  fill(113, 182, 214)
  rect(x, y +    barHeight+spacing,  minsWidth, barHeight)

  // ...and the seconds bar at the bottom
  fill(166, 227, 252)
  rect(x, y + 2*(barHeight+spacing), secsWidth, barHeight)

  //draw the lines for the hour indicators 
  stroke(255)
  line(52, 20, 52, 40);
  line(84, 20, 84, 40);
  line(116, 20, 116, 40);
  line(148, 20, 148, 40);
  line(180, 20, 180, 40);
  line(212, 20, 212, 40);
  line(244, 20, 244, 40);
  line(276, 20, 276, 40);
  line(308, 20, 308, 40);
  line(340, 20, 340, 40);
  line(372, 20, 372, 40);
  line(404, 20, 404, 40);
  line(436, 20, 436, 40);
  line(468, 20, 468, 40);
  line(500, 20, 500, 40);
  line(532, 20, 532, 40);
  line(564, 20, 564, 40);
  line(596, 20, 596, 40);
  line(628, 20, 628, 40);
  line(660, 20, 660, 40);
  line(692, 20, 692, 40);
  line(724, 20, 724, 40);
  line(756, 20, 756, 40);
  

  //draw the lines for the minute and second indicators 
  stroke(255)
  line(32, 42, 32, 120);
  line(44, 42, 44, 120);
  line(56, 42, 56, 120);
  line(68, 42, 68, 120);
  line(80, 42, 80, 120);
  line(92, 42, 92, 120);
  line(104, 42, 104, 120);
  line(116, 42, 116, 120);
  line(128, 42, 128, 120);
  line(140, 42, 140, 120);
  line(152, 42, 152, 120);
  line(164, 42, 164, 120);
  line(176, 42, 176, 120);
  line(188, 42, 188, 120);
  line(200, 42, 200, 120);
  line(212, 42, 212, 120);
  line(224, 42, 224, 120);
  line(236, 42, 236, 120);
  line(248, 42, 248, 120);
  line(260, 42, 260, 120);
  line(272, 42, 272, 120);
  line(284, 42, 284, 120);
  line(296, 42, 296, 120);
  line(308, 42, 308, 120);
  line(320, 42, 320, 120);
  line(332, 42, 332, 120);
  line(344, 42, 344, 120);
  line(356, 42, 356, 120);
  line(368, 42, 368, 120);
  line(380, 42, 380, 120);
  line(392, 42, 392, 120);
  line(404, 42, 404, 120);
  line(416, 42, 416, 120);
  line(428, 42, 428, 120);
  line(440, 42, 440, 120);
  line(452, 42, 452, 120);
  line(464, 42, 464, 120);
  line(476, 42, 476, 120);
  line(488, 42, 488, 120);
  line(500, 42, 500, 120);
  line(512, 42, 512, 120);
  line(524, 42, 524, 120);
  line(536, 42, 536, 120);
  line(548, 42, 548, 120);
  line(560, 42, 560, 120);
  line(572, 42, 572, 120);
  line(584, 42, 584, 120);
  line(596, 42, 596, 120);
  line(608, 42, 608, 120);
  line(620, 42, 620, 120);
  line(632, 42, 632, 120);
  line(644, 42, 644, 120);
  line(656, 42, 656, 120);
  line(668, 42, 668, 120);
  line(680, 42, 680, 120);
  line(692, 42, 692, 120);
  line(704, 42, 704, 120);
  line(716, 42, 716, 120);
  line(728, 42, 728, 120);
  line(740, 42, 740, 120);
  line(752, 42, 752, 120);
  line(764, 42, 764, 120);
}
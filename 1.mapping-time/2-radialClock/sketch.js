var maxRadius = 100; 
var minRadius = 20; 

 function setup() {
  createCanvas(400, 400); 
  angleMode(DEGREES); 
}

function draw() {
  background(255); 
  var now = clock(); 

  var mRot = now.progress.hour*360; 
  var sRot = now.progress.min*360;  


  var dayRadius = map(now.progress.day, 0, 1, minRadius, maxRadius); 
  let from = color(147, 141, 226);
  let to = color(72, 61, 139);
  let dayColour = lerpColor(from, to, now.progress.day);

  
translate(width/2, height/2); 

  /*Static Circles*/
  noFill(); 
  stroke(234, 234, 234); 
  ellipse(0, 0, 200,200); 
  ellipse(0, 0, 300,300);
  
  /*Hours*/
  fill(dayColour);
  circle(0, 0, dayRadius); 

  /*Minutes*/
  push();
  rotate(mRot);
  fill(147, 42, 86); 
  ellipse(0, 100, 20,20);
  pop(); 

  /*Seconds*/
  push();
  rotate(sRot);
  fill(208, 20, 70); 
  ellipse(0, 150, 20,20);
  pop(); 
} 

var mRot = 0; 
var sRot = 0; 

 function setup() {
  createCanvas(400, 400)
  angleMode(DEGREES)
}

function draw() {
  background(255)
  var now = clock()
  
  var mMax = PI/14;
  var sMax = PI/14;

  mRot += now.min/60 * mMax;
  sRot += now.sec/60 * sMax;

translate(width/2, height/2)

  fill(88, 40, 61); 
  ellipse(0, 0, 100,100); 

  noFill(); 
  stroke(234, 234, 234); 
  ellipse(0, 0, 200,200); 
  ellipse(0, 0, 300,300); 

  /*Minutes*/
  rotate(mRot);
  push();
  fill(147, 42, 86); 
  ellipse(0, 100, 20,20);
  pop(); 

  /*Seconds*/
  push(sRot);
  fill(208, 20, 70); 
  ellipse(0, 150, 20,20);
  pop();  
} 

var maxRadius = 100; 
var minRadius = 20; 

function setup() {
  createCanvas(600, 600); 
  angleMode(DEGREES); 
}

function draw() {
  background(255); 
  var now = clock(); 

// Rotation speeds for the day and week 
  var wRot = now.progress.month*360 
  var dRot = now.progress.week*360 
  
translate(width/2, height/2)

  /*Static Circles for Day/Week*/
  push(); 
  noFill(); 
  stroke(234, 234, 234);
  strokeWeight(2); 
  ellipse(0, 0, 200,200); 
  ellipse(0, 0, 300,300);
  pop(); 

   /*Day*/
   push();
   rotate(dRot);
   fill(37, 94, 164);
   noStroke();  
   rect(0, 85, 30,30,5);
   pop(); 

   /*Week*/
  push();
  rotate(wRot);
  fill(0, 120, 191); 
  noStroke(); 
  rect(0, 135, 30,30, 5);
  pop(); 
  
} 

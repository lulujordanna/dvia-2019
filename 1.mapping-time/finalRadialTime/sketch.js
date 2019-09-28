var maxRadius = 100; 
var minRadius = 20; 

function setup() {
  createCanvas(600, 600); 
  angleMode(DEGREES); 
}

function draw() {
  background(255); 
  var now = clock(); 

  //Rotation speeds for the minutes and seconds
  var mRot = now.progress.hour*360; 
  var sRot = now.progress.min*360; 

  //Change in size & colour for the hour
  var dayRadius = map(now.progress.day, 0, 1, minRadius, maxRadius); 
  let from = color(147, 141, 226);
  let to = color(72, 61, 139);
  let dayColour = lerpColor(from, to, now.progress.day);

// Rotation speeds for the day and week 
  var wRot = now.progress.month*360 
  var dRot = now.progress.week*360 
  
translate(width/2, height/2)

  /*Static Circles for Hr/Min/Sec*/
  push(); 
  noFill(); 
  stroke(234, 234, 234);
  ellipse(0, 0, 200,200); 
  ellipse(0, 0, 300,300);
  pop(); 

  /*Static Circles for Day/Week*/
  push(); 
  noFill(); 
  stroke(214, 214, 214);
  ellipse(0, 0, 400,400); 
  ellipse(0, 0, 500,500);
  pop(); 

   /*Day after rotation represents the week*/
   push();
   rotate(dRot);
   fill(37, 94, 164);
   noStroke();  
   ellipse(0, 200, 30, 30);
   pop(); 

   /*Week after rotation represents the month*/
  push();
  rotate(wRot);
  fill(0, 120, 191); 
  noStroke(); 
  ellipse(0, 250, 30, 30);
  pop(); 
   
   /*Hours*/
   push(); 
   fill(dayColour);
   noStroke(); 
   circle(0, 0, dayRadius); 
   push();
 
   /*Minutes*/
   push();
   rotate(mRot);
   fill(147, 42, 86); 
   noStroke(); 
   ellipse(0, 100, 20,20);
   pop(); 
 
   /*Seconds*/
   push();
   rotate(sRot);
   fill(208, 20, 70); 
   noStroke(); 
   ellipse(0, 150, 20, 20);
   pop(); 
} 

var x = 20; 
var y = 20; 
var rectHeight = 100; 

function setup() {
  createCanvas(425, 340); 
}

function draw() {
  background(255); 
  var now = clock(); 

  var winterColour = 20;
  var springColour = 100;
  var summerColour = 200;
  var fallColour = 50;

  let currentMonth = now.progress.month*0; 

  /*January*/
  push(); 
  fill(winterColour);
  stroke(234, 234, 234);
  rect(x, y, 115, rectHeight); 
  pop(); 

  /*February*/
  push();
  fill(winterColour); 
  stroke(234, 234, 234);
  rect(x+115, y, 100, rectHeight);  
  pop(); 

  /*March*/
  push();
  fill(springColour);
  stroke(234, 234, 234); 
  rect(x+215, y, 85, rectHeight);  
  pop(); 

  /*April*/
  push(); 
  fill(springColour); 
  stroke(234, 234, 234);
  rect(x+300, y, 85, rectHeight); 
  pop(); 

  /*May*/
  push(); 
  fill(springColour);
  stroke(234, 234, 234); 
  rect(x, y+100, 75, rectHeight); 
  pop(); 

  /*June*/
  push(); 
  fill(summerColour); 
  stroke(234, 234, 234);
  rect(x+75, y+100, 55, rectHeight); 
  pop(); 

  /*July*/
  push(); 
  fill(summerColour); 
  stroke(234, 234, 234);
  rect(x+130, y+100, 55, rectHeight); 
  pop(); 

  /*August*/
  push(); 
  fill(summerColour); 
  stroke(234, 234, 234);
  rect(x+185, y+100, 55, rectHeight); 
  pop(); 

  /*September*/
  push(); 
  fill(fallColour); 
  stroke(currentMonth);
  rect(x+240, y+100, 75, rectHeight); 
  pop(); 

  /*October*/
  push();
  fill(fallColour);
  stroke(234, 234, 234); 
  rect(x+315, y+100, 70, rectHeight); 
  pop(); 

  /*November*/
  push(); 
  fill(fallColour); 
  stroke(234, 234, 234);
  rect(x, y+200, 115, rectHeight); 
  pop(); 

  /*December*/
  push(); 
  fill(winterColour); 
  stroke(234, 234, 234);
  rect(x+115, y+200, 125, rectHeight); 
  pop(); 
}
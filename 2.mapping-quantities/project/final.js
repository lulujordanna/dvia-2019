var range

function preload(){
  range = loadTable('data/1986-2006.csv', 'csv', 'header')
}

function setup(){
  createCanvas(1400, 1400, SVG)
  background(230)

  // pick one of the three data files to work with and call it 'table'
  var table = range

  // log the whole dataset to the console so we can poke around in it
  print(table)

  // set up typography
  textFont("Courier New")
  textSize(14)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 130

  // draw country name labels on the left edge of the table
  textStyle(NORMAL)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }

    // draw year labels in the header row
    x = 200
    y = 800
    textStyle(NORMAL)
    textAlign(CENTER)
    for (var r=0; r<table.getRowCount(); r++){
      var year = table.getString(r, 0)
      text(year, x, y-rowHeight)
      x += colWidth
    }

  // colors for countries based on Color Brewer Qualitative Palette 
  //var colors = ['#66c2a5', '#a6d854', '#8da0cb', '#e5c494', '#ffd92f', '#fc8d62', '#e78ac3', '#b3b3b3' ]; 

  // print out the total for each country, one column at a time
  x = 200
  for (var r=0; r<table.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      if (value > 0) { 
        //fill(colors[r])
        circle(x, y, value)
      } 
      y += rowHeight
    }
    x += colWidth
  }
  save('final_1.svg')
  }
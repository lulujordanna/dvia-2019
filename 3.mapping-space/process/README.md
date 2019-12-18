## Process

Listing of the contents of this folder and a prose description of your ideas for how to represent
the earthquake data geospatially and diagrammatically.

### Hand Drawn: Diagram Sketches
![Hand Drawn Sketches](https://github.com/lulujordanna/dvia-2019/blob/master/3.mapping-space/process/diagram_Sketches.jpg)

1. The first diagrammatic concept uses the [2019 significant month](https://github.com/lulujordanna/dvia-2019/blob/master/3.mapping-space/data/2019/significant_month.csv) dataset to create a sequential colour scale based on the magnitude of the earthquakes. This diagram can relate to the geo-spatial representation as a sidebar/legend. By using the same colour palette the visualizations would connect well to one another.  
2. The second idea also examines the magnitude of the earthquakes from the dataset, [all month 2019](https://github.com/lulujordanna/dvia-2019/blob/master/3.mapping-space/data/2019/all_month.csv). This visualization would be a small multiples of bubble charts to represent the month. Colour and scale would signify the magnitude. This would be the initial visualization but when you click on the data point it would highlight on the map where it occurred. 
3. The final concept is inspired by a calendar using the [1.0 month](https://github.com/lulujordanna/dvia-2019/blob/master/3.mapping-space/data/1.0_month.csv) data set. This visualization explores the depth of the earthquake by selecting the deepest earthquake per day, colour will represent the range in depth. If I were to define the geographic parameters to a particular region, I could see this diagram acting as a side bar to represent the month. When you hover over the day it would highlight which earthquake it was. 

## Final Outcome: Evaluating Magnitude 
The final outcome is a geospatial and diagrammatic representation of recent seismic activity from October 7th – November 6th, 2019. The map was created using leaflet.js and moment.js for the interactive popups. The diagrammatic portion was made in p5 and Adobe Illustrator. For the diagram, I expanded on my first concept of the sequential colour scale and added two bar charts to visualize the data by day and in aggregate. The colour palette is YlGnBu from Color Brewer and I chose this as I felt the earth tones best reflected the data. In order to ensure the same colours were assigned to the map, I had to reclassify the earthquakes in the CSV file (magReclassColor). This was because the domain attribute was not recognizing negative values. I am happy with the final product and feel that the cohesive use of colour ties the piece together.

![Final Outcome](https://github.com/lulujordanna/dvia-2019/blob/master/3.mapping-space/process/final1.png)
![Final Outcome](https://github.com/lulujordanna/dvia-2019/blob/master/3.mapping-space/process/final2.png)

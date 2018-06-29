// Global Variables
var p5Canvas;
var myName;
var x = 40;
var y = 40;
var xspeed = 4;
var yspeed = 4;

function setup() {
    p5Canvas = createCanvas(855, 695);
    p5Canvas.parent("#p5-canvas");
    myName = select("#my-name");
    myName.html("Gladys");
    background(25);
}

function draw() {

	//distance from center of the screen
var d = dist(windowWidth / 2, windowHeight / 2, mouseX, mouseY);
    fill (random(200, 250), random(200, 250), random(200, 250));
  	ellipse (x, y, d, d);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth - d || x < 0)  {
     	xspeed = -xspeed;
        console.log(xspeed);
     }
//bouncing veritcally
  	y=y + yspeed;

    if (y > windowHeight - d || y < 0) {
        yspeed = -yspeed;
    }
}
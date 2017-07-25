var x = 150;
var y = 150;
var xspeed = 15;
var yspeed = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);

}

function draw() {

	//distance from center of the screen
	var d = dist(100, 100, 40, 40);
    background(25);
  	fill (255, 0, 250, 100);
  	ellipse (x, y, d, d);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

    rect(30, 20, 55, 55);

}
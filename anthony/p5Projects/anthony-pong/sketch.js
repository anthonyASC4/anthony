var x = 150;
var y = 150;
var xspeed = 5;
var yspeed = 5;


function setup() {
  createCanvas(500, 400);
  background (25);

}

function draw() {

	//distance from center of the screen
	var d = dist(10, 40, 40, 40);
    background(25);
  	fill (random(0,255), random(0,255), random(0,255));
  	ellipse (x, y, d, d);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > 480 || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 380 || y < 0) {
	 	  yspeed = -yspeed;
  	}

    rect(mouseX, 380, 120, 20);

}
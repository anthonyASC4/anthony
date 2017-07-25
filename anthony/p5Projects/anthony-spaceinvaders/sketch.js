var ship;
var flowers = [];
var drops = [];
var img;

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    drop = new Drop(width / 2, height / 2);
    for (var i = 0; i < 7; i++) {
        flowers[i] = new Flower(i * 80 + 80, 60);
    }
}

function draw() {
    background(51);
    ship.show();
    

  for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
    }
    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
    }

    ellipse(80, 120, 50, 50);
    ellipse(155, 120, 50, 50);
    ellipse(230, 120, 50, 50);
    ellipse(405, 120, 50, 50);
    ellipse(480, 120, 50, 50);
    ellipse(550, 120, 50, 50);
    ellipse(600, 120, 50, 50);
}
function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(ship.x, height);
        drops.push(drop);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.move(5);
    } else if (keyCode === LEFT_ARROW) {
        ship.move(-5   );
    }
}


//ship object with show function
function Ship() {
    this.x = width / 2;

  this.show = function () {
        noStroke();
        fill("lime");
        rectMode(CENTER);
        rect(this.x, height - 0, 60, 60);
    }
    this.move = function (dir) {
        this.x += dir * 15;
    }   
}

//flower object
function Flower(x, y) {
    this.x = x;
    this.y = y;

  this.show = function () {
        fill(0, 200, 200);
        ellipse(this.x, this.y, 50, 50);

    }


}

//water drop
function Drop(x, y) {
    this.x = x;
    this.y = y;

  this.show = function () {
        fill(255, 0, 0);
        ellipse(this.x, this.y, 16, 16);
    }
    this.move = function () {
        this.y = this.y - 5;
    }
function preload() {
  img = loadImage("space_invaders.jpg");
}
function setup() {
  image(img, 50, 50);
}    
}

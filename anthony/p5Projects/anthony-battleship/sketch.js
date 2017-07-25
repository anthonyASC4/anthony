function setup(){
    createCanvas(410, 407);
    background(255);
}
var tileSt
var y1 = 5;
var y2 = 5;
var y3 = 5;
var y4 = 5;
var y5 = 5;
var y6 = 5;
var y7 = 5;
var y8 = 5;

function draw(){
    fill(200);
    for (var i = 0; i < 5; i++){
        rect(5, y1, 50, 50);
        y1 = y1 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(55, y2, 50, 50);
        y2 = y2 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(105, y3, 50, 50);
        y3 = y3 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(155, y4, 50, 50);
        y4 = y4 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(205, y5, 50, 50);
        y5 = y5 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(255, y6, 50, 50);
        y6 = y6 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(305, y7, 50, 50);
        y7 = y7 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(355, y8, 50, 50);
        y8 = y8 + 50
    }
}



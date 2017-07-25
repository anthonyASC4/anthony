function setup(){
    createCanvas(300, 300);
    background(225);

    //stroke() setst the color of the stroke (the outline).
    stroke("purple");
    //strokeWeight() sets the width of the stroke in pixels.
    strokeWeight(6);

    // arc is an ellipse with a startin and endpoint, with 0 being the rightmost point on the circle and PI being half a circle.
    // bottom half of the pokeball
    arc(width/ 2, height / 2, 200, 200, 0, PI , CHORD);
    // top half of the pokeball
    fill("grey");
    arc(width/ 2, height / 2, 200, 200, PI, 0 , CHORD);
    //outside ring of inside circle
    fill("silver");
    ellipse(width / 2, height/ 2, 50, 50);
    //inner circle
    fill("purple");
    ellipse(width / 2, height / 2, 25, 25);
}
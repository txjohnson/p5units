
var number;
let thickness = 4;

function windowResized () {
    resizeCanvas (windowWidth, windowHeight);
}


function setup() {
    createCanvas (1280, 720);
    number = random(10);
    noLoop ();
}


function draw () {
    drawSquare(150, 200, 100);
}

function drawSquare(x, y, s) {
    strokeWeight (thickness);

    if (number < 5) {
        stroke(0,0,0);
    }
    else {
        stroke(0, 0, 255);
    }

    line (x, y, x + s, y);
    line (x, y, x, y + s);
    line (x, y + s, x + s, y + s);
    line (x + s, y + s, x + s, y);
}
















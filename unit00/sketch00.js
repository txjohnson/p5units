var aname = "Someone"

function setup() {
    createCanvas (1280, 720);
    textAlign (CENTER);
    textSize (48);
    noLoop ();
}

function draw () {
    for (let i = 0; i < 50; i++) {
        push();
        fill (random(255), 216, 216);
        translate(random(width), random(height));
        rotate(random (2 * PI));
        text (aname, 0,  0);
        pop();
    }
}

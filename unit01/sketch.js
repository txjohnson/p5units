
let slides = [];

let p5logo, gologo, bablogo, pclogo;
let p5smpl1, p5smpl2, p5smpl3, gosmpl, babsmpl, pcsmpl;
let htmstruc, cssstruc, urlstruc, filstruc;
let vscsmpl;

let current_slide = 0;
let alpha = 0;

function setup () {
    createCanvas (windowWidth, windowHeight);
    textAlign(CENTER);
    textSize(128);

    p5logo    = loadImage ("assets/p5js-pink.png");
    gologo    = loadImage ("assets/godot-logo.png");
    bablogo   = loadImage ("assets/babylonjs-logo.png");
    pclogo    = loadImage ("assets/PlayCanvas-logo.png");
    hcj       = loadImage ("assets/hcj.jpg");
    p5smpl1   = loadImage ("assets/p5sample1.png");
    p5smpl2   = loadImage ("assets/p5sample2.png");
    p5smpl3   = loadImage ("assets/p5sample3.jpg");
    vscsmpl   = loadImage ("assets/vscode-sample.png");
    babsmpl   = loadImage ("assets/babylonjs-sample.jpg");
    gosmpl    = loadImage ("assets/godot-sample.png");
    pcsmpl    = loadImage ("assets/playcanvas-sample.jpg");
    htmstruc  = loadImage ("assets/html-structure.jpg");
    filstruc  = loadImage ("assets/file-structure.jpg");
    cssstruc  = loadImage ("assets/CSS-structure.jpg");
    urlstruc  = loadImage ("assets/url-structure.jpg");

    slides .push (start);
    slides .push (()=> { center_image (p5smpl1); });
    slides .push (()=> { center_image (p5smpl2); });
    slides .push (()=> { center_image (p5smpl3); });
    slides .push (()=> { center_image (hcj); });

    slides .push (()=> { center_image (p5logo); });
    slides .push (()=> { center_image (gologo); });
    slides .push (()=> { center_image (gosmpl); });
    slides .push (()=> { center_image (bablogo); });
    slides .push (()=> { center_image (babsmpl); });
    slides .push (()=> { center_image (pclogo); });
    slides .push (()=> { center_image (pcsmpl); });

    slides .push (()=> { center_image (hcj); });
    slides .push (()=> { center_image (htmstruc); });
    slides .push (()=> { center_image (cssstruc); });
    slides .push (()=> { center_image (vscsmpl); });
    slides .push (()=> { center_image (filstruc); });
    slides .push (()=> { center_image (urlstruc); });

}

function windowResized () {
    resizeCanvas (windowWidth, windowHeight);
}

function draw() {
    slides[current_slide]();
}

function keyPressed () {
    if (keyCode === LEFT_ARROW) {
        background (255, 255, 255);
        current_slide --;
        if (current_slide < 0) { current_slide = slides.length - 1; }
        alpha = 0;
    }

    if (keyCode === RIGHT_ARROW) {
        background (255, 255, 255);
        current_slide ++;
        if (current_slide >= slides.length) { current_slide = 0; }
        alpha = 0;
    }
    console .log (slides [current_slide]);
}

function start () {
    text ("Creative Coding", windowWidth / 2, windowHeight / 2);
}

function center_image(which) {
    alpha += 16;
    if (alpha > 255) { alpha = 255; }
    background (255, 255, 255);
    tint (255, alpha);
    image (which, windowWidth / 2 - which.width / 2, windowHeight / 2 - which .height / 2);
}

function p5js () {
    image (p5logo, windowWidth / 2 - p5logo.width / 2, windowHeight / 2 - p5logo .height / 2);
}

function godot () {
    image (gologo, windowWidth / 2 - gologo.width / 2, windowHeight / 2 - gologo .height / 2);
}

function babylonjs () {
    image (bablogo, windowWidth / 2 - bablogo.width / 2, windowHeight / 2 - bablogo .height / 2);
}

function playcanvas () {
    image (pclogo, windowWidth / 2 - pclogo.width / 2, windowHeight / 2 - pclogo .height / 2);
}

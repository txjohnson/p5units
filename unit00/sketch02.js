var centerX = 200;
var centerY = 200;

var startX = centerX;
var startY = centerY;
var newX, newY;
var gap = 1.8;
let STEPS_PER_ROTATION = 8; // increasing this makes the curve smoother
let increment   = 10 * (Math.PI / 180);
let theta = increment;

function setup() {
    createCanvas (1280, 720);
}

function draw() {
    background(255, 255, 255);
  //  let increment = 2*Math.PI/STEPS_PER_ROTATION;		
    newX = centerX + theta * Math.cos(theta) * gap; 
    newY = centerY + theta * Math.sin(theta) * gap; 
    line (startX, startY, newX, newY)
    theta = theta + increment;
    startX = newX;
    startY = newY;
}
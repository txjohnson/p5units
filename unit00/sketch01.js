var centerX = 200;
var centerY = 200;

function setup() {
    createCanvas (1280, 720);

    noLoop ();
}

function draw() {
    let startX = centerX;
    let startY   = centerY;
  
    let gap = 2.0; // increase this for spacing between spiral lines        
    let STEPS_PER_ROTATION = 8; // increasing this makes the curve smoother
    let increment   = 10 * (Math.PI / 180);
    
  //  let increment = 2*Math.PI/STEPS_PER_ROTATION;		
    let theta = increment;
    for (let repeat = 0; repeat < 1000; ++repeat) {
       let newX = centerX + theta * Math.cos(theta) * gap; 
       let newY = centerY + theta * Math.sin(theta) * gap; 
       line (startX, startY, newX, newY)
       theta = theta + increment;
       startX = newX;
       startY = newY;
    }
  }
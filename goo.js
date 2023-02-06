const fillColor = "#00007F";

function setup() {
    createCanvas(4096, 400);
}
  
function draw() {
    background(255);
    noStroke();
    fill(fillColor);
    //translate(width/2, height/2);
    
    push();
    beginShape();
    vertex(0,0);
    for (let i=0; i<4096; i++) {
        vertex(i,(sin(i/10) + noise(i/20)*3) * 10 + 50);
    }
    vertex(4096,0);
    endShape(CLOSE);
    //rect(0,0,10000,100);
    pop();
}
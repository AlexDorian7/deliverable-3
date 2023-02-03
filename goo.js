function setup() {
    createCanvas(10000, 400);
}
  
function draw() {
    background(255);
    stroke(0);
    fill("#0000FF");
    //translate(width/2, height/2);
    
    push();
    rect(0,0,400,400);
    pop();
}
var Hr,Mn,Sc;
var Hrangle,Mnangle,Scangle;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES); 
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);
  Hr=hour();
  Mn=minute();
  Sc=second();

  Scangle=map(Sc,0,60,0,360);
  Mnangle=map(Mn, 0,60,0,360);
  Hrangle=map(Hr%12,0,12,0,360);

  push()
rotate(Scangle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

  pop()
    push()
rotate(Mnangle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
    pop()
    push()
rotate(Hrangle);
stroke(0,0,255)
strokeWeight(7);
line(0,0,50,100);
    pop()
}
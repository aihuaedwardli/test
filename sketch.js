let mic;
let micLevel;
let angleMoon=10;
let wingAngle=30;
let bamYes=false;


function setup(){
  mic= new p5.AudioIn();
  mic.start();
 
  createCanvas(400, 400);
  angleMode(DEGREES);  
  frameRate(10);
}

function draw(){
  micLevel = mic.getLevel();
 
  background(255);
  drawSkies();
  
  drawSun();
  drawEyelashes(150);
  drawEyelashes(120);
  drawEyelashes(90);
  drawEyelashes(60);
  drawEyelashes(30);
  
  push();   //let the sunPupil roll with mouse
  translate(map(mouseX,0,width,width*-0.0375,width*0.0375), map(mouseY,0,height,height*-0.0375,height*0.0375));
  drawSunPupil();
  pop();
 
  drawHair();

  push();  //move the moonEye with mouse
  translate(mouseX/20,mouseY/20);
  drawMoon(-angleMoon);
  pop();
 
  push();  //make the bird move with mouse
  rotate(mouseX/250);
  drawRightWing(wingAngle);
  drawLeftWing(-wingAngle);
  drawBirdHead();
  pop();
 
  push();
  //singingNote moves with mouse
  if(mouseX<0.5*width){
    drawSingingNote1();  
     }else if(mouseX>0.5*width){
    drawSingingNote2();
   }
  pop();
  
  push(); //make the wholeNote mouth shout
  s=map(micLevel, 0, 0.1, 0.75, 3);
  drawWholeNote(s);
  pop();

}

function mousePressed(){
  wingAngle=-wingAngle; //bird wings flap when clicking the mouse
}


function drawSkies(){
  //green day background on left
  fill(150,220,45);
  noStroke();
  rect(0,0, width*0.5, height);
 
  //night background on right
  fill(0,50,120);
  noStroke();
  rect(width*0.5, 0, width*0.5, height);
}

function drawSun(){  
  //sun as eye
  fill(248,150,50);
  stroke(255,204,100);
  strokeWeight(6)
  circle(width*0.3,width*0.35,width*0.15);
}

function drawSunPupil(){
  //sun pupil
  fill(0);
  noStroke();
  circle(width*0.3,width*0.35,width*0.04);
}

function drawEyelashes(ang){
  //eyelashes on the Sun
 
  push();
  translate(width*0.3,width*0.35);
  stroke(255,140,100);
  strokeWeight(3);  

  line(0.08*width*cos(ang), -0.08*width*sin(ang),   0.08*width*cos(ang), -0.08*width*sin(ang)-0.04*width);
  pop();
}

function drawMoon(angleMoon){
 
  //moon as eye
  push();
  noStroke();
  translate(width*0.7, height*0.325);
  rotate(angleMoon);
 
  beginShape();
  //yellow moon
    vertex(-width*0.1, height*0.0625);
    bezierVertex(-width*0.075, height*0.025, 0, -height*0.1365, width*0.1, height*0.0625);
    bezierVertex(width*0.05, height*0.0325, 0, width*0.0125, -width*0.0625, height*0.0375);
  endShape(CLOSE);
  fill(135, 160, 200);
  circle(0, 0, width*0.0375);
  pop();
 
 
}

function drawWholeNote(s){
  //whole note as mouth
  translate(width*0.5,height*0.82);
  noStroke();
  scale(s);
 
  push();  //outer black ellipse
  fill(0);
  push();
  rotate(-12);
  ellipseMode(CENTER);
  ellipse(0,0, width*0.25, width*0.15);
  pop();
 
  push();  //inner white circle
  fill(255);
  ellipseMode(CENTER);
  circle(0,0, width*0.12);
  pop();
 
  pop();
}

function drawSingingNote1(){  
 
  push();
  translate(width*0.35,height*0.75);
  rotate(-12);
 
  push();
  stroke(200,50,100);
  strokeWeight(2);
  line(0, -height*0.075, 0, height*0.075);
  pop();
 
  push();
  fill(200,50,100);
  noStroke();
  rotate(-12);
  ellipse(-width*0.04, height*0.065, width*0.06, height*0.04);
  pop();
 
  pop();

}

function drawSingingNote2(){
 
  push();
 
  translate(width*0.65,height*0.75);
  scale(-1);
  rotate(-12);
 
  push();
  stroke(200,50,100);
  strokeWeight(2);
  line(0, -height*0.075, 0, height*0.075);
  pop();
 
  push();
  fill(200,50,100);
  noStroke();
  rotate(-12);
  ellipse(-width*0.04, height*0.065, width*0.06, height*0.04);
  pop();
 
  pop();

}

function drawRightWing(wingAngle){
  //left wing on birdNose
  push();
  translate(width*0.42, height*0.58);
  rotate(wingAngle);
  fill(215,random(128),random(128));
  noStroke();
  arc(0, 0, width*0.15, height*0.15, 0, 180);
  pop();
}

function drawLeftWing(wingAngle){
  //right wing on bird—nose
  push();
  translate(width*0.58, height*0.58);
  rotate(wingAngle);
  fill(215,random(128),random(128));
  noStroke();
  arc(0, 0, width*0.15, height*0.15, 0, 180);
  pop();
}

function drawBirdHead(){
  //circle for bird's head
  fill(255,65,0);
  noStroke();
  circle(width*0.5,height*0.6,width*0.125);
 
  //crest
  fill(220,45,0);
  noStroke();
  triangle(width*0.47, height*0.58, width*0.53, height*0.58, width*0.5, height*0.53)
 
  //points for bird eyes
 
  //white retinas
  stroke(255);
  strokeWeight(8);
  point(width*0.48,height*0.6);
  point(width*0.52,height*0.6);
 
  //black pupils
  stroke(0);
  strokeWeight(5);
  point(width*0.48,height*0.6);
  point(width*0.52,height*0.6);
 
  //triangle for beak
  fill(20,0,0);
  noStroke();
  triangle(width*0.49, height*0.625, width*0.51, height*0.625, width*0.5, height*0.645);
}

function drawHair(){
  //hair for the face
 
  //hair on the side
  push();
  drawSideHair(width*0.05);
  drawSideHair(width*0.1);
  drawSideHair(width*0.15);
  drawSideHair(width*0.85);
  drawSideHair(width*0.9);
  drawSideHair(width*0.95);
  pop();
 
  //bangs
  push();
  drawBangs(width*0.03, height*0.03);
  drawBangs(0.2*width, -height*0.06);
  //last note on the right(a little confusing)
  drawBangsReverse(0.75*width, height*0.06, -1);
  //3rd note  had to use 1 instead of -1 for scale because -1 will flip it back to a normal music note
  drawBangsReverse(0.2*width, -height*0.06, 1);
  pop();
 
}

function drawBangs(x,y){
  //8th notes for hair bangs
 
  translate(x,y);

  push();
  //color:anything darker than the green bkg
  stroke(random(255),random(128),random(255));
  strokeWeight(2);
 
  line(width*0.15, height*0.12, width*0.15, 0);
  line(width*0.15, 0, width*0.25, 0);
  line(width*0.25, 0, width*0.25, width*0.12);
  pop();
 
  push();
  //color:anything darker than the green bkg
  fill(random(255),random(128),random(255));
  noStroke();
  rotate(-12);
 
  push();
  ellipse(width*0.095, height*0.15, width*0.06, height*0.04);
  pop();
 
  push();
  ellipse(width*0.193, height*0.17, width*0.06, height*0.04);
  pop();
 
  pop();
}

function drawSideHair(x){
  stroke(85,40,170);
  strokeWeight(3);
  line(x,0,x,height);
}

function drawBangsReverse(x,y,s){
  //backward 8th notes for hair
 
  translate(x,y);
 
  scale(s,1);
 
  push();
  //anything that contrasts the dark blue bkg
  stroke(random(250),random(140),random(250));
  strokeWeight(2);
  line(width*0.15, width*0.12, width*0.15, 0);
  line(width*0.15, 0, width*0.25, 0);
  line(width*0.25, 0, width*0.25, width*0.12);
  pop();
 
  push();
  //anything that contrasts the dark blue bkg
  fill(random(250),random(140),random(250));
  noStroke();
  rotate(-12);
 
  push();
  ellipse(width*0.095, height*0.15, width*0.06, height*0.04);
  pop();
 
  push();
  ellipse(width*0.193, height*0.17, width*0.06, height*0.04);
  pop();
 
  pop();
}
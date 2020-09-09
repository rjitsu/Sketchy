var thickness = 3;

function setup(){
  canvus = createCanvas(windowWidth,windowHeight);
  background(0);
  canvus.addClass('canvus');
  
  button1 = createButton('large');
  button1.addClass('btn btn-secondary');
  button1.position(19, 100);  
  button1.mousePressed(changeThicknessLarge);
  
  button2 = createButton('medium');
   button2.addClass('btn btn-secondary');
  button2.position(19, 60);  
  button2.mousePressed(changeThicknessMedium);
  
  button3 = createButton('small');
   button3.addClass('btn btn-secondary');
  button3.position(19, 20);  
  button3.mousePressed(changeThicknessSmall);
  
  button4 = createButton('Save Sketch');
  button4.addClass("btn btn-primary save");
  
  button4.mousePressed(saveToFile); 
}

function saveToFile() { 
  saveCanvas('sketch', 'jpg') 
} 

function bgChange(){
  background(random(200),random(200),random(200));
}

function changeThicknessLarge(){
 thickness = 15; 
}


function changeThicknessMedium(){
 thickness = 8; 
}


function changeThicknessSmall(){
 thickness = 3; 
}

function draw(){
 
 if(mouseIsPressed){
  stroke(255);
   strokeWeight(thickness);
  line(pmouseX,pmouseY,mouseX,mouseY);
  }
}


 





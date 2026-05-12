 let angle=0; 

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(150);
  //first lane
  fill(255,255,0);
  rect(180,200,40,20);
   fill(0);
  rect(180,220,40,20);
  fill(255,255,0);
   rect(180,240,40,20);
  fill(0);
   rect(180,260,40,20);
  fill(255,255,0);
   rect(180,280,40,20);
  fill(0);
   rect(180,300,40,20);
  fill(255,255,0);
   //rect(180,320,40,20);
  fill(0);
   //rect(180,340,40,20);
  fill(255,255,0);
   rect(180,360,40,20);
  fill(0);
   rect(180,380,40,20);
  fill(255,255,0);
   rect(180,400,40,20);
  fill(0);
   rect(180,420,40,20);
  fill(255,255,0);
   rect(180,440,40,20);
  fill(0);
   rect(180,460,40,20); 
  fill(255,255,0);
   rect(180,480,40,20);
  triangle(200,150,180,200,220,200);
  triangle(200,550,180,500,220,500);

   //second lane
  fill(255,255,0);
  rect(280,200,40,20);
   fill(0);
  rect(280,220,40,20);
  fill(255,255,0);
   rect(280,240,40,20);
  fill(0);
   rect(280,260,40,20);
  fill(255,255,0);
   rect(280,280,40,20);
  fill(0);
   rect(280,300,40,20);
  fill(255,255,0);
   //rect(280,320,40,20);
  fill(0);
   //rect(280,340,40,20);
  fill(255,255,0);
   rect(280,360,40,20);
  fill(0);
   rect(280,380,40,20);
  fill(255,255,0);
   rect(280,400,40,20);
  fill(0);
   rect(280,420,40,20);
  fill(255,255,0);
   rect(280,440,40,20);
  fill(0);
   rect(280,460,40,20); 
  fill(255,255,0);
   rect(280,480,40,20);
  triangle(300,150,280,200,320,200);
  triangle(300,550,280,500,320,500);
  
  
  
 //fourth lane  
  fill(255,255,0);
  rect(480,200,40,20);
   fill(0);
  rect(480,220,40,20);
  fill(255,255,0);
   rect(480,240,40,20);
  fill(0);
   rect(480,260,40,20);
  fill(255,255,0);
   rect(480,280,40,20);
  fill(0);
   rect(480,300,40,20);
  fill(255,255,0);
   //rect(480,320,40,20);
  fill(0);
   //rect(480,340,40,20);
  fill(255,255,0);
   rect(480,360,40,20);
  fill(0);
   rect(480,380,40,20);
  fill(255,255,0);
   rect(480,400,40,20);
  fill(0);
   rect(480,420,40,20);
  fill(255,255,0);
   rect(480,440,40,20);
  fill(0);
   rect(480,460,40,20); 
  fill(255,255,0);
   rect(480,480,40,20);
  triangle(500,150,480,200,520,200);
  triangle(500,550,480,500,520,500);

    //third lane
  fill(255,255,0);
  rect(380,200,40,20);
   fill(0);
  rect(380,220,40,20);
  fill(255,255,0);
   rect(380,240,40,20);
  fill(0);
   rect(380,260,40,20);
  fill(255,255,0);
   rect(380,280,40,20);
  fill(0);
   rect(380,300,40,20);
  fill(255,255,0);
   //rect(380,320,40,20);
  fill(0);
   //rect(380,340,40,20);
  fill(255,255,0);
   rect(380,360,40,20);
  fill(0);
   rect(380,380,40,20);
  fill(255,255,0);
   rect(380,400,40,20);
  fill(0);
   rect(380,420,40,20);
  fill(255,255,0);
   rect(380,440,40,20);
  fill(0);
   rect(380,460,40,20); 
  fill(255,255,0);
   rect(380,480,40,20);
  triangle(400,150,380,200,420,200);
  triangle(400,550,420,500,380,500);
  
  //fifth lane
   fill(255,255,0);
  rect(580,200,40,20);
   fill(0);
  rect(580,220,40,20);
  fill(255,255,0);
   rect(580,240,40,20);
  fill(0);
   rect(580,260,40,20);
  fill(255,255,0);
   rect(580,280,40,20);
  fill(0);
   rect(580,300,40,20);
  fill(255,255,0);
   //rect(580,320,40,20);
  fill(0);
   //rect(580,340,40,20);
  fill(255,255,0);
   rect(580,360,40,20);
  fill(0);
   rect(580,380,40,20);
  fill(255,255,0);
   rect(580,400,40,20);
  fill(0);
   rect(580,420,40,20);
  fill(255,255,0);
   rect(580,440,40,20);
  fill(0);
   rect(580,460,40,20); 
  fill(255,255,0);
   rect(580,480,40,20);
  triangle(600,150,580,200,620,200);
  triangle(600,550,580,500,620,500);
  
//toll office 
  
  fill(220);
  rect(180,320,40,40);
  fill(220);
  rect(280,320,40,40);
  fill(220);
  rect(380,320,40,40);
  fill(220);
  rect(480,320,40,40);
  fill(220);
  rect(580,320,40,40);
  
  //barricade
  //fill(255,0,0);
  //rect(200,310,-70,5);
  //rect(300,310,-70,5);
  //rect(400,310,-70,5);
  //rect(500,310,-70,5);
  
    // barricade 1
push();
translate(200,310);
rotate(radians(angle));
fill(255,0,0);
rect(-70,0,70,5);
pop();

// barricade 2
push();
translate(300,310);
rotate(radians(angle));
fill(255,0,0);
rect(-70,0,70,5);
pop();

// barricade 3
push();
translate(400,310);
rotate(radians(angle));
fill(255,0,0);
rect(-70,0,70,5);
pop();

// barricade 4
push();
translate(500,310);
rotate(radians(angle));
fill(255,0,0);
rect(-70,0,70,5);
pop();
  
  //barricade5
  push();
translate(600,310);
rotate(radians(angle));
fill(255,0,0);
rect(-70,0,70,5);
pop();
}

    


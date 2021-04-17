//defining all the images, arrow
var background,backgroundImage;
var bow,bowImage;
var blue_balloon,blue_balloonImage;
var green_balloon,green_balloonImage;
var pink_balloon,pink_balloonImage;
var red_balloon,red_balloonImage;
var arrow, arrowImage;
var score
function preload(){
 //loading all the images
 backgroundImage=loadImage( "background0.png");
 blue_balloonImage=loadImage("blue_balloon0.png");
 red_balloonImage=loadImage("red_balloon0.png"); 
 pink_balloonImage=loadImage("pink_balloon0.png"); 
 green_balloonImage=loadImage("green_balloon0.png");
 bowImage=loadImage("bow0.png");
 arrowImage=loadImage("arrow0.png");
}

function setup() {
  //creating canvas
  createCanvas(500, 500);
  //creating the background
  background=createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.5;
  //creating the bow sprite
  bow=createSprite(450,300,20,30);
  bow.addImage(bowImage);
  //making the new group for all balloons, arrow
  redB = new Group();
  greenB = new Group();
  pinkB = new Group();
  blueB = new Group();
  arrowGroup = new Group();
  
  score = 0;
}

function draw() {
  //giving the velocity to the background
  background.velocityX=-3;
  //repeating the background
  if(background.x<0){
    background.x=background.width/2;
  }
  //giving the command to bow to move with the mouse
  bow.y=mouseY;
  //creating the arrow for bow when space key is pressed
  if(keyDown("space")){
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y
  }
  var select_balloon = Math.round(random(1,4));
  if(World.frameCount%100 == 0){
    if(select_balloon == 1){
      redballoon();
    } else if(select_balloon == 2){
      pinkballoon();    
    } else if(select_balloon == 3){
      blueballoon();
    } else{
      greenballoon();
    }
  }
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(keyDown("space")){
    createArrow();
  }
  
  
 drawSprites();
  text("score : "+score,270,30);
}

  function redballoon(){
  var red = createSprite(0,Math.round(random(20,370)), 10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
  }

  function pinkballoon(){
  var pink = createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.5;
  pinkB.add(pink);   
        
  }
  
  function greenballoon(){
  var green = createSprite(0,Math.round(random(20,370)),10 ,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
  
  }

  function blueballoon(){
  var blue = createSprite(0,Math.round(random(20,370)),10 ,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
     
  }

function createArrow(){
  var arrow = createSprite(480,100,5,10)
  arrow.velocityX = -5;
  arrow.scale = 0.2;
  arrow.lifetime = 150;
  arrowGroup.add(arrow);
  return arrow
}
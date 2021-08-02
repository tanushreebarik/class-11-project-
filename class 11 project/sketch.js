var track,trackImage;
var runner,runnerAnimation;
var leftBoundary,rightBoundary;

function preload(){
  //pre-load images
  trackImage = loadImage("path.png");
  runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,400,400);
  track.addImage("path",trackImage);
  track.velocityY = 3;
  runner = createSprite(200,350);
  runner.addAnimation("runner",runnerAnimation);
  runner.scale = 0.1;
  leftBoundary = createSprite(30,200,55,400);
  rightBoundary = createSprite(370,200,55,400);
  leftBoundary.visible = false;
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  if(track.y > 400){
    track.y = 200;
  }
    runner.x = mouseX;
    runner.collide(leftBoundary);
    runner.collide(rightBoundary);

  
drawSprites();
}

var PL1, PL2,Pl1Image, Pl2Image, Ast, AstI1, AstI2, Space ,Backgroun, Backgroun2;

var form, player, game, n;

var gameState = 0;
var playerCount;
var allPlayers;
var cars;
var database;
function preload(){

  Space = loadImage("Space bg.jpg")
  AstI1 = loadImage("Asteroid.png");
  AstI2 = loadImage("Fireball.png");
  Pl1Image = loadImage("Rocket (1).png");
  Pl2Image = loadImage("Rocket (2).png");
}


function setup() {
  createCanvas(800,400);
  
  database = firebase.database();

 

  Backgroun2 = createSprite(1600, 200, 800, 800);
  Backgroun2.addImage(Space);
  Backgroun2.velocityX = -4;
  Backgroun2.height = 800;
  Backgroun2.width = 800;

  Backgroun = createSprite(800, 200, 800, 800);
  Backgroun.velocityX = -4; 
  Backgroun.addImage(Space)
  Backgroun.height = 800;
  Backgroun.width = 800;

  game = new Game();
  game.getState();
  game.start();


  
}

function draw() {
 

  
  if(Backgroun.x < -400){
    Backgroun.x = 1200;
      }
      if(Backgroun2.x < -400){
        Backgroun2.x = 1200;
          }
    
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

  
  }
 





  Asteroid();
}

function Asteroid(){
  if(frameCount % 90 === 0){
    Ast = createSprite(1850, Math.round(random(0,400)), 50, 50);
    var ran = Math.round(random(1,2));
    switch(ran){
      case 1: Ast.addImage(AstI2);
      break;
      case 2: Ast.addImage(AstI1);
      break;
     
  
     }
    Ast.velocityX = -7
    Ast.scale = 0.2;
  }
}
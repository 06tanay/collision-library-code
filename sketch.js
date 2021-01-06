var fixedrect,movingrect;
var g1,g2;
function setup() {

  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 80);
  fixedrect.shapeColor="green";
fixedrect.debug=true;

movingrect=createSprite(400,400,80,50);
movingrect.shapeColor="green";
movingrect.debug=true;
g1=createSprite(100,100,50,50);
g1.shapeColor="green";
g2=createSprite(100,200,50,50);
g2.shapeColor="green";
  
}

function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
 // console.log(movingrect.x-fixedrect.x);
  if(istouching(movingrect,g2)){
    g2.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    g2.shapeColor="green";
    movingrect.shapeColor="green";
  }
  
  drawSprites();
}
function istouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
object1.y-object2.y<object2.width/2+object1.width/2&&
object2.y-object1.y<object2.width/2+object1.width/2

    ){
   return true;
  }
  else{
    return false;

  }
}
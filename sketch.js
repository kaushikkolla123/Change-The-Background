var fixedRect,movingRect;
var mouseX,mouseY;
function setup(){
createCanvas(500,500);
var fixedRect = createSprite(200,200,50,80);
fixedRect.shapeColor = "green";
var movingRect = createSprite(400,200,80,30);
movingRect.shapeColor = "red";
}
function draw(){
	background("0");
	movingRect.x = World.mouseX;
	movingRect.y = World.mouseY;
	drawSprites();

	if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
		&&fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
		&&movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
		&&fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
		movingRect.shapeColor = "green";
		fixedRect.shapeColor = "red";
		background("black")
	}
else{
	movingRect.shapeColor = "pink";
	fixedRect.shapeColor = "blue";
	background("green");


}
drawSprites();
}

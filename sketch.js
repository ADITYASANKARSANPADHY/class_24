//name spacing or nick, short NAME
const phyEngine = Matter.Engine;
const phyWorld = Matter.World;
const phyBodies = Matter.Bodies;
//var height = 100;
var myEngine, myWorld;
var ground,ball1,ball2,ball3,ball4
;  //bodies/objs
//var width = 500;
 
function setup() {
    createCanvas(1200,400);
    myEngine = phyEngine.create();
    myWorld = myEngine.world;
 
    //create an option
    //JSON
box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70); 
box3 = new Box(700,260,70,70); 
box4 = new Box(920,260,70,70); 
box5 = new Box(810,160,70,70);

log1 = new Log(810,260,300,PI/2);
log2 = new Log(810,180,300,PI/2);
log3 = new Log(760,120,150,PI/2);
log4 = new Log(870,120,150,PI/2);




pig1 = new Pig(820,350);
pig2 = new Pig(820,210);

bird = new Bird(100,100);

ground = new Ground(600,390,1200,20);

/*edges = CreateEdgeSprites();
box2.bounceOff(edges);*/

}
 
function draw() {
    background(0,0,0);  
 //drawSprites();
 phyEngine.update(myEngine);
 
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 ground.display();  
 log1.display();
 log2.display();
 log3.display();
 log4.display();

 pig1.display();
 pig2.display();
 bird.display();
}

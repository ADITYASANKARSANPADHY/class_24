class Log{
    // passing arguments
    constructor(x,y,height,angle){
    var options ={
        'restitution':0.3,
        'friction':30.0,
        'density':1.0
    }
    
    this.body = phyBodies.rectangle(x,y,20,height,options);
    
    this.width = 20;
    this.height = height;
    Matter.Body.setAngle(this.body, angle);
    phyWorld.add(myWorld,this.body);
    }
    
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    //fill("black");
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    
    
    }
    
    
    }
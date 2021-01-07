class Bird {




    constructor(x, y) {
   
   
      var options = {
   
   
          'restitution':0.3,
   
   
          'friction':1.0,
   
   
          'density':1.0
   
   
      }
   
   
      this.body = phyBodies.rectangle(x, y, 30,30, options);
   
   
      this.width = 30;
   
   
      this.height = 30;
   
   
     
   
   
      phyWorld.add(myWorld, this.body);
   
   
    }
   
   
    display(){
   
   
      var pos =this.body.position;
   
   
      var angle = this.body.angle;
   
    pos.x = mouseX;
    pos.y = mouseY;  
    push();
   
   
      translate(pos.x, pos.y);
   
   
      rotate(angle);
   
   
      rectMode(CENTER);
   
   
      strokeWeight(4);
   
   
      stroke("green");
   
   
      fill("green");
   
   
      rect(0, 0, this.width, this.height);
   
   
      pop();
   
   
    }
   
   
   };
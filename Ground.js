




class Ground {




    constructor(x,y,width,height) {
 
 
      var options = {
 
 
          isStatic: true
 
 
      }
 
 
      this.body = phyBodies.rectangle(x,y,width,height,options);
 
 
      this.width = width;
 
 
      this.height = height;
 
 
      phyWorld.add(myWorld, this.body);
 
 
    }
 
 
    display(){
 
 
      var pos =this.body.position;
 
 
      rectMode(CENTER);
 
     push();
      fill("brown");
 
 
      rect(pos.x, pos.y, this.width, this.height);
 
     pop();
    }
 
 
  };
 
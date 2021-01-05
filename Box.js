class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':1.5
    }  

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    
    World.add(world, this.body);
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed<2){
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(995,95,19);
    rect(0, 0, this.width, this.height);
    pop();
  }
  else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 7;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }
}
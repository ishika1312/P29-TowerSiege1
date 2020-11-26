class Polygon{
    constructor()
    {
        var options ={
        isStatic:false
      }

     this.body = Bodies.circle(150, 340, 10, options);
     this.image=loadImage("Images/polygon.jpg");
     this.image.scale = 100;
     World.add(world, this.body);
    }

    display(){
     var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0 , 0 , 20, 20);
    pop();
    }
}
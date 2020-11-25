class Mango {
    constructor(x,y,redius){
        var option ={
            isStatic:true
        }
      this.body = Bodies.circle(x,y,redius,option)  
      this.image= loadImage("sprits/mango.png");
    }
    display(){
        var pos = this.body.position
       // fill("white");
       imageMode(CENTER);
        image(this.image,pos.x, pos.y, 55, 55);
    }
}
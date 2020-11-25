class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image= loadImage("sprits/stone.png");
        
    }
    display(){
      
var pos = this.body.position
imageMode(CENTER)

image(this.image,pos.x,pos.y,this.width,this.height)


    }
}
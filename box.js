class Box{
    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x, y, width,height)
        World.add(world,this.body)
        this.height = height
        this.width = width
        
       
    }
    display(){
        fill("red")
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}
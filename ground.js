class ground
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,this.w,this.height,options)
        this.w=w;
        this.h=h
        World.add(world,this.body);

    }
    display()
    {
        var pos=this.body.position
        var angel = this.body.angel
        push ()
        translate (pos.x,pos.y)
        rotate (angel)
        strokeWeight(3)
        fill ("brown")
        rect(0,0,this.w,this.h)
        pop ()
    }
}
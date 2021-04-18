//creates slingshot class
class SlingShot{
    //used to create the properties of the object
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //defines pointB
        this.pointB= pointB
        //makes constraint for slingshot
        this.sling = Constraint.create(options);
        //adds slingshot to the world
        World.add(world, this.sling);
    }
    //used to show the object on the canvas
    display(){
        //used for it to only happen when bodyA is present
        if(this.sling.bodyA){
           //used to store the position of bodyA
        var pointA = this.sling.bodyA.position;
        //defining the point the bird is hanging from
        var pointB = this.pointB;
        //to make the line thickness
        strokeWeight(4);
        //to make the slingshot line
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}  //to make the bird fly and hit things
    fly(){
        this.sling.bodyA=null
    }
}


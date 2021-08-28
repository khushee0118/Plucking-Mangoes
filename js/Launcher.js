class Launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);

    }
    attach(body) {
        this.launcher.bodyA = body
        }
    fly() {
        this.launcher.bodyA=null;
    }
    Launch(bodyA) {
        this.launcher.bodyA=bodyA;
    }
     

    display() {
        //var pointA=this.launcher.bodyA.position;
        //var pointB=this.pointB;
        // strokeWeight(4);
        // line(pointA.x,pointA.y,pointB.x, pointB.y )

    }
}

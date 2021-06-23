
class Ball  {
    
  constructor(x,y){
    var options = {
        'restitution':0.,
        'friction':0.2,
        'density':0.2
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    //this.image = loadImage("sprites/base.png");
   
    this.ballimage = loadImage("images/ball for game.png");
    this.smokeImage = loadImage("images/smoke.png");
    this.trajectory =[];
    World.add(world, this.body);
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.ballimage, 0, 0, this.width, this.height);
    pop();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
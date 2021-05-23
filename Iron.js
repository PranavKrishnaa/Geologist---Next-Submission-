class Iron{
	constructor(x,y) {
	// assign options to the rubber ball
	var options={
		'restitution':0.8, 
		'friction':3,
		'density':30
	}
	this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 100;
    this.height = 120;
	World.add(world, this.body);

	}
	display()
{
		var ironpos=this.body.position;		
		push();
		translate(ironpos.x, ironpos.y);
		strokeWeight(3);
   		stroke('black');	
		fill("gray");
		rectMode(CENTER)
		rect(0,0,this.width,this.height);
		pop();
	}

}
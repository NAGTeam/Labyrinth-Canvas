Ball.Game = function(game) {
	ball = null;
	block = null;
	blocks = null;
	hole = null;
	holes = null;
	finish = null;
};
Ball.Game.prototype = {
	create: function() {	
		console.log("Here I am!");	
		/* adding background */
		this.game.add.sprite(0, 0, 'bg');
		console.log("Background updated to... PARQUET!!");
		
		/* adding group of block(s) */
		blocks = game.add.group();
		
		/* finish! */
		finish = game.add.sprite(10, 85, 'finish');
		hole.body.setCircle(5, 14, 14);
		finish.body.immovable = true;	
		
		/* holes */
		holes = game.add.group();
		hole = holes.create(140, 10, 'hole');
		hole.body.setCircle(5, 14, 14);
		hole.body.immovable = true;	
		
		/* adding ball */
		ball = game.add.sprite(0, 10, 'ball');
		ball.body.bounce.y = 0.3;
		ball.body.bounce.x = 0.3;
		ball.body.setCircle(13, 14, 14);
		ball.body.collideWorldBounds = true;
	},
	
	update: function() {
		this.game.physics.collide(ball, finish, this.levelComplete, null, this);
		this.game.physics.collide(ball, holes, this.restartLevel, null, this);
		this.game.physics.collide(ball, blocks);
	},
	
	levelComplete: function() {
		alert("Level completed!");
		this.game.state.start('Home');
	},
	
	restartLevel: function() {
		this.game.state.start('Play');
	},
	
	handlingRotation: function(e) {
		/* handling rotation is soooooo simple! */
		var x = e.gamma; // range [-90,90]
		var y = e.beta;  // range [-180,180]
		ball.body.velocity.x += x;
		ball.body.velocity.y += y/2;
	}
};






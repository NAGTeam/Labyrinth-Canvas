Ball.Game = function(game) {
	ball = null;
	block = null;
	blocks = null;
	hole = null;
	holes = null;
	finish = null;
	level = 0;
	maxLevels = 2;
};
Ball.Game.prototype = {	
	preload: function() {},
	
	create: function() {	
		console.log("Here I am!");
		/* adding deviceorientation handler */	
		window.addEventListener("deviceorientation", this.handlingRotation, true);
		
		/* adding background */
		this.game.add.sprite(0, 0, 'bg');
		console.log("	Background updated to... PARQUET!!");
		
		/* adding group of block(s) */
		blocks = this.game.add.group();
		console.log("	Added blocks group");
		
		/* finish! */
		finish = this.game.add.sprite(100, 525, 'finish');
		this.game.physics.arcade.enableBody(finish, true);
		console.log("	Added finish");
		finish.body.setSize(2, 2, 14, 14);
		console.log("	Setted cicle for finish");
		finish.body.immovable = true;	
		console.log("	Finish = immovable");
		
		/* holes */
		holes = this.game.add.group();
		console.log("	Added holes group");
		hole = holes.create(140, 10, 'hole');
		this.game.physics.arcade.enableBody(hole, true);
		console.log("	Added a hole");
		hole.body.setSize(2, 2, 14, 14);
		console.log("	Set circle for hole");
		hole.body.immovable = true;	
		console.log("	Hole immovable");
		
		/* adding ball */
		ball = this.game.add.sprite(0, 10, 'ball');
		this.game.physics.arcade.enableBody(ball, true);
		console.log("	Ball added.");
		ball.body.bounce.setTo(0.3, 0.3);
		console.log("	Ball bounces set");
		//ball.body.setSize(12, 12, 14, 14);
		console.log("	Ball set circle");
		ball.body.collideWorldBounds = true;
		console.log("	Ball collideWorldBounds set");
		
		/* Now let's create some levels */
		this.createLevel(level);
	},
	
	update: function() {
		console.log("Yayyy update function starts!");
		this.game.physics.arcade.collide(ball, finish, this.levelComplete, null, this);
		console.log("	Collisions between ball and finish set");
		this.game.physics.arcade.collide(ball, holes, this.restartLevel, null, this);
		console.log("Colli");
		this.game.physics.arcade.collide(ball, blocks);
	},
	
	createLevel: function(level) {
		console.log("create level");
		switch(level) {
			case 1: {
				hole = holes.create(72, 320, 'hole');
				this.game.physics.arcade.enableBody(hole, true);
				hole.body.setSize(2, 2, 14, 14);
				hole.body.immovable = true;		
				break;
			};
			case 2: {
				hole = holes.create(100, 480, 'hole');
				this.game.physics.arcade.enableBody(hole, true);
				hole.body.setSize(2, 2, 14, 14);
				hole.body.immovable = true;
				hole = holes.create(30, 320, 'hole');
				this.game.physics.arcade.enableBody(hole, true);
				hole.body.setSize(2, 2, 14, 14);
				hole.body.immovable = true;			
				break;
			};
			default: {
				break;
			};
		};
	},
	
	levelComplete: function() {
		if(level >= maxLevels) {
			alert('Game completed!');
			this.game.state.start('MainMenu');
		}
		else {
			alert('Level '+level+' completed!');
			level++;
			this.game.state.start('Game');
		}
	},
	
	restartLevel: function() {
		alert("You lose! Retry");
		this.game.state.start('Game');
	},
	
	handlingRotation: function(e) {
		/* handling rotation is soooooo simple! */
		var x = e.gamma; // range [-90,90]
		var y = e.beta;  // range [-180,180]
		ball.body.velocity.x += x;
		ball.body.velocity.y += y/2;
	}
};






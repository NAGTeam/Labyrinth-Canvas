Ball.Game = function(game) {
	ball = null;
	block = null;
	blocks = null;
	hole = null;
	holes = null;
	finish = null;
	level = 1;
	maxLevels = 3;
	timer = 0;
	loop = null;
};
Ball.Game.prototype = {	
	preload: function() {},
	
	create: function() {	
		console.log("Here I am!");
		/* adding deviceorientation handler */	
		window.addEventListener("deviceorientation", this.handlingRotation, true);
		
		/* re-adding background */
		this.game.add.sprite(0, 0, 'bg');	
		
		/* adding group of block(s) */
		blocks = this.game.add.group();
		console.log("	Added blocks group");
		
		/* adding borders */
		border = blocks.create(0, 0, 'hb');
		this.game.physics.arcade.enableBody(border, true);
		border.body.immovable = true;
		border = blocks.create(0, 0, 'vb');
		this.game.physics.arcade.enableBody(border, true);
		border.body.immovable = true;
		border = blocks.create(0, window.innerHeight-9, 'hb');
		this.game.physics.arcade.enableBody(border, true);
		border.body.immovable = true;
		border = blocks.create(window.innerWidth-10, 0, 'vb');
		this.game.physics.arcade.enableBody(border, true);
		border.body.immovable = true;
		angle = blocks.create(window.innerWidth-19, 1, 'angle2');
		angle = blocks.create(3, 3, 'angle1');
		angle = blocks.create(3, window.innerHeight-16, 'angle4');
		angle = blocks.create(window.innerWidth-18, window.innerHeight-16, 'angle3');
		
		timerText = this.game.add.text(15, window.innerHeight-35, "Time: "+timer, { font: "22px Arial", fill: "#f00000" });
		
		/* adding a block */
		block = blocks.create(140, 200, 'vblock');
		this.game.physics.arcade.enableBody(block, true);
		block.body.immovable = true;
		
		/* finish! */
		finish = this.game.add.sprite(window.innerWidth*3/4, window.innerHeight-60, 'finish');
		this.game.physics.arcade.enableBody(finish, true);
		console.log("	Added finish");
		finish.body.setSize(2, 2, 14, 14);
		console.log("	Setted cicle for finish");
		finish.body.immovable = true;	
		console.log("	Finish = immovable");
		
		/* holes */
		holes = this.game.add.group();
		console.log("	Added holes group");
		
		/* adding ball */
		ball = this.game.add.sprite(12, 12, 'ball');
		this.game.physics.arcade.enableBody(ball, true);
		console.log("	Ball added.");
		ball.body.bounce.setTo(0.4, 0.4);
		console.log("	Ball bounces set");
		//ball.body.setSize(12, 12, 14, 14);
		console.log("	Ball set circle");
		//ball.body.collideWorldBounds = true;
		console.log("	Ball collideWorldBounds set");
		
		/* Managing Pause */
		pause_menu = this.game.add.sprite(0, 0, 'pause_menu');
		pause_menu.visible = false;	
		pause = this.add.button(2, 2, 'pause', function(){
			pause.visible = false;
			pause_menu.visible = true;
			this.game.paused = true;
		}, this);
		pause.inputEnabled = true;
		this.game.input.onDown.add(function () {
			if(this.game.paused) {
				ball.body.velocity.x = 0;
				ball.body.velocity.y = 0;
				this.game.paused = false;
				pause.visible = true;
				pause_menu.visible = false;
			}
		},this);
		
		/* Timer */
		loop = this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
		
		/* Now let's create some levels */
		this.createLevel(level);
	},
	
	update: function() {
		console.log("Yayyy update function starts!");
		this.game.physics.arcade.collide(ball, finish, this.levelComplete, null, this);
		this.game.physics.arcade.collide(ball, holes, this.restartLevel, null, this);
		this.game.physics.arcade.collide(ball, blocks);

	},
	
	createLevel: function(level) {
		console.log("create level");
		switch(level) {
			case 2: {
				block = blocks.create(140, 200, 'hblock');
				this.game.physics.arcade.enableBody(block, true);
				block.body.immovable = true;
				hole = holes.create(72, 320, 'hole');
				this.game.physics.arcade.enableBody(hole, true);
				hole.body.setSize(2, 2, 14, 14);
				hole.body.immovable = true;		
				break;
			};
			case 3: {
				block = blocks.create(140, 200, 'hblock');
				this.game.physics.arcade.enableBody(block, true);
				block.body.immovable = true;
				block = blocks.create(0, 400, 'hblock');
				this.game.physics.arcade.enableBody(block, true);
				block.body.immovable = true;
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
			alert('Level '+level+' completed!\nTime = ' + timer);
			alert('Game completed!');
			level = 0;
			timer = 0;
			this.game.state.start('MainMenu');
		}
		else {
			alert('Level '+level+' completed!\nTime = ' + timer);
			timer = 0;
			level++;
			this.game.state.start('Game');
		}
	},
	
	restartLevel: function() {
		alert("LEVEL " + level + "\nYou lose! Retry");
		timer = 0;
		this.game.state.start('Game');
	},
	
	handlingRotation: function(e) {
		/* handling rotation is soooooo simple! */
		var x = e.gamma; // range [-90,90]
		var y = e.beta;  // range [-180,180]
		ball.body.velocity.x += x;
		ball.body.velocity.y += y/2;
	},
	
	updateCounter: function() {
		timer++;
		timerText.text = "Time: " + timer;
	}
};






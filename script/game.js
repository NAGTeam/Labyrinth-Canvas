Ball.Game = function(game) {
	ball = null;
	level = 1;
	maxLevels = 3;
	timer = 0;
	loop = null;
	foreground = null;
	map = null;
};
Ball.Game.prototype = {	
	preload: function() {
		this.game.time.advancedTiming = true;
	},
	
	create: function() {	
		console.log("Here I am!");
		/* adding deviceorientation handler */	
		window.addEventListener("deviceorientation", this.handlingRotation, true);
		
		/* Now let's create some levels */
		this.createLevel(level);
		this.game.camera.follow(ball);
		
		timerText = this.game.add.text(15, window.innerHeight-35, "Time: "+timer, { font: "22px Arial", fill: "#f00000" });
		
		/* adding ball */
		ball = this.game.add.sprite(32, 32, 'ball');
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
	},
	
	update: function() {
		console.log("Yayyy update function starts!");
		this.game.physics.arcade.collide(ball, layer);
		//map.setTileIndexCallback(0, this.awesomeEvent, this);
	},
	
	createLevel: function(level) {
		console.log("create level");
		switch(level) {
			case 1: {
				map = this.game.add.tilemap('map1');
				map.addTilesetImage('tileset');
				foreground = map.createLayer('Foreground');
				foreground.resizeWorld();
				//ents = map.createLayer('Collisions');
				//map.setCollisionBetween(0, 7);
				console.log("Level 1 created");
				break;
			};
			case 2: {
				alert("Not yet implemented.");
				break;
			};
			case 3: {
				alert("Not yet implemented.");
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






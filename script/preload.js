Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
	preload: function() {
		/* here will be loaded all the sprites needed */
		console.log("	Loading all the sprites");
		this.game.load.image('bg', 'assets/wood.png');
		this.game.load.image('ball', 'assets/ball.png');
		this.game.load.image('hole', 'assets/hole.png');
		this.game.load.image('finish', 'assets/finish.png');
		this.game.load.image('btn_start', 'assets/btn_start.png');
		console.log("	Sprites loaded.");
	},
	create: function() {
		/* pass the baton to Menu */
		console.log("Pass the baton to Menu");
		this.game.state.start('Home');
	}
};

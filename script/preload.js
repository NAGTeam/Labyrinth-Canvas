Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
	preload: function() {
		/* here will be loaded all the sprites needed */
		console.log("	Loading all the sprites");
		this.game.load.image('bg', 'assets/wood.png');
		this.game.load.image('hb', 'assets/horizontal_border.png');
		this.game.load.image('vb', 'assets/vertical_border.png');
		this.game.load.image('hblock', 'assets/hblock.png');
		this.game.load.image('vblock', 'assets/vblock.png');
		this.game.load.image('angle1', 'assets/angolo-alto-sx.png');
		this.game.load.image('angle2', 'assets/angolo-alto-dx.png');
		this.game.load.image('angle3', 'assets/angolo-basso-dx.png');
		this.game.load.image('angle4', 'assets/angolo-basso-sx.png');
		this.game.load.image('ball', 'assets/ball.png');
		this.game.load.image('hole', 'assets/hole.png');
		this.game.load.image('finish', 'assets/finish.png');
		this.game.load.image('btn_start', 'assets/btn_start.png');
		console.log("	Sprites loaded.");
	},
	create: function() {
		/* pass the baton to Menu */
		console.log("Pass the baton to MainMenu");
		this.game.state.start('MainMenu');
	}
};

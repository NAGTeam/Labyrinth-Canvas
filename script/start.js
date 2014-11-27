var Ball = {};
Ball.Boot = function(game) {};
Ball.Boot.prototype = {
	preload: function() {
		/* ... */
	},
	create: function() {
		console.log("	setting canvas size");
		/* Setting the correct size */
		this.game.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		console.log("	scaleMode set");
		this.game.scale.pageAlignHorizontally = true;
		console.log("	pageAlignHorizontally set");
		this.game.scale.pageAlignVertically = true;
		console.log("	pageAlignVertically set");
		this.game.scale.setScreenSize(true);
		console.log("	ScreenSize set");
		this.game.state.start('Preloader');
	}
};

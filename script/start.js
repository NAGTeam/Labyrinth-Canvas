var Ball = {};
Ball.Start = function(game) {};
Ball.Start.prototype = {
	preload: function() {
		/* ... */
	},
	create: function() {
		console.log("	NO: setting canvas size");
		/* Setting the correct size */
		//this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		console.log("	scaleMode set");
		this.game.stage.scale.pageAlignHorizontally = true;
		console.log("	pageAlignHorizontally set");
		this.game.stage.scale.pageAlignVertically = true;
		console.log("	pageAlignVertically set");
		//this.game.stage.scale.setScreenSize(true);
		console.log("	NO: ScreenSize set");
		this.game.state.start('Preloader');
	}
};

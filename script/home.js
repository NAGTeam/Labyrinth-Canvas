Ball.Home = function(game) {};
Ball.Home.prototype = {
	create: function() {
		console.log("	Adding start button");
		this.startButton = this.add.button((320-146)/2, 200, 'btn_start', this.play, this);
		console.log("	Done.");
	},
	play: function() {
		console.log("Pass the baton to Play");
		this.game.state.start("Game");
	}
};

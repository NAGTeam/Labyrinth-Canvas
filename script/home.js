Ball.MainMenu = function(game) {};
Ball.MainMenu.prototype = {
	create: function() {
		this.game.add.sprite(0, 0, 'bg');
		console.log("	Adding start button");
		this.startButton = this.add.button((320-146)/2, 200, 'btn_start', function(){
			console.log("Pass the baton to Game");
			this.game.state.start("Game");
		}, this);
		console.log("	Done.");
	},
	
	update: function() {}
	
	/*play: function() {
		console.log("Pass the baton to Game");
		this.game.state.start("Game");
	}*/
};

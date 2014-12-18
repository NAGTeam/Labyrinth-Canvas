Ball.MainMenu = function(game) {};
Ball.MainMenu.prototype = {
	create: function() {
		console.log("	Adding start button");
		this.startButton = this.add.button((window.innerWidth-134)/2, (window.innerHeight-52)*2/3, 'btn_start', function(){
			console.log("Pass the baton to Game");
			this.game.state.start("Game");
		}, this);
		console.log("	Done.");
		
		help = this.add.button(window.innerWidth/4-30, window.innerHeight*5/6, 'help', function(){
			alert("Just tilt your device");
		}, this);
		info = this.add.button(window.innerWidth/4*3-30, window.innerHeight*5/6, 'info', function(){
			alert("Developed by NAGTeam");
		}, this);
	}
};

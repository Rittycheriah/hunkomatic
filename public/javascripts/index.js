$(document).ready(function() {
	var Hunk = function () {
		this.movies = randomizer(12, 1);
		this.restaurants = randomizer(12, 1);
		this.hobbies = randomizer(12,1 );
	};

	var randomizer = function(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	var Game = function(playerCount, hunk) {
		this.hunk = hunk;
		this.playerCount = playerCount;

		this.movies = [
			{"Human Centipede": 1}, 
			{"Saw": 2},
			{"Night of the Living Dead": 3},
			{"Mission Impossible": 4}, 
			{"Terminator": 5},
			{"Avengers": 6},
			{"The Jerk": 7},
			{"Back to Future": 8},
			{"Holy Grail": 9}, 
			{"10 Things I Hate About You": 10},
			{"Titantic": 11},
			{"Pride and Prejudice": 12}
		];

		this.hobbies = [
			{"Cliff Diving": 1},
			{"Base Jumping": 2},
			{"Fire Juggling": 3},
			{"Parkour": 4},
			{"Scuba Diving": 5},
			{"Rock Climbing": 6},
			{"Martial Arts": 7},
			{"Horse Riding": 8},
			{"Biking": 9},
			{"Ceramics": 10},
			{"Reading": 11},
			{"Walking on a Beach": 12}
		];

		this.restaurants = [
			{"Hot Dog Stand": 1},
			{"Fast Food": 2},
			{"Fried Chicken": 3},
			{"Wok the Line": 4},
			{"Cafe de Coffee": 5},
			{"Chili's": 6},
			{"Olive Garden": 7},
			{"Sushi Train": 8},
			{"Cheesecake Factory": 9},
			{"Burger Ups": 10},
			{"Flemmings": 11},
			{"Le Fancy": 12}
		];

		this.questions = [
			{"question": "Your First Date: Where would you take your date to eat?", 
			 "answers": this.restaurants, 
			 "type": "restaurants"
			},
			{"question": "Wanna hang out? What do you want to do?", 
			 "answers": this.hobbies, 
			 "type": "hobbies"
			}, 
			{"question": "Let's go to a movie. What do you want to see?", 
			 "answers": this.movies,
			 "type": "movies"
		  }
		];

		this.nextTurn = function(){
			this.currentQuestion = questions[randomizer(0, 2)];
		};

		this.compareAnswers = function(playerAns){
	  	var spaces = [];
	  	var hunkAns = hunk.[currentQuestion.type];
	  	for(var i = 0; i < playerCount; i++){
	  		var diff = hunkAns - playerAns;
	  		if (diff === 0){
	  			spaces.push(5);
	  		} else if (Math.abs(diff) === 2) {
	  			spaces.push(2);
	  		} else {
	  			spaces.push(0);
	  		}
	  	}
	  	return spaces;
	  };
	};

	var startGame = function(playerCount) {
	 	var newHunk = new Hunk();
		var newGame = new Game(playerCount, newHunk);
	};

});
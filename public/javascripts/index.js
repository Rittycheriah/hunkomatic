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
			{
				"answer": "Human Centipede",
			 	"point": 1
			}, 
			{
				"answer": "Saw",
				"point": 2

			},
			{
				"answer": "Night of the Living Dead",
				"point": 3
			},
			{
				"answer": "Mission Impossible",
				 "point": 4
			}, 
			{
				"answer": "Terminator",
				"point": 5
			},
			{
				"answer": "Avengers",
				"point": 6
			},
			{
				"answer": "The Jerk",
				"point": 7
			},
			{
				"answer": "Back to Future",
				"point": 8
			},
			{
				"answer": "Holy Grail",
				"point": 9
			}, 
			{
				"answer": "10 Things I Hate About You",
				"point": 10
				},
			{
				"answer": "Titantic",
				"point": 11
			},
			{
				"answer": "Pride and Prejudice",
				"point": 12
			}
		];

		this.hobbies = [
			{
				"answer": "Cliff Diving",
				"point":1
			},
			{
				"answer": "Base Jumping",
				"point": 2
			},
			{
				"answer": "Fire Juggling",
				"point": 3
			},
			{
				"answer": "Parkour",
				"point": 4
			},
			{
				"answer": "Scuba Diving",
				"point": 5
			},
			{
				"answer": "Rock Climbing",
				"point": 6
			},
			{
				"answer": "Martial Arts",
				"point": 7
			},
			{
				"answer": "Horse Riding",
				"point": 8
			},
			{
				"answer": "Biking",
				"point":9
			},
			{
				"answer": "Ceramics",
				"point": 10
			},
			{
				"answer": "Reading",
				"point": 11
			},
			{
				"answer": "Walking on a Beach",
				"point": 12
			}
		];

		this.restaurants = [
			{
				"answer": "Hot Dog Stand",
			 	"point": 1
			},
			{
				"answer": "Fast Food",
				"point": 2
			},
			{
				"answer": "Fried Chicken",
				"point": 3
			},
			{
				"answer": "Wok the Line",
				"point": 4
			},
			{
				"answer": "Cafe de Coffee",
				"point": 5
			},
			{
				"answer": "Chili's",
				"point": 6
			},
			{
				"answer": "Olive Garden",
				"point": 7
			},
			{
				"answer": "Sushi Train",
				"point": 8
			},
			{
				"answer": "Cheesecake Factory",
				"point": 9
			},
			{
				"answer": "Burger Ups",
				"point": 10
			},
			{
				"answer": "Flemmings",
				"point": 11
			},
			{
				"answer": "Le Fancy",
				"point": 12
			}
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
			this.currentQuestion = this.questions[randomizer(0, 2)];
			this.showQuestion();
			this.createPlayerForms();
		};

		this.showQuestion = function() {
			$('.currentQuestion').text(this.currentQuestion.question);
		};

		this.createPlayerForms = function() {
			var wrapper = $('<div/>');
			for(var i = 0; i < playerCount; i++) {
				var playerForm = $('<form/>');
				this.currentQuestion.answers.forEach(function(answer) {
					playerForm.append(
						$('<label>').text(answer.answer)
					);
					playerForm.append(
						$('<input/>').attr({
							value: answer.point,
							type: 'radio'
						})
					);					
				});
				wrapper.append(playerForm);
			}
			$('.playerForms').append(wrapper);
 		};

		this.compareAnswers = function(playerAns){
	  	var spaces = [];
	  	var hunkAns = hunk[questionType.type];
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

		$('.next-turn').on('click', function() {
			newGame.nextTurn();
		});
	};

	startGame(4);
});
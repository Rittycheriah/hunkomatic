$(document).ready(function() {
	var Hunk = function () {
		this.movies = randomizer(12, 1);
		this.food = randomizer(12, 1);
		this.hobbies = randomizer(12,1 );
	};

	var randomizer = function(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	var sm_hunk = new Hunk();

	var Game = function(playerCount) {
		this.playerCount = playerCount;
		// this.turn = nextTurn;

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

		this.iceCreamFlavors = [
			{
				vanilla: {
					points: 1,
					comebacks: {
						win: 'Wow how did you know! Vanilla is sooooooo tasty!',
						neutral: 'Yeah vanilla thats ok',
						fail: 'ohh i see! You think im boring! Screw you! (runs away crying)'
					}
				},
			},
			{
				chocolate: {
					points: 2,
					comebacks: {
						win: 'Wow how did you know! Vanilla is sooooooo tasty!',
						neutral: 'Yeah vanilla thats ok',
						fail: 'Chocolate. That is so generic.'
					}
				}

			},
			{strawberry:
				points: 3
				comeback: {
					win: 'Strawberry is my favorite! How did you know!!!'
					neutral: 'Yeah, strawberry is fine. Just fine, really.'
					fail: 'Strawberry. I hate pink.'
					}
				},
			{neopolitan:
				points: 4
				comeback: {
					win: 'Yes! Finally someone who understands diversity.'
					neutral: 'Yeah, I only like one of the flavors really, but it is okay.'
					fail: 'This is so unamerican!'
				}
			},
			{chocolateChip:
				points: 5
				comeback: {
					win: 'Awesome. This is my favorite.'
					neutral: 'Yeah, having chips in ice cream is not that weird I guess.'
					fail: 'I do not even like chocolate chips in cookie form either.'
				}
			},
			{mintChocolateChip:
				points: 6
				comeback: {
					win: 'Yes! Green ice cream is my jam.'
					neutral: 'It is okay.'
					fail: 'Gross'
				}
			},
			{banana:
				points: 7
				comeback: {
					win: 'This is my favorite fruit and in ice cream form!'
					neutral: 'It is all right'
					fail: 'I do not want my dessert and fruit mixed together!'
				}
			},
			{coffee:
				points: 8
				comeback: {
					win: 'I love cofee!'
					neutral: 'It is ok.'
					fail: 'You do not even know me!'
				}
			},
			{cookiesream: 9},
			{rocky road: 10},
			{cookie dough: 11},
			{chocolate hazelnut: 12}
		];

		this.gifts = [
			{puppy},
			{flowers},
			{cupcakes},
			{Car},
			{promise ring},
			{house plant},
			{painting},
			{poem},
			{nothing - they understand},
			{chia pet},
			{champagne},
			{beer}
			{money},
		];

		this.questions = [
			{
				"question": "Your First Date: Where would you take your date to eat?",
			 	"answers": this.restaurants
			},
			{
				"question": "Wanna hang out? What do you want to do?",
			 	"answers": this.hobbies
			},
			{
				"question": "Let's go to a movie. What do you want to see?",
			 	"answers": this.movies
		 	},
			{
				"question": "I feel like icecrean. What flavor would you like?",
				"answers": this.iceCreamFlavors
			},
			{
				"question": "Let's get crazy. Let's go away for the weekend. Where would you like to go?",
				"answers": this.getaways
			}
		];

		this.nextTurn = function(){
			var currentQuestion = questions[randomizer(0, 2)];
			console.log(currentQuestion);
			debugger
		};
	};

});

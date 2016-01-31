
$(document).ready(function() {
    var music = new Audio("../audio/music.mp3");
    music.loop = true;
    music.play();

    var Hunk = function() {
        this.movies = randomizer(12, 1);
        this.restaurants = randomizer(12, 1);
        this.hobbies = randomizer(12, 1);
    this.iceCreamFlavors = randomizer(12, 1);
    this.gifts = randomizer(12, 1);
    };

    var randomizer = function(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var Game = function(playerCount, hunk) {
        this.hunk = hunk;
        this.playerCount = playerCount;

       this.movies = [{
          "answer": "Human Centipede",
          "point": 1,
          "comebacks": {
              "win": "I can't believe we have the same taste in movies!",
             "neutral": "Um, sure? I've never heard of that one.",
             "fail": "...what?!? You're a pyschopath!"
          }
      }, {
          "answer": "Saw",
          "point": 2,
          "comebacks": {
              "win": "I can't believe we have the same taste in movies!",
              "neutral": "Um, sure? I've never heard of that one.",
              "fail": '...umm. No.'
          }
      }, {
          "answer": "Night of the Living Dead",
          "point": 3,
          "comebacks": {
              "win": "Oh wow! I love old horror movies. Romero's a genius!",
              "neutral": 'Yeah, alrght.',
              "fail": '(yawns)'
          }
      }, {
          "answer": "Mission Impossible",
          "point": 4,
          "comebacks": {
              "win": 'I love Tom Cruise!',
              "neutral": 'Sure, why not?.',
              "fail": 'Er...maybe some other time...'
          }
      }, {
          "answer": "Terminator",
          "point": 5,
          "comebacks": {
              "win": 'I love Arnold!',
              "neutral": 'Okay!',
              "fail": "That's not my favorite."
          }
      }, {
          "answer": "Avengers",
          "point": 6,
          "comebacks": {
              "win": 'Awesome! But we have to stay for the credits!',
              "neutral": 'That sounds fun.',
              "fail": "...(sigh)That's a little overated, isn't it?"
          }
      }, {
          "answer": "The Jerk",
          "point": 7,
          "comebacks": {
              "win": 'Steve Martin is the best! What a wild and crazy guy!',
              "neutral": 'Yeah, sounds good.',
              "fail": 'You are a racist!'
          }
      }, {
          "answer": "Back to Future",
          "point": 8,
          "comebacks": {
              "win": "8.21 gigwatts! Hahaha, let's go!",
              "neutral": "Sure, sounds fine.",
              "fail": "You are boring."
          }
      }, {
          "answer": "Holy Grail",
          "point": 9,
          "comebacks": {
              "win": "I have seen Holy Grail like, fifty times, its the best.",
              "neutral": "Sure, why not?",
              "fail": "...Why,  whats so funny about it?"
          }
      }, {
          "answer": "10 Things I Hate About You",
          "point": 10,
          "comebacks": {
              "win": "What a great movie! Heath Ledger is awesome.",
              "neutral": "Yeah, alright.",
              "fail": "The fact that you want to see that movie is the eleventh thing I hate about you."
          }
      }, {
          "answer": "Titantic",
          "point": 11,
          "comebacks": {
              "win": 'I love that movie.',
              "neutral": "Yeah, okay. I haven't seen that yet",
              "fail": 'My cousin died on the Titanic.'
          }
      }, {
          "answer": "Pride and Prejudice",
          "point": 12,
          "comebacks": {
              "win": 'Wow, you have great taste!',
              "neutral": 'Sure, sounds good.',
              "fail": 'My cousin died on the Titanic.'
          }
      }];


      this.hobbies = [{
          "answer": "Cliff Diving",
          "point": 1,
          "comebacks": {
              "win": 'Wow, I love jumping off high places into water! What a rush!',
              "neutral": 'Sure, why not?',
              "fail": 'My cousin died cliff diving.'
          }
      }, {
          "answer": "Base Jumping",
          "point": 2,
          "comebacks": {
              "win": "Woo hoo! Let's go!",
              "neutral": 'Sure, sounds good.',
              "fail": 'What!? Are you crazy?!'
          }
      }, {
          "answer": "Fire Juggling",
          "point": 3,
          "comebacks": {
              "win": 'Yeah, I am totally into fire.',
              "neutral": 'Neat! Sounds like a good time.',
              "fail": 'I have burns over three-fourths of my body. So no.'
          }
      }, {
          "answer": "Parkour",
          "point": 4,
          "comebacks": {
              "win": "Awesome! Let's go!",
              "neutral": 'Sure, sounds good.',
              "fail": "Isn't that just a fancy way to run away?"
          }
      }, {
          "answer": "Scuba Diving",
          "point": 5,
          "comebacks": {
              "win": "It's much better, down where it's wetter!",
              "neutral": 'So did you like the The Life Aquatic?',
              "fail":"'I'm afraid of water."
          }
      }, {
          "answer": "Rock Climbing",
          "point": 6,
          "comebacks": {
              "win": 'Sweet, I love rock climbing!',
              "neutral": 'Sure, sounds good.',
              "fail": 'That sounds boring.'
          }
      }, {
          "answer": "Martial Arts",
          "point": 7,
          "comebacks": {
              "win": "Cool, I'm really big into the underground boxing scene around here.",
              "neutral": 'Cool.',
              "fail": "I don't believe in violence."
          }
      }, {
          "answer": "Horse Riding",
          "point": 8,
          "comebacks": {
              "win": 'I have an amazing stallion. How about we go for a ride?',
              "neutral":"Sure, let's ride.",
              "fail": "I find horses very smelly."
          }
      }, {
          "answer": "Biking",
          "point": 9,
          "comebacks": {
              "win": "Awesome! Let's go!",
              "neutral": 'Sure, sounds good.',
              "fail": "Isnt that just a fancy way to run away?"
          }
      }, {
          "answer": "Ceramics",
          "point": 10,
          "comebacks": {
              "win": 'Everything in my kitchen is ceramic, even my microwave!',
              "neutral": 'Sure, I love throwing pots.',
              "fail": 'You still like to play with dirt?'
          }
      }, {
          "answer": "Reading",
          "point": 11,
          "comebacks": {
              "win": 'Great, what do you read?',
              "neutral": "Oh, that's nice.",
              "fail": "Meh, I'm not into books."
          }
      }, {
          "answer": "Walking on a Beach",
          "point": 12,
          "comebacks": {
              "win": "That's sounds so romantic!",
              "neutral": "That's quite a hobby.",
              "fail": 'I hate sand, its coarse and rough and irritating, and  it gets everywhere.'
          }
      }];
      this.restaurants = [{
          "answer": "Hot Dog Stand",
          "point": 1,
          "comebacks": {
              "win": "I love wieners!",
              "neutral": 'Oh, yeah. Like at a baseball game or something?',
              "fail": 'No, I know how sausage is made.'
          }
      }, {
          "answer": "Fast Food",
          "point": 2,
          "comebacks": {
              "win": "Fast food is my guilty pleasure!",
              "neutral": 'Yeah that might be good.',
              "fail": "Don't you thick the world sucks!"
          }
      }, {
          "answer": "Fried Chicken",
          "point": 3,
          "comebacks": {
              "win": "Yum! I love chicken!",
              "neutral": 'Sure that sounds tasty!',
              "fail": "I'm allergic sucks!"
          }
      }, {
          "answer": "Wok the Line",
          "point": 4,
          "comebacks": {
              "win": "I love Chinese. That place is the best.",
              "neutral": 'Sure, no MSG for me though.',
              "fail": "That's kind sucks!"
          }
      }, {
          "answer": "Cafe de Coffee",
          "point": 5,
          "comebacks": {
              "win": "That place is so hip!",
              "neutral": 'Sure, I could get a cup of coffee.',
              "fail": "I'mthis sucks!"
          }
      }, {
          "answer": "Chili's",
          "point": 6,
          "comebacks": {
              "win": "That place has great service!",
              "neutral": "Sure, we can sit at the bar.",
              "fail": "Yikes sucks!"
          }
      }, {
          "answer": "Olive Garden",
          "point": 7,
          "comebacks": {
              "win": "I go there every week, that place is the best.",
              "neutral": "Everyone likes pasta, I guess.",
              "fail": "I am!"
          }
      }, {
          "answer": "Sushi Train",
          "point": 8,
          "comebacks": {
              "win": "Choo choo! Let us ride the sushi train.",
              "neutral": "Yum, fish could be good.",
              "fail": "Fish!"
          }
      }, {
          "answer": "Cheesecake Factory",
          "point": 9,
          "comebacks": {
              "win": "I love cheesecake!",
              "neutral": "Yeah, that could be good.",
              "fail": "Yuck!"
          }
      }, {
          "answer": "Burger Ups",
          "point": 10,
          "comebacks": {
              "win": "There is nothing like a good burger!",
              "neutral": "Sure. Sounds good.",
              "fail": "I refuse to eat!"
          }
      }, {
          "answer": "Flemmings",
          "point": 11,
          "comebacks": {
              "win": "That sounds so romantic!",
              "neutral": "A little expensive, but okay.",
              "fail": "No. That sucks!"
          }
      }, {
          "answer": "Le Fancy",
          "point": 12,
          "comebacks": {
              "win": "That sounds so romantic!",
              "neutral": "Sure, why not?",
              "fail": "I hate the French!"
          }
      }];
            this.iceCreamFlavors = [{
          "answer": "vanilla",
          "point": 1,
          "comebacks": {
              "win": "Wow how did you know! Vanilla is sooooooo tasty!",
              "neutral": "Yeah, vanilla thats ok",
              "fail": "Ohh I see! You think im boring! Screw you! (runs away crying)"
          }
      }, {
          "answer": "chocolate",
          "point": 2,
          "comebacks": {
              "win": "Wow how did you know! Chocolate is sooooooo tasty!",
              "neutral": "Yeah vanilla thats ok",
              "fail": "Chocolate. That is so generic."
          }
      }, {
          "answer": "strawberry",
          "point": 3,
          "comebacks": {
              "win": "Strawberry is my favorite! How did you know!!!",
              "neutral": "Yeah, strawberry is fine. Just fine, really.",
              "fail": "Strawberry. I hate pink."
          }
      }, {
          "answer": "neopolitan",
          "point": 4,
          "comebacks": {
              "win": "Yes! Finally someone who understands diversity.",
              "neutral": "Yeah, I only like one of the flavors really, but it is okay.",
              "fail": "This is so unamerican!"
          }
      }, {
          "answer": "chocolateChip",
          "point": 5,
          "comebacks": {
              "win": "Awesome. This is my favorite.",
              "neutral": "Yeah, having chips in ice cream is not that weird I guess.",
              "fail": "I do not even like chocolate chips in cookie form either."
          }
      }, {
          "answer": "Mint Chocolate Chip",
          "point": 6,
          "comebacks": {
              "win": "Yes! Green ice cream is my jam.",
              "neutral": "It is okay",
              "fail": "Gross"
          }
      }, {
          "answer": "Banana",
          "point": 7,
          "comebacks": {
              "win": "This is my favorite fruit and in ice cream form!",
              "neutral": "It is all right",
              "fail": "I do not want my dessert and fruit mixed together!"
          }
      }, {
          "answer": "coffee",
          "point": 8,
          "comebacks": {
              "win": "I love coffee!",
              "neutral": "It is ok.",
              "fail": "You do not even know me!"
          }
      }, {
          "answer": "Cookies and Cream",
          "point": 9,
          "comebacks": {
              "win": "Wow! That is my favorite flavor!",
              "neutral": "It is okay.",
              "fail": "I am allergic to this!"
          }
      }, {
          "answer": "Rocky Road",
          "point": 10,
          "comebacks": {
              "win": "I love this flavor!",
              "neutral": "It is okay.",
              "fail": "Bad roads killed my father."
          }
      }, {
          "answer": "Cookiedough",
          "point": 11,
          "comebacks": {
              "win": "How did you know that is my favorite flavor from childhood!",
              "neutral": "It is okay. It is a texture thing.",
              "fail": "Dough makes people sick."
          }
      }, {
          "answer": "Chocolate Hazelnut",
          "point": 12,
          "comebacks": {
              "win": "This is the perfect flavor on EVERYTHING.",
              "neutral": "It is not terrible.",
              "fail": "Whoa, chocolate and nuts? I think we may moving a bit too fast..."
          }
      }];
      this.gifts = [{
          "answer": "Nothing",
          "point": 1,
          "comebacks": {
              "win": "Oh, I am so glad. I did not get you anything either.",
              "neutral": "Oh, so that is what we are doing. I just got you something small anyway.",
              "fail": "But, I thought we were doing something special!"
          }
      }, {
          "answer": "Chiapet",
          "point": 2,
          "comebacks": {
              "win": "Ch-ch-ch-Chia! Awesome.",
              "neutral": "Ah, a plant animal. It is ... unique.",
              "fail": "Um.. thanks?"
          }
      }, {
          "answer": "Poem",
          "point": 3,
          "comebacks": {
              "win": "Wow. That is so romantic",
              "neutral": "Ah, you wrote it yourself. I am touched you tried.",
              "fail": "What do I do this?"
          }
      }, {
          "answer": "Money",
          "point": 4,
          "comebacks": {
              "win": "I love money!",
              "neutral": "At least you gave me something.",
              "fail": "You think I can be bought?"
          }
      }, {
          "answer": "Beer",
          "point": 5,
          "comebacks": {
              "win": "Great. This will be perfect with the chicken wings that I have in my fridge",
              "neutral": "I am not much of a drinker, but thanks.",
              "fail": "You calling me an alcoholic!"
          }
      }, {
          "answer": "Flowers",
          "point": 6,
          "comebacks": {
              "win": "That is the sweetest gift anyone has ever given me.",
              "neutral": "Oh, I think is considered a weed some countries.",
              "fail": "You killed these flowers! But all plants are sacred!"
          }
      }, {
          "answer": "Houseplant",
          "point": 7,
          "comebacks": {
              "win": "That is the sweetest gift anyone has ever given me.",
              "neutral": "Oh, I think is considered a weed some countries.",
              "fail": "You killed these flowers! But all plants are sacred!"
          }
      }, {
          "answer": "Puppy",
          "point": 8,
          "comebacks": {
              "win": "He's perfect! I love puppies!",
              "neutral": "Aww, you're so sweet!",
              "fail": "I'm kind of a cat person, actually."
          }
      }, {
          "answer": "Cupcakes",
          "point": 9,
          "comebacks": {
              "win": "Yum! Cupcakes are the best!!",
              "neutral": "Hey cupcakes, did you make them yourself?",
              "fail": "I hate cake."
          }
      }, {
          "answer": "Painting",
          "point": 10,
          "comebacks": {
              "win": "You did this yourself! You're so talented!!",
              "neutral": "Interesting. And deep.",
              "fail": "Oh, another Monet print. Did you get this from Wal-mart?"
          }
      }, {
          "answer": "Promise Ring",
          "point": 11,
          "comebacks": {
              "win": "This is so meaningful!",
              "neutral": "Cool, a ring!",
              "fail": "Umm.... this really isn't my... umm... hmmmm..."
          }
      }, {
          "answer": "Car",
          "point": 12,
          "comebacks": {
              "win": "A Tesla! Oh you shouldn't have!!",
              "neutral": "A Lexus! That's pretty cool!",
              "fail": "Oh, a Yugo. Hmm..."
          }
      }];
      this.questions = [{
          "question": "So I'm hungry? Where do you want to get some food",
          "answers": this.restaurants,
          "type": "restaurants"
      },
            {
          "question": "Wanna hang out? What do you want to do?",
          "answers": this.hobbies,
          "type": "hobbies"
      },
            {
          "question": "Let's go to a movie. What do you want to see?",
          "answers": this.movies,
          "type": "movies"
      },
      {
          "question": "Oh a gift? What is it?",
          "answers": this.gifts,
        "type": "gifts"
      },
            {
                "question": "mmmm icecream! What flavour will you have?",
                "answers": this.iceCreamFlavors,
                "type": "iceCreamFlavors"
            }];

        this.nextTurn = function() {
            this.currentQuestion = this.questions[randomizer(this.questions.length-1, 0)];
            this.showQuestion();
            this.createPlayerForms();
        };
        this.showQuestion = function() {
            $('.currentQuestion').text(this.currentQuestion.question);
        };
        this.createPlayerForms = function() {
            var wrapper = $('<div/>');
            for (var i = 0; i < playerCount; i++) {
                var playerForm = $('<form/>');
                var playerLabel = $('<h4/>').text('Player ' + (i + 1));
                playerForm.append(playerLabel);
                playerForm.addClass('playerForm');
                this.currentQuestion.answers.forEach(function(answer, index) {
                    playerForm.append(
                        $('<label>').text(answer.answer)
                        .append(
                            $('<input/>').attr({
                                value: answer.point,
                                name: 'player' + i,
                                type: 'radio'
                            })
                        )
                    );
                });
                wrapper.append(playerForm);
            }
            $('.playerForms').append(wrapper);
            $('.submit-answers').removeClass('hidden');
        };
        this.compareAnswers = function(playerAns) {
            var hunkAns = hunk[this.currentQuestion.type];
            for (var i = 0; i < playerCount; i++) {
                var diff = hunkAns - playerAns;
                if (diff === 0) {
                    return '5';
                } else if (Math.abs(diff) === 2 || Math.abs(diff) === 1) {
                    return '2';
                } else {
                    return '0';
                }
            }
            return spaces;
        };
    this.outcomeFromSteps = function(steps) {
        if(steps === '5') {
            return 'win';
        } else if(steps == '2'){
            return 'neutral';
        }
        return 'fail';
    };
    this.getSpecificResponse = function(outcome, point) {
      var answer = this.currentQuestion.answers.filter(function(answer){
          return answer.point === parseInt(point);
      });
        return answer[0].comebacks[outcome];
    };
    }; //End of GAME
    $('.submitPlayerCt').on('click', function() {
        var totalPlayers = $('input[type=radio]:checked').attr('value');
        console.log(totalPlayers);
        $('.playerCount').addClass('hidden');
        startGame(totalPlayers);
    });
    var startGame = function(playerCount) {
        var newHunk = new Hunk();
        var newGame = new Game(playerCount, newHunk);
        console.log(newHunk);
        $('.next-turn').removeClass('hidden');
        $('.next-turn').addClass('btn-success');
        $('.next-turn').addClass('btn');
        $('.next-turn').on('click', function() {
            $('.player-responses').text('');
            newGame.nextTurn();
        });
        $('.submit-answers').on('click', function() {
            $('.playerForm input[type=radio]:checked').each(function(index, playerAnswer) {
                var playerValue = playerAnswer.getAttribute('value');
                var stepsToMove = newGame.compareAnswers(playerValue);
        var outcome = newGame.outcomeFromSteps(stepsToMove);
        var playerResponse = newGame.getSpecificResponse(outcome, playerValue);
                var response = $('<div>/').text('player ' + (index + 1).toString() + ' moves ' + stepsToMove + ' places ' + '- The hunk\'s response: ' + playerResponse);
                $('.player-responses').append(response);
                $('.playerForms').text('');
                $('.currentQuestion').text('');
                $('.submit-answers').addClass('hidden');
            });
        });
    };
});

$(document).ready(function() {
    var Hunk = function() {
        this.movies = randomizer(12, 1);
        this.restaurants = randomizer(12, 1);
        this.hobbies = randomizer(12, 1);
    };

    var randomizer = function(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var Game = function(playerCount, hunk) {
        this.hunk = hunk;
        this.playerCount = playerCount;

        this.movies = [{
            "answer": "Human Centipede",
            "point": 1
        }, {
            "answer": "Saw",
            "point": 2
        }, {
            "answer": "Night of the Living Dead",
            "point": 3
        }, {
            "answer": "Mission Impossible",
            "point": 4
        }, {
            "answer": "Terminator",
            "point": 5
        }, {
            "answer": "Avengers",
            "point": 6
        }, {
            "answer": "The Jerk",
            "point": 7
        }, {
            "answer": "Back to Future",
            "point": 8
        }, {
            "answer": "Holy Grail",
            "point": 9
        }, {
            "answer": "10 Things I Hate About You",
            "point": 10
        }, {
            "answer": "Titantic",
            "point": 11
        }, {
            "answer": "Pride and Prejudice",
            "point": 12
        }];

        this.hobbies = [{
            "answer": "Cliff Diving",
            "point": 1
        }, {
            "answer": "Base Jumping",
            "point": 2
        }, {
            "answer": "Fire Juggling",
            "point": 3
        }, {
            "answer": "Parkour",
            "point": 4
        }, {
            "answer": "Scuba Diving",
            "point": 5
        }, {
            "answer": "Rock Climbing",
            "point": 6
        }, {
            "answer": "Martial Arts",
            "point": 7
        }, {
            "answer": "Horse Riding",
            "point": 8
        }, {
            "answer": "Biking",
            "point": 9
        }, {
            "answer": "Ceramics",
            "point": 10
        }, {
            "answer": "Reading",
            "point": 11
        }, {
            "answer": "Walking on a Beach",
            "point": 12
        }];

        this.restaurants = [{
            "answer": "Hot Dog Stand",
            "point": 1
        }, {
            "answer": "Fast Food",
            "point": 2
        }, {
            "answer": "Fried Chicken",
            "point": 3
        }, {
            "answer": "Wok the Line",
            "point": 4
        }, {
            "answer": "Cafe de Coffee",
            "point": 5
        }, {
            "answer": "Chili's",
            "point": 6
        }, {
            "answer": "Olive Garden",
            "point": 7
        }, {
            "answer": "Sushi Train",
            "point": 8
        }, {
            "answer": "Cheesecake Factory",
            "point": 9
        }, {
            "answer": "Burger Ups",
            "point": 10
        }, {
            "answer": "Flemmings",
            "point": 11
        }, {
            "answer": "Le Fancy",
            "point": 12
        }];

        this.iceCreamFlavors = [{
            "answer": "vanilla",
            "point": 1,
            "comebacks": {
                win: 'Wow how did you know! Vanilla is sooooooo tasty!',
                neutral: 'Yeah vanilla thats ok',
                fail: 'ohh i see! You think im boring! Screw you! (runs away crying)'
            }
        }, {
            "answer": "chocolate",
            "point": 2,
            "comebacks": {
                win: 'Wow how did you know! Vanilla is sooooooo tasty!',
                neutral: 'Yeah vanilla thats ok',
                fail: 'Chocolate. That is so generic.'
            }
        }, {
            "answer": "strawberry",
            "point": 3,
            "comebacks": {
                win: 'Strawberry is my favorite! How did you know!!!',
                neutral: 'Yeah, strawberry is fine. Just fine, really.',
                fail: 'Strawberry. I hate pink.'
            }
        }, {
            "answer": "neopolitan",
            "point": 4,
            "comebacks": {
                win: 'Yes! Finally someone who understands diversity.',
                neutral: 'Yeah, I only like one of the flavors really, but it is okay.',
                fail: 'This is so unamerican!'
            }
        }, {
            "answer": "chocolateChip",
            "point": 5,
            "comebacks": {
                win: 'Awesome. This is my favorite.',
                neutral: 'Yeah, having chips in ice cream is not that weird I guess.',
                fail: 'I do not even like chocolate chips in cookie form either.'
            }
        }, {
            "answer": "Mint Chocolate Chip",
            "point": 6,
            "comebacks": {
                win: 'Yes! Green ice cream is my jam.',
                neutral: 'It is okay',
                fail: 'Gross'
            }
        }, {
            "answer": "Banana",
            "point": 7,
            "comebacks": {
                win: 'This is my favorite fruit and in ice cream form!',
                neutral: 'It is all right',
                fail: 'I do not want my dessert and fruit mixed together!'
            }
        }, {
            "answer": "coffee",
            "point": 8,
            "comebacks": {
                win: 'I love coffee!',
                neutral: 'It is ok.',
                fail: 'You do not even know me!'
            }
        }, {
            "answer": "Cookies and Cream",
            "point": 9,
            "comebacks": {
                win: 'Wow! That is my favorite flavor!',
                neutral: 'It is okay.',
                fail: 'I am allergic to this!'
            }
        }, {
            "answer": "Rocky Road",
            "point": 10,
            "comebacks": {
                win: 'I love this flavor!',
                neutral: 'It is okay.',
                fail: 'Bad roads killed my father.'
            }
        }, {
            "answer": "Cookiedough",
            "point": 11,
            "comebacks": {
                win: 'How did you know that is my favorite flavor from childhood!',
                neutral: 'It is okay. It is a texture thing.',
                fail: 'Dough makes people sick.'
            }
        }, {
            "answer": "Chocolate Hazelnut",
            "point": 12,
            "comebacks": {
                win: 'This is the perfect flavor on EVERYTHING.',
                neutral: 'It is not terrible.',
                fail: 'Whoa, chocolate and nuts? I think we may moving a bit too fast...'
            }
        }];

        this.gifts = [{
            "answer": "Nothing",
            "point": 1,
            "comebacks": {
                win: 'Oh, I am so glad. I did not get you anything either.',
                neutral: 'Oh, so that is what we are doing. I just got you something small anyway.',
                fail: 'But, I thought we were doing something special!'
            }
        }, {
            "answer": "Chiapet",
            "point": 2,
            "comebacks": {
                win: 'Ch-ch-ch-Chia! Awesome.',
                neutral: 'Ah, a plant animal. It is ... unique.',
                fail: 'Um.. thanks?'
            }
        }, {
            "answer": "Poem",
            "point": 3,
            "comebacks": {
                win: 'Wow. That is so romantic',
                neutral: 'Ah, you wrote it yourself. I am touched you tried.',
                fail: 'What do I do this?'
            }
        }, {
            "answer": "Money",
            "point": 4,
            "comebacks": {
                win: 'I love money!',
                neutral: 'At least you gave me something.',
                fail: 'You think I can be bought?'
            }
        }, {
            "answer": "Beer",
            "point": 5,
            "comebacks": {
                win: 'Great. This will be perfect with the chicken wings that I have in my fridge.',
                neutral: 'I am not much of a drinker, but thanks.',
                fail: 'You calling me an alcoholic!'
            }
        }, {
            "answer": "Flowers",
            "point": 6,
            "comebacks": {
                win: 'That is the sweetest gift anyone has ever given me.',
                neutral: 'Oh, I think is considered a weed some countries.',
                fail: 'You killed these flowers! But all plants are sacred!'
            }
        }, {
            "answer": "Houseplant",
            "point": 7,
            "comebacks": {
                win: 'That is the sweetest gift anyone has ever given me.',
                neutral: 'Oh, I think is considered a weed some countries.',
                fail: 'You killed these flowers! But all plants are sacred!'
            }
        }, {
            "answer": "Puppy",
            "point": 8,
            "comebacks": {
                win: 'Yay!',
                neutral: 'Ok',
                fail: 'Bluh'
            }
        }, {
            "answer": "Cupcakes",
            "point": 9,
            "comebacks": {
                win: 'Yay!',
                neutral: 'Ok',
                fail: 'Bluh'
            }
        }, {
            "answer": "Painting",
            "point": 10,
            "comebacks": {
                win: 'Yay!',
                neutral: 'Ok',
                fail: 'Bluh'
            }
        }, {
            "answer": "Promise Ring",
            "point": 11,
            "comebacks": {
                win: 'Yay!',
                neutral: 'Ok',
                fail: 'Bluh'
            }
        }, {
            "answer": "Car",
            "point": 12,
            "comebacks": {
                win: 'Yay!',
                neutral: 'Ok',
                fail: 'Bluh'
            }
        }];


        this.questions = [{
            "question": "Your First Date: Where would you take your date to eat?",
            "answers": this.restaurants,
            "type": "restaurants"
        }, {
            "question": "Wanna hang out? What do you want to do?",
            "answers": this.hobbies,
            "type": "hobbies"
        }, {
            "question": "Let's go to a movie. What do you want to see?",
            "answers": this.movies,
            "type": "movies"
        }, {
            "question": "Your First Date: Where would you take your date to eat?",
            "answers": this.restaurants
        }, {
            "question": "Wanna hang out? What do you want to do?",
            "answers": this.hobbies
        }, {
            "question": "Let's go to a movie. What do you want to see?",
            "answers": this.movies
        }, {
            "question": "I feel like icecrean. What flavor would you like?",
            "answers": this.iceCreamFlavors
        }, {
            "question": "Let's get crazy. Let's go away for the weekend. Where would you like to go?",
            "answers": this.getaways
        }];

        this.nextTurn = function() {
            this.currentQuestion = this.questions[randomizer(this.questions.length, 0)];
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
                var response = $('<div>/').text('player ' + (index + 1).toString() + ' moves ' + stepsToMove + ' places');
                $('.player-responses').append(response);
                $('.playerForms').text('');
                $('.currentQuestion').text('');
                $('.submit-answers').addClass('hidden');
            });
        });
    };
});

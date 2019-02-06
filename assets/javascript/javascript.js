var currentQuestion = 0;
var chosenGame = 0;
var answer;
var time = 0;
var remainingQuestions;
var wins = 0;
var loses = 0;
var timeouts = 0;
var tvShowsGame = {
    questions: [
    {
        question: "What is the real first name of Ned Stark from Game of Thrones?",
        choice1: "Edward",
        choice2: "Derek",
        choice3: "Edgar",
        choice4: "Eddard",
        questionpic: "",
        winpicture: "assets/images/edStark.gif"
    },
    {
        question: "How many seasons does The Simpsons show have to this moment?",
        choice1: "30",
        choice2: "10",
        choice3: "54",
        choice4: "27",
        questionpic: "",
        winpicture: "assets/images/simpson.gif"
    },
    {
        question: "Everyone knows this show by it's disclaimer: 'The following program contains coarse language and due to its content it should not be viewed by anyone.'",
        choice1: "Family Guy",
        choice2: "South Park",
        choice3: "Rick and Morty",
        choice4: "Mr Pickles",
        questionpic: "",
        winpicture: "assets/images/spark.gif"
    },
    {
        question: "Because of mentioning it in a famous TV Show 'Rick and Morty', McDonald's had to bring this product back",
        choice1: "McHot Dog",
        choice2: "Super-Size Fries",
        choice3: "Mighty Wings",
        choice4: "Szechuan Sauce",
        questionpic: "",
        winpicture: "assets/images/szechuan.gif"
    },
    {
        question: "This fake-documentary comedy TV show got 42 Primetime Emmy Awards nominations in 2005-2013",
        choice1: "Parks and Recreation",
        choice2: "The Office",
        choice3: "Borat",
        choice4: "Supernatural",
        questionpic: "",
        winpicture: "assets/images/theoffice.gif"
    },
    {
        question: "How old is Jim Parsons, who played Sheldon Cooper in 'Big Bang theory'?",
        choice1: "31",
        choice2: "25",
        choice3: "45",
        choice4: "57",
        questionpic: "",
        winpicture: "assets/images/bbt.gif"
    },
    {
        question: "The series depicts the dysfunctional family of Frank Gallagher, a single father raising six children. He spends his days drunk or in search of misadventures, and his children learn to take care of themselves.",
        choice1: "Snow White and the Seven Dwarfs",
        choice2: "6 Little McGhees",
        choice3: "Shameless",
        choice4: "Full house",
        questionpic: "",
        winpicture: "assets/images/shameless.gif"
    },
    {
        question: "What's the most popular show of 2018 in the world?",
        choice1: "The Walking Dead",
        choice2: "Pretty Little Liars",
        choice3: "Stranger Things",
        choice4: "Game of Thrones",
        questionpic: "",
        winpicture: "assets/images/gameot.gif"
    },
    {
        question: "How does tv show 'House' end?",
        choice1: "Doctor House dies",
        choice2: "House gets married",
        choice3: "House fakes his own death",
        choice4: "House gets old and lives a long happy life",
        questionpic: "",
        winpicture: "assets/images/house.gif"
    },
    {
        question: "This actor's character of Jonathan Irons comes to life in a computer game 'Call of Duty: Advanced Warfare'",
        choice1: "Arnold Schwarzenegger",
        choice2: "David Dukhovny",
        choice3: "Tom Hardy",
        choice4: "Kevin Spacey",
        questionpic: "",
        winpicture: "assets/images/spacey.gif"
    }
],
    correctAnswers: ["Eddard", "30","South Park","Szechuan Sauce","The Office", "45","Shameless","Game of Thrones","House fakes his own death","Kevin Spacey"],
    css: "",
    title: ""
};
var gamesGame = {
    questions: [
    {
        question: "What year did Super Mario Bros. game come out",
        choice1: "1975",
        choice2: "1985",
        choice3: "1995",
        choice4: "1991",
        questionpic: "",
        winpicture: "assets/images/mario.gif"
    },
    {
        question: "Main character of this apocalyptic shooter game is famous for saying:\n \"Hail to the king, Baby!\" when reloading his shotgun.",
        choice1: "Fallout 3",
        choice2: "Grand Theft Auto: Vice City",
        choice3: "Duke Nukem",
        choice4: "Dota",
        questionpic: "",
        winpicture: "assets/images/duke.gif"
    },
    {
        question: "Fans of this game series, which made Valve famous, spent already 12 years waiting for the next game",
        choice1: "The Legend of Zelda",
        choice2: "Gothic",
        choice3: "Half-life",
        choice4: "Counter-strike",
        questionpic: "",
        winpicture: "assets/images/half-life.gif"
    },
    {
        question: "This streaming platform, bought by Amazon in 2014 for $970, has more than 15 million average daily active users",
        choice1: "Twich",
        choice2: "Youtube",
        choice3: "Vimeo",
        choice4: "Facebook",
        questionpic: "",
        winpicture: "assets/images/duke.gif"
    },
    {
        question: "This game publisher, who published Skyrim previously, is hated by 90% of it's fans \n for their latest multiplayer release",
        choice1: "Valve",
        choice2: "Grand Theft Auto: Vice City",
        choice3: "Duke Nukem",
        choice4: "Bethesda",
        questionpic: "",
        winpicture: "assets/images/fallout.gif"
    }
],
    correctAnswers: ["1985", "Duke Nukem", "Half-life", "Twich", "Bethesda", ],
    css: "",
    title: ""
};
var carsGame = {
    questions: [
    {
        question: "What model of Lamborghini is the most expensive?",
        choice2: "Lamborghini Urus",
        choice3: "Lamborghini Huracan",
        choice1: "Lamborghini Veneno",
        choice4: "Lamborghini Aventador",
        questionpic: "",
        winpicture: "assets/images/lambo.gif"
    },
    {
        question: "This German auto brand is known for that most of it's cars are traditionally rear-wheel drive",
        choice1: "Mercedes",
        choice2: "BMW",
        choice3: "Audi",
        choice4: "Volkswagen",
        questionpic: "",
        winpicture: "assets/images/bmw.gif"
    }
],
    correctAnswers: ["Lamborghini Veneno", "BMW",],
    css: "",
    title: ""
};
var historyGame = {
    questions: [
    {
        question: "Which state officially joined USA in 1959?",
        choice1: "Alaska",
        choice2: "New Jersey",
        choice3: "Hawaii",
        choice4: "Costa Rica",
        questionpic: "",
        winpicture: "assets/images/hawaii.gif"
    },
    {
        question: "Telephone invention is officially dated by this year",
        choice1: "1811",
        choice2: "1925",
        choice4: "1876",
        choice3: "1569",
        questionpic: "",
        winpicture: "assets/images/telephone.gif"
    },
    {
        question: "Who was the first president of USA?",
        choice2: "Abraham Lincoln",
        choice1: "George Washington",
        choice3: "Theodore Roosevelt",
        choice4: "Thomas Jefferson",
        questionpic: "",
        winpicture: "https://media2.giphy.com/media/xUPGcnhop8QD7HHztS/giphy.gif?cid=3640f6095c0dd46f4f746b38637b5e74"
    },
    {
        question: "Who was the second president of USA?",
        choice2: "Thomas Jefferson",
        choice1: "John Adams",
        choice3: "Martin Van Buren",
        choice4: "John F. Kennedy",
        questionpic: "",
        winpicture: "https://media1.giphy.com/media/3o7btZSWGqBFMJfPcQ/200.webp?cid=3640f6095c0ddd7b2e696c7163640b62"
    },
],
    correctAnswers: ["Hawaii", "1876", "George Washington", "John Adams", ],
    css: "",
    title: ""
};
var loseImages = [
        "assets/images/fails/fail1.gif",
        "assets/images/fails/fail2.gif",
        "assets/images/fails/fail3.gif",
        "https://media0.giphy.com/media/RDuF5FVTSyzy8/giphy.gif?cid=3640f6095c0dc69941377043326fc799",
        "https://media2.giphy.com/media/qqoaFu5Xsb3ji/giphy.gif?cid=3640f6095c0dc6d830767937736c69f6",
        "https://media2.giphy.com/media/xTiTnooneW4SYfch8Y/giphy.gif?cid=3640f6095c0dc6ea2e61484336fa7929",
        "http://www.reactiongifs.com/wp-content/uploads/2012/12/captain-america.gif",
        "https://media3.giphy.com/media/26xBFWciE9FO5Idqg/giphy.gif?cid=3640f6095c0dc7bd642e3639419cb51b",
        "assets/images/fails/fail4.gif",
        "assets/images/fails/fail5.gif",
        "assets/images/fails/fail6.gif"
    ];
var linearGradients = [
    "-webkit-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%)",
    "-webkit-linear-gradient(45deg, rgba(96,236,20) 0%, rgba(236,158,41) 33%, rgba(96,236,20) 66%, rgba(236,158,41) 100%)",
    "-webkit-linear-gradient(45deg, rgba(59,0,236) 0%, rgba(232,236,0) 33%, rgba(59,0,236) 66%, rgba(232,236,0) 100%)",
    "-webkit-linear-gradient(45deg, rgba(236,4,0) 0%, rgba(30,88,30) 33%, rgba(236,4,0) 66%, rgba(30,88,30) 100%)",
    "-webkit-linear-gradient(45deg, rgba(48,252,255) 0%, rgba(120,117,126) 33%, rgba(48,252,255) 66%, rgba(120,117,126) 100%)",
    "-webkit-linear-gradient(45deg, rgba(255,0,72) 0%, rgba(188,184,196) 33%, rgba(255,0,72) 66%, rgba(188,184,196) 100%)",
    "-webkit-linear-gradient(45deg, rgba(248,255,255) 0%, rgba(180,74,196) 33%, rgba(248,255,255) 66%, rgba(180,74,196) 100%)",
    "-webkit-linear-gradient(45deg, rgba(255,255,255) 0%, rgba(255,255,255) 33%, rgba(255,255,255) 66%, rgba(255,255,255) 100%)",
    "url(https://www.publicdomainpictures.net/pictures/200000/nahled/american-flag-background-1477488261IIY.jpg)",
    "url(https://i.pinimg.com/originals/f8/a3/b9/f8a3b9852df2a9b24ca019401a56068c.jpg)",
    "url(https://static9.depositphotos.com/1000123/1183/i/450/depositphotos_11831225-stock-photo-deep-space-abstract-natural-backgrounds.jpg)",
    "url(http://hirafoundation.com/wp-content/uploads/2013/05/the_sky.jpg)",
    "url(https://inthelooppodcast.com/wp-content/uploads/2014/10/mummybanner.jpg)",
    "url(https://png.pngtree.com/thumb_back/fh260/back_pic/03/62/30/9157aa94e693d90.jpg)",
    "url(https://png.pngtree.com/thumb_back/fh260/back_pic/02/50/62/56577e16e23ea94.jpg)",
    "url(https://cdn.pixabay.com/photo/2018/02/07/12/35/wood-3136982_960_720.jpg)",
    "url(https://media.istockphoto.com/photos/gold-background-picture-id638678352?k=6&m=638678352&s=612x612&w=0&h=MP6uaL9IMrFSo1jSVPoM5EqV0AikFNxicQcbxD_qayo=)",
    "url(https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277__340.jpg)"
]

$(document).ready(function() {
    //Dynamic css functions
    $(document).on('click', '#trivia', function() {
        $('#trivia').css('background', linearGradients[Math.floor(Math.random() * linearGradients.length)])
    });
    $(document).on('mouseover', '#trivia', function() {
        $('#trivia').css('background', linearGradients[Math.floor(Math.random() * linearGradients.length)])
    });
    $(document).on('mouseout', '#trivia', function() {
        $('#trivia').css('background', linearGradients[7])
    });
    $(document).on('mouseover', '.btn-option', function() {
             $(this).css("border", "2px red solid").css("color", "red");
            });
    $(document).on('mouseout', '.btn-option', function() {
            $(this).css("border", "2px pink solid").css("color", "white");
            });
    $(document).on('mouseout', '.btn-quit', function() {
        $(this).css("border", "none").css("color", "white").css("backgroundcolor", "black");
        });
    //INTRO PART
    //Onclick for quit button
    $(document).on('click', '.btn-quit', function() {
        window.open('', '_self').close();
    })
    //On click for start button
    $(document).on('click', '#choice', function(){
        $('#choice').animate({"margin-top": "-50px", opacity: '0'},1000);
        $('.btn-quit').animate({"margin-top": "-50px", opacity: '0'},1000);
        setTimeout(function() {
            $('#choice').empty();
            //HAT 
            $('#hatspot').append('<img id="hat" style="opacity:0; height:320px;width:100%; margin-top:70px" src="assets/images/hat.png">');
            $('#hat').animate({opacity: '1'},1000);
            for( i=0;i<4;i++) setTimeout( function() {
                $('#hat').circulate({
                    speed: 300,
                    height: Math.floor(Math.random()*200) - 70,
                    width: Math.floor(Math.random()*700) - 100
                });
                setInterval( function() {
                    $('#hat').css("filter", "brightness(2)")
                },1100);
                setInterval( function() {
                    $('#hat').css("filter", "brightness(1)")
                },1150);
            },1000)
        }, 2000);
        setTimeout(function() {
            $('#hatspot').empty();
            //EXPLOSION
            $('#hatspot').append('<img id="explosion" style="height:320px;width:100%; margin-top:70px" src="assets/images/explosion.gif">');    
        },8500)
        setTimeout(function() {
            $('#hatspot').empty();
            //OPTIONS AND GIF IN THE CENTER
            //For this part I used an Open-Source(https://css-tricks.com/circulate/) plugin called Circulate
            $('#hatspot').append('<img id="options" style="height:320px;width:100%; margin-top:70px" src="assets/images/options.gif">');
        },9200);
        setTimeout(function() {
            $('#theme1').append('<button class="btn btn-option" value="tvShowsGame" id="topic1" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">TV Shows</button>')  
        },4100);
        setTimeout(function() {
            $('#theme2').append('<button class="btn btn-option" value="gamesGame" id="topic2" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Games</button>')  
        },5200);
        setTimeout(function() {
            $('#theme3').append('<button class="btn btn-option" value="carsGame" id="topic3" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Cars</button>')  
        },6300);
        setTimeout(function() {
            $('#theme4').append('<button class="btn btn-option" value="historyGame" id="topic4" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">History</button>')  
        },7400);
        })
        var template = $('#gametemplate').html();
        //Choose the game theme
        $(document).on('click', '.btn-option', function() {
            $('.start').empty().html(template);
            chosenGame = eval($(this).attr("value"));
            startGame()
           })
        //Submit a question
        $(document).on('click', '.submitter', function() {  
            checkAnswer();
            remainingQuestions--;
            currentQuestion++;
            clearInterval(tictac);
            $('.inputs').prop('checked', false);
            next = setTimeout(nextQuestion, 4000)
        })
        var menuTemplate = $('#menuTemplate').html()
        //Restart button code
        $(document).on('click', '.restartBtn', function() {
            var highestTimeoutId = setTimeout(";");                 //This part of code is taken from
            for (var i = 0 ; i < highestTimeoutId ; i++) {          //this StackOverflow topic(https://stackoverflow.com/questions/3141064/how-to-stop-all-timeouts-and-intervals-using-javascript/8524313)
            clearTimeout(i);                                        //And it clears all the intervals on the page(prevents from double appending of the option-buttons) 
            }                                                       //if the "Restart" button is pressed right after the "Start Game" button
            $('.start').empty().html(menuTemplate);
            $('#theme1').append('<button class="btn btn-option" value="tvShowsGame" id="topic1" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">TV Shows</button>');
            $('#theme2').append('<button class="btn btn-option" value="gamesGame" id="topic2" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Games</button>');
            $('#theme3').append('<button class="btn btn-option" value="carsGame" id="topic3" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Cars</button>');
            $('#theme4').append('<button class="btn btn-option" value="historyGame" id="topic4" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">History</button>');
            $('#choice, .btn-quit').hide();
            currentQuestion = 0;
            clearInterval(tictac);
        })
        //Main menu button code
        $(document).on('click', '#main-menu', function() {
            var highestTimeoutId = setTimeout(";");                 //This part of code is taken from
            for (var i = 0 ; i < highestTimeoutId ; i++) {          //this StackOverflow topic(https://stackoverflow.com/questions/3141064/how-to-stop-all-timeouts-and-intervals-using-javascript/8524313)
            clearTimeout(i);                                        //And it clears all the intervals on the page(prevents from double appending of the option-buttons) 
            }                                                       //if the "Main-menu" button is pressed right after the "Start Game" button
            $('.start').empty().html(menuTemplate);
            currentQuestion = 0;
            clearInterval(tictac);
        })
        //Radio checkboxes are given property of "checked" once user clicks on it
        $(document).on('click', '#input1', function() {
            $(this).prop('checked', true);
            inputCatcher();
        })
        $(document).on('click', '#input2', function() {
            $(this).prop('checked', true);
            inputCatcher();
        })
        $(document).on('click', '#input3', function() {
            $(this).prop('checked', true);
            inputCatcher();
        })
        $(document).on('click', '#input4', function() {
            $(this).prop('checked', true);
            inputCatcher();
        })
        //On gif click skip the animation and proceed to the next question
        $(document).on('click', '.imageboard', function() {
            clearInterval(next)
            nextQuestion()
        });
    })
    function startGame() {
        currentQuestion = 0;
        time = 0;
        wins = 0;
        loses = 0;
        timeouts = 0;
        remainingQuestions = chosenGame.questions.length;
        $("#timer").html("You have <span id=\"time\">15</span> seconds left");
        console.log(remainingQuestions);
        nextQuestion();
    }

    function nextQuestion() {
        if (remainingQuestions == 0) {
            gameOver();
        }
        else {
        $('.imageboard').hide();
        $('.submitter, #answers1, #answers2, #timer').show();    
        $('#question').html(chosenGame.questions[currentQuestion].question);
        $('#answer1').html(chosenGame.questions[currentQuestion].choice1);
        $('#answer2').html(chosenGame.questions[currentQuestion].choice2);
        $('#answer3').html(chosenGame.questions[currentQuestion].choice3);
        $('#answer4').html(chosenGame.questions[currentQuestion].choice4);
        timerStart();
        }
    }
    function inputCatcher() {
        if($('#input1').prop('checked')) {
            answer = chosenGame.questions[currentQuestion].choice1
        };
        if($('#input2').prop('checked')) {
            answer = chosenGame.questions[currentQuestion].choice2
        };
        if($('#input3').prop('checked')) {
            answer = chosenGame.questions[currentQuestion].choice3
        };
        if($('#input4').prop('checked')) {
            answer = chosenGame.questions[currentQuestion].choice4
        };
    }
    function checkAnswer() {
        if ((chosenGame.correctAnswers).includes(answer)) {
            $('#question').html('<h1>Yay! This is a correct answer!</h1>');
            $('#timer, #answers1, #answers2, .submitter').hide();
            $('.imageboard').html("<img style=\"width:300px\" class=\"mx-auto\" id=\"winimage\" src=" + chosenGame.questions[currentQuestion].winpicture + ">").show();
            wins++;
        }
        else {
            loses++;
            $('#question').html('<h1>This is a wrong answer! The correct answer was ' + chosenGame.correctAnswers[currentQuestion] + '</h1>');
            $('#timer, #answers1, #answers2, .submitter').hide();
            $('.imageboard').html("<img style=\"width:300px\" class=\"mx-auto\" id=\"loseimage\" src=" + loseImages[Math.floor(Math.random() * loseImages.length)] + ">").show();
        }
    }
    
    function gameOver() {
        $('#question').html('<h1>Game is over</h1>');
        $('#timer, .submitter, .imagerow').hide();
        $('.game').append('</br><div  class="row" id="answers3"></div>');
        $('#answers1, #answers2').show();
        $('#answers1').html('<p style="text-align:center; width:100%">Correct answers: ' + wins + '</p>');
        $('#answers2').html('<p style="text-align:center; width:100%">Wrong answers: ' + loses + '</p>');
        $('#answers3').html('<p style="text-align:center; width:100%">Timed out: '+ timeouts + '</p>');
        $('#answers3').append("<button style=\"margin: 0 auto\" class=\"restartBtn\">Pick another topic</button>")
        
    }
    function restoreTemplate() {
        $('.start').html(template)
    }
    function timerStart() {
        time = 15;
        $('#time').html(time);
        tictac = setInterval(timeCount, 1000);
    }

    function timeCount() {
        if(time > 0) {
            time--;
            $('#time').html(time);
        }
        if (time === 0) {
            $('#timer, #answers1, #answers2, .submitter').hide();
            $('#question').html('<h1>Time is up! The correct answer was ' + chosenGame.correctAnswers[currentQuestion] + '</h1>');
            $('.imageboard').html("<img style=\"width:300px\" class=\"mx-auto\" id=\"loseimage\" src=" + loseImages[Math.floor(Math.random() * loseImages.length)] + ">").show();
            $('.inputs').prop('checked', false);
            clearInterval(tictac);
            timeouts++;
            setTimeout(nextQuestion, 4000);
            currentQuestion++;
            remainingQuestions--;
        }
    }
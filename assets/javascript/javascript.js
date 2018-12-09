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
    }
],
    correctAnswers: ["Eddard", "30",],
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
        choice4: "Half-Life",
        questionpic: "",
        winpicture: "assets/images/duke.gif"
    }
],
    correctAnswers: ["1985", "Duke Nukem",],
    css: "",
    title: ""
}
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
}
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
    }
],
    correctAnswers: ["Hawaii", "1876",],
    css: "",
    title: ""
}
var loseImages = [
        "assets/images/fails/fail1.gif",
        "assets/images/fails/fail2.gif",
        "assets/images/fails/fail3.gif"
    ];

$(document).ready(function() {
    $(document).on('mouseover', '.btn-option', function() {
             $(this).css("border", "2px red solid").css("color", "red");
            })
    $(document).on('mouseout', '.btn-option', function() {
            $(this).css("border", "2px pink solid").css("color", "pink");
            })
    //INTRO PART
    $(document).on('click', '#choice', function(){
        $('#choice').animate({"margin-top": "-50px", opacity: '0'},1000);
        setTimeout(function() {
            $('#choice').empty()
            //HAT 
            $('#hatspot').append('<img id="hat" style="opacity:0; height:320px;width:100%; margin-top:70px" src="assets/images/hat.png">')
            $('#hat').animate({opacity: '1'},1000);
            for( i=0;i<4;i++) setTimeout( function() {
                $('#hat').circulate({
                    speed: 300,
                    height: Math.floor(Math.random()*200) - 70,
                    width: Math.floor(Math.random()*700) - 100
                });
                setInterval( function() {
                    $('#hat').css("filter", "brightness(2)")
                },1100)
                setInterval( function() {
                    $('#hat').css("filter", "brightness(1)")
                },1150)
            },1000)
        }, 2000)
        setTimeout(function() {
            $('#hatspot').empty()
            //EXPLOSION
            $('#hatspot').append('<img id="explosion" style="height:320px;width:100%; margin-top:70px" src="assets/images/explosion.gif">')    
        },8500)
        setTimeout(function() {
            $('#hatspot').empty()
            //OPTIONS AND GIF IN THE CENTER
            $('#hatspot').append('<img id="options" style="height:320px;width:100%; margin-top:70px" src="assets/images/options.gif">')
        },9200)
        setTimeout(function() {
            $('#theme1').append('<button class="btn btn-option" value="tvShowsGame" id="topic1" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">TV Shows</button>')  
        },4100)
        setTimeout(function() {
            $('#theme2').append('<button class="btn btn-option" value="gamesGame" id="topic2" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Games</button>')  
        },5200)
        setTimeout(function() {
            $('#theme3').append('<button class="btn btn-option" value="carsGame" id="topic3" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Cars</button>')  
        },6300)
        setTimeout(function() {
            $('#theme4').append('<button class="btn btn-option" value="historyGame" id="topic4" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">History</button>')  
        },7400)
        })
        var template = $('#gametemplate').html();
        //Choose the game theme
        $(document).on('click', '.btn-option', function() {
            $('.start').empty();
            chosenGame = eval($(this).attr("value"))
            $('.start').html(template);
            startGame()
           })
        //Submit a question
        $(document).on('click', '.submitter', function() {
            checkAnswer()
            remainingQuestions--;
            currentQuestion++
            clearInterval(tictac);
            $('.inputs').prop('checked', false)
            setTimeout(nextQuestion, 4000)
        })
        var menuTemplate = $('#menuTemplate').html()
        $(document).on('click', '#restart', function() {
            $('.start').empty();
            $('.start').html(menuTemplate);
            $('#theme1').append('<button class="btn btn-option" value="tvShowsGame" id="topic1" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">TV Shows</button>')
            $('#theme2').append('<button class="btn btn-option" value="gamesGame" id="topic2" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Games</button>')
            $('#theme3').append('<button class="btn btn-option" value="carsGame" id="topic3" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Cars</button>')
            $('#theme4').append('<button class="btn btn-option" value="historyGame" id="topic4" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">History</button>')
            $('#choice').hide()
            currentQuestion = 0
            clearInterval(tictac);
        })
        $(document).on('click', '#main-menu', function() {
            $('.start').empty();
            $('.start').html(menuTemplate);
           
            currentQuestion = 0
            clearInterval(tictac);
        })
        //Radio checkboxes are given property of "checked" once user clicks on it
        $(document).on('click', '#input1', function() {
            $(this).prop('checked', true)
            inputCatcher()
        })
        $(document).on('click', '#input2', function() {
            $(this).prop('checked', true)
            inputCatcher()
        })
        $(document).on('click', '#input3', function() {
            $(this).prop('checked', true)
            inputCatcher()
        })
        $(document).on('click', '#input4', function() {
            $(this).prop('checked', true)
            inputCatcher()
        })
    })

    function startGame() {
        currentQuestion = 0;
        time = 0;
        wins = 0;
        loses = 0;
        timeouts = 0;
        remainingQuestions = chosenGame.questions.length
        $("#timer").html("You have <span id=\"time\">15</span> seconds left");
        console.log(remainingQuestions)
        nextQuestion()
    }

    function nextQuestion() {
        if (remainingQuestions == 0) {
            gameOver();
        }
        else {
        $('.imageboard').hide()
        $('#timer').show()
        $('#answers1').show()
        $('#answers2').show()
        $('.submitter').show()    
        $('#question').html(chosenGame.questions[currentQuestion].question);
        $('#answer1').html(chosenGame.questions[currentQuestion].choice1)
        $('#answer2').html(chosenGame.questions[currentQuestion].choice2)
        $('#answer3').html(chosenGame.questions[currentQuestion].choice3)
        $('#answer4').html(chosenGame.questions[currentQuestion].choice4)
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
        }
    }
    function checkAnswer() {
        if ((chosenGame.correctAnswers).includes(answer)) {
            $('#question').html('<h1>Yay! This is a correct answer!</h1>');
            $('#timer').hide()
            $('#answers1').hide()
            $('#answers2').hide()
            $('.submitter').hide()
            $('.imageboard').html("<img style=\"width:300px\" class=\"mx-auto\" id=\"winimage\" src=" + chosenGame.questions[currentQuestion].winpicture + ">").show()
            wins++
        }
        else {
            loses++
            $('#question').html('<h1>This is a wrong answer! The correct answer was ' + chosenGame.correctAnswers[currentQuestion] + '</h1>');
            $('#timer').hide()
            $('#answers1').hide()
            $('#answers2').hide()
            $('.submitter').hide()
            $('.imageboard').html("<img style=\"width:300px\" class=\"mx-auto\" id=\"loseimage\" src=" + loseImages[Math.floor(Math.random() * loseImages.length)] + ">").show()
        }
    }
    
    function gameOver() {
        $('#question').html('<h1>Game is over</h1>');
        $('#timer').empty()
        $('.game').append('</br><div  class="row" id="answers3"></div>')
        $('#answers1').show()
        $('#answers2').show()
        $('#answers1').html('<p style="text-align:center; width:100%">Correct answers: ' + wins + '</p>')
        $('#answers2').html('<p style="text-align:center; width:100%">Wrong answers: ' + loses + '</p>')
        $('#answers3').html('<p style="text-align:center; width:100%">Timed out: '+ timeouts + '</p>')
        $('.submitter').hide()
        $('.imagerow').hide()
    }
    function restoreTemplate() {
        $('.start').html(template)
    }
    function timerStart() {
        time = 15
        $('#time').html(time)
        tictac = setInterval(timeCount, 1000)
    }

    function timeCount() {
        if(time > 0) {
            time--;
            $('#time').html(time)
        }
        if (time === 0) {
            $('#timer').hide()
            $('#answers1').hide()
            $('#answers2').hide()
            $('.submitter').hide()
            $('#question').html('<h1>Time is up! The correct answer was ' + chosenGame.correctAnswers[currentQuestion] + '</h1>');
            $('.imageboard').html("<img style=\"width:300px\" class=\"mx-auto\" id=\"loseimage\" src=" + loseImages[Math.floor(Math.random() * loseImages.length)] + ">").show()
            $('.inputs').prop('checked', false)
            clearInterval(tictac);
            timeouts++;
            setTimeout(nextQuestion, 4000);
            currentQuestion++
            remainingQuestions--
        }
    }
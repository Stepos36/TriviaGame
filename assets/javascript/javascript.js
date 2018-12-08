var currentQuestion = 0;
var chosenGame = 0;
var time = 0;
var remainingQuestions;
var tvShowsGame = {
    questions: [
    {
        question: "What is the real first name of Ned Stark from Game of Thrones?",
        choice1: "Edward",
        choice2: "Derek",
        choice3: "Edgar",
        choice4: "Eddard",
        questionpic: "",
        winpicture: ""
    },
    {
        question: "How many seasons does The Simpsons show have to this moment?",
        choice1: "30",
        choice2: "10",
        choice3: "54",
        choice4: "27",
        questionpic: "",
        winpicture: ""
    }
],
    correctAnswers: ["Eddard", "30",],
    css: "",
    title: ""
}


$(document).ready(function() {
    $(document).on('mouseover', '.btn-option', function() {
             $(this).css("border", "2px red solid").css("color", "red");
            })
    $(document).on('mouseout', '.btn-option', function() {
            $(this).css("border", "2px pink solid").css("color", "pink");
            })

    //INTRO PART
    $('#choice').click(function(){
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
            $('#theme2').append('<button class="btn btn-option" id="topic2" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Games</button>')  
        },5200)
        setTimeout(function() {
            $('#theme3').append('<button class="btn btn-option" id="topic3" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Cars</button>')  
        },6300)
        setTimeout(function() {
            $('#theme4').append('<button class="btn btn-option" id="topic4" style="background-color: black;color:white;font-size:30px;padding:3px; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">Sports</button>')  
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
            currentQuestion++;
            remainingQuestions--;
            clearInterval(tictac);
            $('.inputs').prop('checked', false)
            setTimeout(nextQuestion, 4000)
        })
    })

    function startGame() {
        remainingQuestions = chosenGame.questions.length
        $("#timer").html("You have <span id=\"time\">15</span> seconds left");
        console.log(remainingQuestions)
        nextQuestion()
    }

    function nextQuestion() {
        $('#question').html(chosenGame.questions[currentQuestion].question);
        $('#answer1').html(chosenGame.questions[currentQuestion].choice1);
        $('#answer2').html(chosenGame.questions[currentQuestion].choice2);
        $('#answer3').html(chosenGame.questions[currentQuestion].choice3);
        $('#answer4').html(chosenGame.questions[currentQuestion].choice4)
        timerStart();
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
    }
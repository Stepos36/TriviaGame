$(document).ready(function() {
    //INTRO PART
    $('#choice').click(function(){
        $('#choice').animate({"margin-top": "-50px", opacity: '0'},1000);
        setTimeout(function() {
            $('#choice').empty()
            $('#hatspot').append('<img id="hat" style="opacity:0; height:320px;width:100%; margin-top:70px" src="assets/images/hat.png">')
            $('#hat').animate({opacity: '1'},1000);
            for( i=0;i<4;i++) setTimeout( function() {
                $('#hat').circulate({
                    speed: 300,
                    height: Math.floor(Math.random()*300) - 70,
                    width: Math.floor(Math.random()*300) - 100
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
            $('#hatspot').append('<img id="explosion" style="height:320px;width:100%; margin-top:70px" src="assets/images/explosion.gif">')    
        },8500)
        setTimeout(function() {
            $('#hatspot').empty()
            $('#hatspot').append('<img id="options" style="height:320px;width:100%; margin-top:70px" src="assets/images/options.gif">')
        },9200)
        setTimeout(function() {
            $('#theme1').append('<button class="btn btn-option" id="topic1" style="background-color: black;color:white; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">1</button>')  
        },4100)
        setTimeout(function() {
            $('#theme2').append('<button class="btn btn-option" id="topic2" style="background-color: black;color:white; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">2</button>')  
        },5200)
        setTimeout(function() {
            $('#theme3').append('<button class="btn btn-option" id="topic3" style="background-color: black;color:white; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">3</button>')  
        },6300)
        setTimeout(function() {
            $('#theme4').append('<button class="btn btn-option" id="topic4" style="background-color: black;color:white; border:2px pink solid; width:150px;height:50px; border-radius:20px; margin-top:30px">4</button>')  
        },7400)
        })
        setTimeout(function() {
            $(".btn-option").mouseover(function() {
                $(this).css("border", "2px red solid").css("color", "red");
            })
        },9000)
        setTimeout(function() {
            $(".btn-option").mouseout(function(){
                $(this).css("border", "2px pink solid").css("color", "white");
            })
        },9000)
        
    
        
    })
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var index = 0;
var started = false;



$(document).keypress(function() {
    started = true;
    if(started == true)
        nextSequence();
});

$(".btn").click(function(){
    playSound(this.id);
    jhatka(this);
    if(started == true){
        handler(this);
        checkAnswer(index);
    }
}); 

function checkAnswer(currentLevel){
    if(gamePattern[index] == userClickedPattern[index]){{}

    }
    else{
        playSound("wrong");
        gameOver();
    }
    index++;

    if(index == gamePattern.length){
    setTimeout(function() {
        userClickedPattern = [];
        index = 0;
        nextSequence();
    }, 1000);
    }
}

function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    function randomColor(){
        var rn = Math.random()*4;
        rn = Math.floor(rn);
        return buttonColors[rn];
    }
    
    var randomChosenColor = randomColor();
    gamePattern.push(randomChosenColor);
    
    setTimeout(function() {
        $("#"+randomChosenColor).addClass("pressed");
        var audio = new Audio("sounds/"+randomChosenColor+".mp3");
        audio.play();
    }, 500);
    setTimeout(function() {
        $("#"+randomChosenColor).removeClass("pressed");
    }, 600);
}

function playSound(s){
    var audio = new Audio("sounds/"+s+".mp3");
    audio.play();
}

function handler(t){
    userClickedPattern.push(t.id);
} 

function jhatka(t){
    $("#"+t.id).addClass("pressed");
    setTimeout(function() {
        $("#"+t.id).removeClass("pressed");
    }, 100);
}

function gameOver(){
    $("body").addClass("game-over");
    $("#level-title").text("Game-Over, press any key to continue.");
    $("#level-title").css("color", "red");
    started = false;
    $(document).keypress(function() {
        location.reload();
    });
}
var crystals = {

    0: {value: 0},

    1: {value: 0},

    2: {value: 0},

    3: {value: 0}


}


var targetScore = 0;
var currentScore = 0;
var crystalValue = 0;
var wins = 0;
var losses = 0;

function initializeGame() {
    
    targetScore = Math.floor(Math.random() * 102) + 19;
    currentScore = 0;
    
    $("#targetScore").text(targetScore);
    $("#score").text(currentScore);
    $("#score").css("color", "black");

    
    
   for(var i=0; i<4; i++){
        
        var target = crystals[i];
        target.value = Math.floor(Math.random() * 12) + 1;
        console.log(target.value);
    
    }

    $("#crystal-0").attr("value", crystals[0].value);
    $("#crystal-1").attr("value", crystals[1].value);
    $("#crystal-2").attr("value", crystals[2].value);
    $("#crystal-3").attr("value", crystals[3].value);
    
   
}

function winAlert() {

    wins++;
    $("#wins").text("Wins: " + wins);

    setTimeout(function() { alert("Congratulations! You Win!"); }, 5);

       // Plays win sound

  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/sound/chime.mp3");
  audioElement.play();
  console.log("audio win");

    
    setTimeout(function() {initializeGame(); }, 10);
}

function lossAlert() {

    losses++;
    $("#losses").text("Losses: " + losses);
    $("#score").css("color", "red");

    setTimeout(function() { alert("Sorry, You Lose, Try Again!"); }, 5);

    setTimeout(function() {initializeGame(); }, 10);
}

$( document ).ready(function main() {


    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    
    initializeGame();

    $(".crystalButton").on("click", function(){

        var btnValue = this.value;
        btnValue = parseInt(btnValue);

        currentScore += btnValue;
        $("#score").text(currentScore);

        
        
        if(currentScore == targetScore){

            winAlert()

        

        }else if(currentScore > targetScore){

            lossAlert()


        }else{}


       



});












});
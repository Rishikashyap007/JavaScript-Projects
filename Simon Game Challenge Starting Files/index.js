let buttoncolors = ['red' , 'blue' , 'green' , 'yellow']
let gamePattren = [];
let userClickedPattern =[];

let level = 0
const playgame =false;


$(document).keypress(function(e){
  console.log(e.key);
  if(!playgame){
    console.log("event key");
    $('#level-title').text('Level ' + level)
    nextSequence()
    playgame=true
  }
})

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
  
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
  });

  function checkAnswer(currentLevel){
    if(gamePattren[currentLevel] === userClickedPattern[currentLevel]){
      if(userClickedPattern.length === gamePattren.length){
        console.log("success")
        setTimeout(function(){
            nextSequence()
        },1000)
          
      }
    }
    else{
      console.log("Wrong");
      playSound('wrong')
      $('body').addClass('game-over')
      $("#level-title").text("Game Over, Press Any Key to Restart");
  
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
  
      starOver()
    }
  }

function nextSequence(){
  userClickedPattern=[]
  level++;
  $("#level-title").text("Level " + level);
    const randonnum = Math.floor(Math.random() * 4)
    console.log(randonnum);
    let RandomChosenColor =  buttoncolors[randonnum];
    console.log(RandomChosenColor)
    gamePattren.push(RandomChosenColor);
    console.log(gamePattren)
    $("#" + RandomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(RandomChosenColor);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}
 function starOver(){
   level=0
   gamePattren=[]
   playgame=false
 }

var buttonColours  = ['blue', 'red', 'yellow', 'blue'];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;


$(document).keydown(function () {
nextSequence()
$('#level-title').text('Level 0')
})


$('.btn').click(function () {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
})


function playsound (name) {
    var audio = new Audio ('sounds/' + randomChosenColour + '.mp3');
    audio.play();
}






function nextSequence () {
    level++
    $('#level-title').text('Level ' + level)
    var rand = Math.floor(Math.random() * 4);

    var randomChosenColour =  buttonColours[rand];

    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio ('sounds/' + randomChosenColour + '.mp3');
    audio.play();

    playsound(randomChosenColour);
};


function animatePress (currentColour) {
    $('#' + randomChosenColour).addClass('pressed');
    setTimeout(function () {
        $('#' + randomChosenColour).removeClass('pressed');
    }, 100)
    }




function checkAnswer (currentLevel) {
    
}







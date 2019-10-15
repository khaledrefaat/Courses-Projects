var rand1 =  Math.floor(Math.random() * 5);
var rand2 =  Math.floor(Math.random() * 5);

var images = ['images/dice1.png', 'images/dice2.png',  'images/dice3.png', 'images/dice4.png', 'images/dice5.png',
 'images/dice6.png'];
document.querySelector('.img1').setAttribute('src', images[rand1]);
document.querySelector('.img2').setAttribute('src', images[rand2]);

if (rand1 > rand2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!'
}else if(rand2 > rand1) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!'
}else {
    document.querySelector('h1').innerHTML = 'Draw!'
}

//global variables
var scores , roundScore,activePlayer,gamePlaying;



// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;


// // dice er value current plr er score show korbe
// //document.querySelector('#current-'+ activePlayer).textContent = dice
// // extra design
// // document.querySelector('#current-'+ activePlayer).innerHTML = '<em>'+ dice+ '</em>'

// //var x = document.querySelector('#score-0').textContent
// //console.log(x);

// // dice na dekhano
// document.querySelector('.dice').style.display= 'none';


// document.getElementById('score-0').textContent= '0'
// document.getElementById('score-1').textContent= '0'
// document.getElementById('current-0').textContent= '0'
// document.getElementById('current-1').textContent= '0'

//initialize every variabls
init();




//button: Roll dice button


document.querySelector('.btn-roll').addEventListener('click',function(){
  
if(gamePlaying){

  //1.Random number

 var dice = Math.floor(Math.random() * 6) + 1;
 console.log(dice);
 

  // 2. display result

  //collect dice value
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  //pic src change
  diceDOM.src = 'dice-' + dice + '.png';



  //3.update the round score if the dice number was not 1

  if (dice !== 1){
    //add score
    roundScore += dice;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;

  }
  else{
    //next player
    nextPlayer();




  //   //document.querySelector('.player-0-panel').classList.remove('active');
  //   //document.querySelector('.player-1-panel').classList.add('active');


  }


}


  });






//button: hold button


document.querySelector('.btn-hold').addEventListener('click',function(){

  if(gamePlaying){

    // add current score to globl score
  scores[activePlayer] += roundScore;
  



  //update the user interface

  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  //check if the player win the game

  if(scores[activePlayer] >= 20)
  {
    document.querySelector('#name-' + activePlayer).textContent = 'winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer+ '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('active');
    gamePlaying = false;

  }

  else {
    //next player
    nextPlayer();

  }

}


});






//Function: nextPlayer

function nextPlayer(){

  //next player
  activePlayer === 0 ? activePlayer= 1 : activePlayer= 0 ;
  roundScore = 0;

  //current score zore

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //activeness change

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';






}




//Function : init()

function init(){

scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;



document.querySelector('.dice').style.display= 'none';


document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';

document.getElementById('name-0').textContent= 'player-1';
document.getElementById('name-1').textContent= 'player-2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');


}




//button : new game button

document.querySelector('.btn-new').addEventListener('click',init);
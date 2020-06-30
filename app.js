var scores, roundScore, activePlayer, gamePlayng;
 init();
 
 
//selct object from the dom and change content
//GETTER 
//
// questo per aggiungere html
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+ dice + '</em>';

// read content from html page SETTER
var x = document.querySelector('#score-0').textContent;
console.log(x);
// change style in js 
// this change the inline and css style in general

//function btn (){

//} 
//btn();
//                                                  type of event, function u want to call when click event happen
//document.querySelector('#btn-roll').addEventListener('click',btn)
//                                                  type of event, anonimus  function u want to call wh
document.querySelector('.btn-roll').addEventListener('click',function(){
   // we need random number 
   var dice = Math.floor(Math.random()*6)+1;
   // display resoults 
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';
    
   //update round score if rolled number != 1.
   if (dice !== 1){
        // add score
        roundScore  += dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
   }else{
       nextPlayer();
      
   }

});
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0]
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display= 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='player 1';
    document.getElementById('name-1').textContent='player 2 ';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-hold').addEventListener('click',function(){
    // add current score to global score 
    scores[activePlayer] += roundScore;
    //scores[activePlayer] = scores[activePlayer] + roundScore;
    //update ui 
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    // check if player won the game 
    if (scores[activePlayer]>=20){
        document.querySelector('#name-'+ activePlayer).textContent = 'U won!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
    }else {
        nextPlayer();
    }
    // nextplayer
   
    
});
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
     document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display= 'none';
  
}



window.addEventListener('load', init);

//available levls
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
//change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  function init() {
    //display seconds in UI
    seconds.innerHTML = currentLevel;
    //load word from array
    showWord(words);
    //start matchin input
    wordInput.addEventListener('input', startMatch)
    //call countdown
    setInterval(countDown, 1000);
    setInterval(checkStatus, 50);
  }


  //start Match
  function startMatch(){
    if(matchWords()){
     isPlaying = true;
     time = currentLevel + 1;
     showWord(words);
     wordInput.value = '';
     score++;
    }
    if(score === -1){
     scoreDisplay.innerHTML = 0;
    } else {
     scoreDisplay.innerHTML = score;
    }
    
  }

  function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct!!!";
        return true;
      } else {
        message.innerHTML = '';
        return false;
      }
  }

  //show random word
  function showWord(wordArray){
      const randIndex = Math.floor(Math.random() * wordArray.length);
      currentWord.innerHTML = wordArray[randIndex];
  }

  
  function countDown(){
    if(time > 0){
      time--;
    }else if(time === 0){
        isPlaying = false;
    }
    //Show Time
    timeDisplay.innerHTML = time;
  }
  
  function checkStatus(){
      if(!isPlaying && time === 0){
        message.innerHTML = 'Game is Over';
        score = -1;
      }
  }
'use strict';
let score =0;

let welcome = 'Welcome to my page';
alert( welcome );
let name = prompt( 'What is your name?' );
alert( `Very nice to meet you ${name} !` );
let result = confirm( 'If you liked my webpage, can you answer some questions for me?' );
if ( result ){
  alert( 'Great! Let\'s start!' );
} else {
  alert( 'Oh... I have to get your permission to continue.' );
}

let q1 = prompt( 'Does Zeegii like coding?' ).toLowerCase();
if ( q1 ==='yes'|| q1 === 'y'){
  alert('great answer!');
  score+=1;
  //console.log('great answer!');
} else if ( q1==='no' || q1 === 'n' ) {
  alert( 'I do like coding!!!' );
} else {
  alert ( 'Please insert valid answer.' );
}

let q2 = prompt( 'Do I use fork often?' ).toLowerCase();
if ( q2 ==='yes' || q2 === 'y'){
//console.log('I love spoons');
  alert( 'Nah...I love spoons' );
} else if ( q2 ==='no' || q2 === 'n' ){
  alert( 'Correct!.... very very rarely I use fork...' );
  score+=1;
} else {
  alert ( 'Please insert valid answer.' );
}

let q3 = prompt('Do I want to swtich my career?').toLowerCase();
if ( q3 ==='yes' || q3 === 'y' ){
  alert('You got that right!');
  score+=1;
  //console.log('You got that right!');
}else if ( q3 ==='no' || q3 === 'n' ){
  alert('I love medicine, though I really want to try software development now.');
} else {
  alert ( 'Please insert valid answer.' );
}

let q4 = prompt('Have I considered to be a photographer?').toLowerCase();
if ( q4 ==='yes'|| q4 === 'y' ){
  alert('Yes.. My other passion');
  score+=1;
  //console.log('Yes.. My other passion');
} else if ( q4 ==='no' || q4 === 'n' ){
  alert('I have, I really have..');
} else {
  alert ( 'Please insert valid answer.' );
}

let q5 = prompt('Ok.. the next question... \n Am I in the school now?').toLowerCase();
if ( q5 ==='yes' || q5 === 'y'){
  alert('CODE FELLOWS!!!');
  score+=1;
  //console.log('CODE FELLOWS!!!');
} else if ( q5 ==='no' || q5 === 'n' ){
  alert(':(');
} else {
  alert ( 'Please insert valid answer.' );
}

let randomNum = Math.floor(Math.random()*10) + 1;
//console.log(randomNum);
let q6 = prompt('Please guess the number that I have in mind');
//create another variable to store the number of tries.
let numberOfGuesses = 0;
while (numberOfGuesses<4){
  numberOfGuesses+=1;
  if (q6 > randomNum){
    q6 = prompt('Too high, go down a little');
  } else if (q6 < randomNum) {
    q6 = prompt ('Too low go up a little');
  } else if ( Number(q6) === randomNum){
    score+=1;
    alert('I knew You were a mind reader!');
    break;
  }
}
alert(`The correct answer was ${randomNum}`);
//console.log(`The correct answer was ${randomNum}`);
//console.log(`Your total score is ${score}.`);

let photoEquipments = ['lens','battery','tripod','flashlight'];

let q7 = prompt('Can you name a photographic equipments that I use often?').toLowerCase();
let numOfAttempts = 0;
while (numOfAttempts<6){
  numOfAttempts+=1;
  let found = false;
  for (let i =0; i<photoEquipments.length; i++){
    if (q7 === photoEquipments[i].toLowerCase()){
      found = true;
      break;
    }
  }
  if(found){
    alert('You got this!');
    score+=1;
    break;
  } else if (numOfAttempts<6){
    q7 = prompt('Can you try one more time?').toLowerCase();
  }
}

alert(`The correct answers were ${photoEquipments}`);
//console.log(score);
let bye = `Thanks for answering all the questions ${name}, your total score is ${score}!`;
alert(bye);

function graffiti(message){
  console.log(message);
};

graffiti('Stephanie was here');
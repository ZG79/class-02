'use strict';

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
  //console.log('great answer!');
} else if ( q1==='no' || q1 === 'n' ) {
  alert( 'I do like coding!!!' );
} else {
  alert ( 'Please insert valid answer.' );
}

let q2 = prompt( 'Do I use fork often?' ).toLowerCase();
if ( q2 ==='yes' || q2 === 'y'){
//console.log('I love spoons');
  alert( 'I love spoons' );
} else if ( q2 ==='no' || q2 === 'n' ){
  alert( 'Nahhh..... very very rarely...' );
} else {
  alert ( 'Please insert valid answer.' );
}

let q3 = prompt('Do I want to swtich my career?').toLowerCase();
if ( q3 ==='yes' || q3 === 'y' ){
  alert('You got that right!');
  //console.log('You got that right!');
}else if ( q3 ==='no' || q3 === 'n' ){
  alert('I love medicine, though I really want to try software development now.');
} else {
  alert ( 'Please insert valid answer.' );
}

let q4 = prompt('Have I considered to be a photographer?').toLowerCase();
if ( q4 ==='yes'|| q4 === 'y' ){
  alert('Yes.. My other passion');
  //console.log('Yes.. My other passion');
} else if ( q4 ==='no' || q4 === 'n' ){
  alert('I have, I really have..');
} else {
  alert ( 'Please insert valid answer.' );
}

let q5 = prompt('Ok.. the last question... \n Am I in the school now?').toLowerCase();
if ( q5 ==='yes' || q5 === 'y'){
  alert('CODE FELLOWS!!!');
  //console.log('CODE FELLOWS!!!');
} else if ( q5 ==='no' || q5 === 'n' ){
  alert(':(');
} else {
  alert ( 'Please insert valid answer.' );
}

let bye = `Thanks for answering all the questions ${name}!`;
alert(bye);

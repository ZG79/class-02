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

let q1 = prompt( 'Does Zeegii like coding?' );
if ( q1.toLowerCase()==='yes'.toLowerCase() || q1.toLowerCase() === 'y'.toLowerCase()){
  alert('great answer!');
  //console.log('great answer!');
} else if ( q1.toLowerCase()==='no'.toLowerCase() || q1.toLowerCase() === 'n'.toLowerCase() ) {
  alert( 'I do like coding!!!' );
} else {
  alert ( 'Please insert valid answer.' );
}

let q2 = prompt( 'Do I use fork often?' );
if ( q2.toLowerCase()==='yes'.toLowerCase() || q2.toLowerCase() === 'y'.toLowerCase() ){
//console.log('I love spoons');
  alert( 'I love spoons' );
} else if ( q2.toLowerCase()==='no'.toLowerCase() || q2.toLowerCase() === 'n'.toLowerCase() ){
  alert( 'Nahhh..... very very rarely...' );
} else {
  alert ( 'Please insert valid answer.' );
}

let q3 = prompt('Do I want to swtich my career?');
if ( q3.toLowerCase()==='yes'.toLowerCase() || q3.toLowerCase() === 'y'.toLowerCase() ){
  alert('You got that right!');
  //console.log('You got that right!');
}else if ( q3.toLowerCase()==='no'.toLowerCase() || q3.toLowerCase() === 'n'.toLowerCase() ){
  alert('I love medicine, though I really want to try software development now.');
} else {
  alert ( 'Please insert valid answer.' );
}

let q4 = prompt('Have I considered to be a photographer?');
if ( q4.toLowerCase()==='yes'.toLowerCase() || q4.toLowerCase() === 'y'.toLowerCase() ){
  alert('Yes.. My other passion');
  //console.log('Yes.. My other passion');
} else if ( q4.toLowerCase()==='no'.toLowerCase() || q4.toLowerCase() === 'n'.toLowerCase() ){
  alert('I have, I really have..');
} else {
  alert ( 'Please insert valid answer.' );
}

let q5 = prompt('Ok.. the last question... \n Am I in the school now?');
if ( q5.toLowerCase()==='yes'.toLowerCase() || q5.toLowerCase() === 'y'.toLowerCase() ){
  alert('CODE FELLOWS!!!');
  //console.log('CODE FELLOWS!!!');
} else if ( q5.toLowerCase()==='no'.toLowerCase() || q5.toLowerCase() === 'n'.toLowerCase() ){
  alert(':(');
} else {
  alert ( 'Please insert valid answer.' );
}

let bye = `Thanks for answering all the questions ${name}!`;
alert(bye);

let welcome = 'Welcome to my page';
alert(welcome);
let name = prompt('What is your name?');
alert(`Very nice to meet you ${name} !`);
let result = confirm('If you liked my webpage, can you answer some questions for me?');
if (result){
  alert('Great! Let\'s start!');
} else {
  alert('Oh... I have to get your permission to continue.');
}

let q1 = prompt('Does Zeegii like coding?');
if (q1.toLowerCase()==='yes'.toLowerCase()){
  alert('great answer!'); 
  console.log('great answer!');
}else {
  alert('I do like coding!!!');
}

let q2 = prompt('Do I use fork often?');
if (q2.toLowerCase()==='no'.toLowerCase()){
//console.log('I love spoons');
  alert('I love spoons');
} else {
  alert('Nahhh..... very very rarely...');
}

let q3 = prompt('Do I want to swtich my career?');
if (q3.toLowerCase()==='yes'.toLowerCase()){
  alert('You got that right!'); 
  console.log('You got that right!');
}else {
  alert('I love medicine, though I really want to try software development now.');
}

let q4 = prompt('Have I considered to be a photographer?');
if (q4.toLowerCase()==='yes'.toLowerCase()){
  alert('Yes.. My other passion');
  console.log('Yes.. My other passion');
}else {
  alert('I have, I really have..');
}

let q5 = prompt('Ok.. the last question... \n Am I in the school now?'); 
if (q5.toLowerCase()==='yes'.toLowerCase()){
  alert('CODE FELLOWS!!!'); 
  console.log('CODE FELLOWS!!!');
}else {
  alert(':(');
}

let bye = `Thanks for answering all the questions ${name}!`;
alert(bye);

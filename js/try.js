
function askQuestions(question) {
  let answer = prompt(question).toLowerCase();
  if (answer === 'yes' || answer === 'y') {
    alert('great!');
  } else if (answer === 'no' || answer === 'n') {
    alert('nope');
  }
}

let q1 = 'Does Zeegii like coding?';
let q2 = 'Does John like coding?';
askQuestions(q1);
askQuestions(q2);

function noQuestion(string) {
  let answer = prompt(string).toLowerCase();
  if (answer === 'no' || answer === 'n') {
    alert('great!');
  } else if (answer === 'yes' || answer === 'y') {
    alert('nope, you\'re wrong');
  }
}
let q3 = 'Do I use for often';
let q4 = 'Am I a morning person';
noQuestion(q3);
noQuestion(q4);


const readlineSync = require("readline-sync");
const chalk = require('chalk');

let score = 0;
const userName = readlineSync.question(chalk.blueBright("What is your name? "));

console.log("Welcome " + chalk.bold.yellow(userName) + " to " + chalk.bold.yellowBright("DO YOU KNOW ATUL?"));

const highScore = {
  name: "Maitryee",
  score: 5
}

function play(question, answer, options) {

  console.log(chalk.blueBright(question) + "\n" + chalk.red('Options:'));
  options.forEach(option => console.log(option));
  const userAnswer = readlineSync.question(chalk.blueBright('Type your answer : '));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bold.greenBright("You are right!"));
    score++;
  } else {
    console.log(chalk.bold.redBright("You are wrong!"));
    console.log("The correct answer is " + chalk.bold.greenBright(answer));
  }

  console.log("Your current score :", score);
  console.log("--------------");
}

const questions = [{
  question: "What is my full name? ",
  answer: "Atul Tameshwari",
  options: ['Atul Khatri', 'Atul Tameshwari', 'Atul Sharma', 'Atul Verma']
}, {
  question: "Which type of music do I like? ",
  answer: "Trap",
  options: ['Pop', 'Lofi', 'Rock', 'Trap']
}, {
  question: "Where do I live? ",
  answer: "Vidisha",
  options: ['Vidisha', 'Bhopal', 'Indore', 'Ranchi']
}, {
  question: "Which is my most favorite ice-cream flavour? ",
  answer: "Chocolate",
  options: ['Vanilla', 'Chocolate', 'Strawberry', 'Pistachio']
}, {
  question: "Where do I study? ",
  answer: "TIEIT",
  options: ['TIEIT', 'IIT', 'LNCT', 'NIT']
}]

for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options);
}

console.log("YAY! Your final score is :", score);

console.log("The latest recorded high score is of " + chalk.bold.yellowBright(highScore.name) + " with score " + chalk.bold.yellowBright(highScore.score));


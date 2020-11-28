var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.blueBright("What is your name? "));

console.log("Welcome " + chalk.bold.yellow(userName) + " to "+ chalk.bold.yellowBright("DO YOU KNOW ATUL?"));

var highScore = {
  name : "Maitryee",
  score : 5
}

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.blueBright(question));

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bold.greenBright("You are right!"));
    score++;
  } else {
    console.log(chalk.bold.redBright("You are wrong!"));
    console.log("The correct answer is " + chalk.bold.greenBright(answer));
  }

  console.log("Your current score :", score);
  console.log("--------------");
}

var questions = [ {
  question : "What is my full name? ",
  answer : "Atul Tameshwari"
}, {
  question : "Which type of music do I like? ",
  answer : "Trap Music"
}, {
  question : "Where do I live? ",
  answer : "Vidisha"
}, {
  question : "Which is my most favorite ice-cream flavour? ",
  answer : "Chocolate"
}, {
  question : "Where do I study? ",
  answer : "TIEIT"
}]

for(var i = 0; i<questions.length; i++ ) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! Your final score is :", score);

console.log("The latest recorded highcore is of " + chalk.bold.yellowBright(highScore.name) + " with score " + chalk.bold.yellowBright(highScore.score));


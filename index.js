var readlineSync = require('readline-sync');

var userName = readlineSync.question("Hey! What's your name? ");
const chalk=require('chalk');
console.log("Hi " + userName + "! ");
console.log(chalk.blue("Welcome to my HowWellDoYouKnowMeQuiz!"));
console.log("*****************************************");
console.log(chalk.grey("Before we begin, make sure you type correct spellings. "));
console.log("So let's get started. All the Best");
console.log("*****************************************");

var questions = [
  {
  question : "What is my full name? ",
  answer : "PINKAL PAHUJA"
  },

  {
  question : "Where do I live? ",
  answer : "TOHANA"
  },

  {
  question : "What is my favorite fruit? ",
  answer : "LITCHI"
  },
  {
  question : "Which university did I do my Engineering from?",
  answer : "GJUST"
  },

  {
    question : "What is my favorite color? ",
    answer : "WHITE"
  },

  {
    question : "Which is my birth month? ",
    answer : "AUGUST"
  },

  {
    question : "What do I prefer? (Mountain/Beach) ",
    answer : "BEACH"
  },

  {
    question : "Which is my favorite flower? (Rose/Sunflower) ",
    answer : "ROSE"
  }
];

var score = 0;

var highScore = [
  {
    name : "Pinkal",
    score : 8
  },
  {
    name : "Aanaya",
    score : 7
  },
  {
    name : "Sahil",
    score : 7
  },
  {
    name : "Richa",
    score : 6
  },
  {
    name : "Vaishnavi",
    score : 6
  },  
];

function play(ques, ans)
{
  if (ans.toUpperCase() === questions[i].answer){
    var result = "Yay, you're right!";
    score = score+1;
  }
  else{
    var result = "Sorry, that's wrong!";
  }
return result;
}

for (var i=0;i<questions.length;i++)
{
  var userAnswer = readlineSync.question(questions[i].question);
  var result = play (questions[i].question, userAnswer);
  console.log (result);
  console.log (chalk.blue("Your current score is ",score));
  console.log ("--------------------------");
}

console.log(chalk.grey("*********************************"));
console.log("*********************************");
console.log(chalk.grey("*********************************"));
console.log("Your final score is -----> ", score);
console.log(chalk.blue("Here are the high scorers : "));
for (var j=0; j<highScore.length; j++)
{
  console.log(highScore[j].name + " : " + highScore[j].score);
}
console.log(chalk.grey("*********************************"));
console.log("*********************************");
console.log(chalk.blue("*********************************"));

if(score>5)
{
  console.log(chalk.green("Congratulations! You know Pinkal "));
  console.log("If your final score matches or is better than these high scores, send me a screenshot of your result and I will update it here!");
  console.log(chalk.blue("Thank you for playing my quiz"));

}
else
{
  console.log("Thank you for playing my quiz");
  
}

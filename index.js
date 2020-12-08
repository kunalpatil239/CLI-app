var readlineSync = require('readline-sync');//use to interact with user via console

var userName = readlineSync.question("What's Your Name?\n");
console.log("Welcome "+ userName + " to Do You Know Kunal?");
var score = 0;

//define the function
function quiz(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are Right");
    score = score + 1;
  }else{
    console.log("Wrong");
    score = score - 1;
  }
  console.log("Your score is: ",score);
  console.log("------------");
}

//array of objects
var questions = [
  {question: "Where do Kunal live?\n",
   answer: "Mumbai"
},{
   question: "Which is Kunal's favourite Webseries?\n",
   answer: "Breaking Bad"
},{
   question: "Who is Kunal's favourite Boxer?\n",
   answer: "Vasily Lomaschenko"
}
];

//loop
for(var i = 0; i<questions.length; i++){
  quiz(questions[i].question,questions[i].answer);
}

console.log("Your final score is: ",score);

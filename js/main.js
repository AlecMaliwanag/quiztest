var problemSet = [
{question:"1. Who is garen's muse?", answer:"katarina", userAnswer:""},
{question:"2. Who is Yasuo's teacher?", answer:"yi", userAnswer:""},
{question:"3. what is the name of annie's bear?", answer:"tibbers",userAnswer:""},
{question:"4. who is the prince of demacia?", answer:"jarvin iv",userAnswer:""},
{question:"5. Who is garen's sister?", answer:"lux",userAnswer:""},
{question:"6. Who killed jarvin III?", answer:"sion",userAnswer:""},
{question:"7. Who is the best character?", answer:"yasuo",userAnswer:""},
]


var question = document.getElementById("question");
var checkbox = document.getElementById("checkbox");
var userScore = 0;
var objectPlaceholder = 0;
question.innerHTML = problemSet[0].question;
var currentObject = problemSet[0];



//display each question one at a time and retreive user input

//when the checkbox is checked
var check = function() {
	//store user input
	var userInput = document.getElementById("userInput").value.toLowerCase();
	console.log(userInput);
	//check value
	if (userInput== problemSet[objectPlaceholder].answer) {
		console.log("correct");
		userScore ++;
		console.log("user score is " + userScore);
	}

	else {
		console.log("false");
		console.log("user score is " + userScore);
	}
	document.getElementById("userInput").value = "";
	objectPlaceholder ++;
	if (objectPlaceholder < 7) {
	question.innerHTML = problemSet[objectPlaceholder].question;
	}
	else {
		document.write("congrats!  You got " + userScore + " out of 7 questions correct");
	}
	//display correct or false
	//change score
	//push new question to the h2 tag

}


	//store user input
	//check value
	//display correct or false
	//change score
	//push new question to the h2 tag
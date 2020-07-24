// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// var cityInput = prompt("Enter Your city name:").toLowerCase();
// if (cityInput === "karachi") {
//   alert("Welcome to the city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

// ______________________________________________________________________________________

// var genderInput = prompt("Enter your gender:").toLowerCase();

// if (genderInput === "male") {
//   alert("Good Morning Sir");
// } else if (genderInput === "female") {
//   alert("Good Morning Ma'am");
// }

// ______________________________________________________________________________________

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var colorInput = prompt("Enter the color of raod traffic signal:").toLowerCase();
// if (colorInput === "red") {
//   alert("Must Stop");
// } else if (colorInput === "yellow") {
//   alert("Ready to move");
// } else if (colorInput === "green") {
//   alert("Move now");
// }

// ______________________________________________________________________________________

// 4. Write a program to take input remaining fuel in car (in 
//   litres) from user. If the current fuel is less than 0.25litres, 
//   show the message “Please refill the fuel in your car”

// var fuelInput = +prompt("Enter fuel:");
// if (fuelInput < 0.25) {
//   alert("Please refill the fuel in your car");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//   alert("car is smaller than cat");
//   }


// ______________________________________________________________________________________

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var a = 4;
// if (++a === 5) {
//   alert("given condition of variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var labourCost = 2000;
// var totalCost = materialCost + labourCost;
// if (totalCost === labourCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// ______________________________________________________________________________________

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:

// var marks1 = +prompt("Input marks of 1st subject");
// var totalSubjectMarks1 = +prompt("Input total marks of 1st subject");
// var marks2 = +prompt("Input marks of 2nd subject");
// var totalSubjectMarks2 = +prompt("Input total marks of 2nd subject");
// var marks3 = +prompt("Input marks of 3rd subject");
// var totalSubjectMarks3 = +prompt("Input total marks of 3rd subject");
// var totalObtainedMarks = marks1 + marks2 + marks3;
// var totalMarks = totalSubjectMarks1 + totalSubjectMarks2 + totalSubjectMarks3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else if (percentage < 60) {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1><br><br><br>");
// document.write("Total marks : ", totalMarks, "<br>");
// document.write("Marks Obtained : ", totalObtainedMarks, "<br>");
// document.write("Percentage : ", percentage, "<br>");
// document.write("Grade : ", grade, "<br>");
// document.write("Remarks : ", remarks, "<br>");

// ______________________________________________________________________________________

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretNumber = 5;
// var userInput = +prompt("Guess the secret number");

// if (userInput === secretNumber) {
//   alert("Bingo!")
// } else if (userInput === secretNumber + 1) {
//   alert("Close enough to the secret number");
// }

// ______________________________________________________________________________________

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// var userInput = +prompt("Enter a number");
// if ((userInput % 3) === 0) {
//   alert("The number is divisible by 3");
// }

// ______________________________________________________________________________________

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var userInput = +prompt("Enter a number");
// if (userInput % 2 === 0) {
//   alert("The number is an even number");
// } else if (userInput % 2 !== 0) {
//   alert("The number is an odd number");
// }

// ______________________________________________________________________________________

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var userInput = +prompt("Enter the temperature:");
// if (userInput > 40) {
//   alert("It is too hot outside");
// } else if (userInput > 30) {
//   alert("The weather today is normal");
// } else if (userInput > 20) {
//   alert("Today's weather is cool");
// } else if (userInput > 10) {
//   alert("OMG! Today's weather is so cool")
// }

// ______________________________________________________________________________________

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = +prompt("Enter the first number:");
var secondNumber = +prompt("Enter the second number:");
var operation = prompt("Enter an operation i.e +, -, *, /, %");
var result;

switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  case "%":
    result = firstNumber % secondNumber;
    break;
}

alert(result);
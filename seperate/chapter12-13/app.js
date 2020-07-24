// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// var userInput = prompt("Enter a letter/number");

// var transformedInput = +userInput;

// if (!isNaN(transformedInput)) {
//   alert("Your input is a number");
// } else if (isNaN(transformedInput)) {
//   var ASCIIcode = userInput.charCodeAt(0);
//   console.log(ASCIIcode);
//   if (ASCIIcode >= 65 && ASCIIcode <= 90) {
//     alert("Your input is a string and Uppercase");
//   } else if (ASCIIcode >= 97 && ASCIIcode <= 122) {
//     alert("Your input is a string and Lowercase");
//   }
// }


// ______________________________________________________________________________________

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var number1 = +prompt("Enter the first number");
// var number2 = +prompt("Enter second number");
// if (number1 > number2) {
//   alert("First number i.e " + number1 + " is the larger one");
// } else if (number2 > number1) {
//   alert("Second number i.e " + number2 + " is the larger one");
// } else if (number1 === number2) {
//   alert("Both are equal");
// } else {
//   alert("Invalid input");
// }

// ______________________________________________________________________________________

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

// var userInput = +prompt("Enter a number");
// if (userInput > 0) {
//   alert("This is a positive number");
// } else if (userInput < 0) {
//   alert("The number is a negative number");
// } else if (userInput === 0) {
//   alert("The number is zero.")
// } else {
//   alert("Invalid input");
// }

// ______________________________________________________________________________________

// 4. Write a program that takes a character (i.e. string of 
//   length 1) and returns true if it is a vowel, false otherwise

// var userInput = prompt("Enter an english alphabet")[0].toLowerCase();
// switch (userInput) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     alert("The alphabet is a wovel");
//     break;
//   default:
//     alert("The alphabet is a consonent")
// }

// ______________________________________________________________________________________

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

// var correctPassword = "this is a secret password";
// var userInput = prompt("Enter a password").trim();
// if (userInput === "") {
//   alert("Please enter your password");
// } else if (userInput === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }

// ______________________________________________________________________________________

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// }
// else {
//   greeting = "Good evening";
// }

// ______________________________________________________________________________________

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

// var userInput = +prompt("Enter the time in 24 hour format i.e 1200 for 12 am");
// if (userInput >= 0000 && userInput < 1200) {
//   alert("Good Morning!");
// } else if (userInput >= 1200 && userInput < 1700) {
//   alert("Good afternoon!");
// } else if (userInput >= 1700 && userInput < 2100) {
//   alert("Good Evening");
// } else if (userInput >= 2100 && userInput <= 2359) {
//   alert("Good night!");
// }

// ______________________________________________________________________________________

// CHAPTER 1

// 1. Write a script to greet your website visitor using JS alert box.

// alert("Hello there, Welcome to the website");

// ______________________________________________________________________________________

// 2. Write a script to display following message on your web page:

// alert("Error! Please enter a valid password");

// ______________________________________________________________________________________

// 3. Write a script to display following message on your web page: (Hint : Use line break)

// alert("Welcome to JS land...!\nHappy Coding");

// ______________________________________________________________________________________

// 4. Write a script to display following messages in sequence:

// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// ______________________________________________________________________________________

// 5. Generate the following message through browser’s developer console:
//  Ans. We simply press F12 and in the console tab write the following code: alert("Hello... I can run JS through my web browser's console")';

// ______________________________________________________________________________________

// 6. Make use of alerts in your new/existing HTML & CSS project.

// ______________________________________________________________________________________

// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// Ans. Wrote in the index.html and commented it out.

// ______________________________________________________________________________________

// CHAPTER 2

// 1. Declare a variable called username.

var username;

// ______________________________________________________________________________________

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Muhammad Tayyab Ferozi";

// ______________________________________________________________________________________

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;
message = "Hello World";
// alert(message);

// ______________________________________________________________________________________

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var studentName = "John Doe";
var studentAge = "15 years old";
var studentCertification = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCertification);

// ______________________________________________________________________________________

// 5. Write a script to display the following alert using one JS variable:

var food = "PIZZA";
// alert(food + "\n" + food.slice(0, 4) + "\n" + food.slice(0, 3) + "\n" + food.slice(0, 2) + "\n" + food.slice(0, 1));

// ______________________________________________________________________________________

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "ferozitayyab@gmail.com";
// alert("My email address is: " + email);

// ______________________________________________________________________________________

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// ______________________________________________________________________________________

// 8. Write a script to display this in browser through JS

// document.write("Yeah! I can write HTML content through Javascript");

// ______________________________________________________________________________________

// 9. Store following string in a variable and show in alert and browser through JS\

var somestring = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(somestring);

// ______________________________________________________________________________________

// CHAPTER 3

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 16;

// alert("I am " + age + " years old");

// ______________________________________________________________________________________

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

if (!localStorage.getItem("visits")) {
  localStorage.setItem("visits", 0);
}
let visitsNumber = localStorage.getItem("visits");
visitsNumber++;
localStorage.setItem("visits", visitsNumber);

// alert("You have visited the site " + visitsNumber + " times");

// ______________________________________________________________________________________

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2003;

// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof (birthYear));

// ______________________________________________________________________________________

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorsName = "John Doe";
var producTitle = "T-shirt";
var quantity = 5;
// document.write("<strong>" + visitorsName + "</strong> ordered <strong>" + quantity + " " + producTitle + "</strong>" + "(s) on XYZ Clothing Store");

// ______________________________________________________________________________________

// CHAPTER 4

// 1. Declare 3 variables in one statement.

var a = 5,
  b = 6,
  c = 7;

// ______________________________________________________________________________________

// 2. Declare 5 legal & 5 illegal variable names.

// Legal
var name = "Muhammad Tayyab Ferozi";
var age = 16;
var _continue = 5;
var $name = "Some name";
var age2 = 16.5;
// Illegal
// var 2name = "Muhammad Tayyab Ferozi";
// var continue = 13;
// var for = "hello world";
// var student's name = "Tayyab"
// var user input = "Some user input"

// ______________________________________________________________________________________

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case
// _________
// e) Variable names should not be JS _________

var letters = "letters";
var letter = "letter";
var numbers = "numbers";
var dollar = "$";
var underScore = "_";
var sensitive = "sensitive";
var keywords = "keywords";

// document.write("<h1>Rules for naming JS variables</h1><br><br><br>");
// document.write("Variable names can only contain " + letters + ", " + numbers + ", " + dollar + " and " + underScore + ". For example $my_1stVariable<br>");
// document.write("Variable must begin with a " + letter + ", " + dollar + " or " + underScore + ". For example $name, _name or name<br>");
// document.write("Variable names are case " + sensitive + "<br>");
// document.write("Variable names should not be JS " + keywords);

// ______________________________________________________________________________________

// CHAPTER 5

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var x = 15,
  y = 4,
  z;
z = x + y;

// document.write("The sum of " + x + " and " + y + " is " + z + "<br>");

// ______________________________________________________________________________________

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

z = x - y;

// document.write("The difference of " + x + " and " + y + " is " + z + "<br>");

z = x / y;

// document.write("The quotent of " + x + " and " + y + " is " + z + "<br>");

z = x * y;

// document.write("The product of " + x + " and " + y + " is " + z + "<br>");

z = x % y;
// document.write("The modulus of " + x + " and " + y + " is " + z + "<br>");

// ______________________________________________________________________________________

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var a;
// document.write("Value after variable declaration is: " + a + "<br>");
a = 10;
// document.write("Initial Value: " + a + "<br>");
a++;
// document.write("Value after increment is: " + a + "<br>");
a += 7;
// document.write("Value after addition is: " + a + "<br>");
a--;
// document.write("Value after decrement is: " + a + "<br>");
a %= 3;
// document.write("The remainder is: " + a + "<br>");

// ______________________________________________________________________________________

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

oneTicketPrice = 600;
fiveTicketPrice = oneTicketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is: " + fiveTicketPrice + "PKR<br>");

// ______________________________________________________________________________________

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var tableNumber = 3;

for (var i = 1; i < +10; i++) {
  // document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
}

// ______________________________________________________________________________________

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celciusTemp = 25;
var convertedCelciusTemp = celciusTemp * (9 / 5) + 32;
// document.write(celciusTemp + "°C is " + convertedCelciusTemp + "°F<br>");
var fahrenTemp = 70;
var convertedFahrenTemp = (fahrenTemp - 32) * (5 / 9);
// document.write(fahrenTemp + "°F is " + convertedFahrenTemp + "°C<br>");

// ______________________________________________________________________________________

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var item1Price = 500;
// var item1Quanity = 3;
// var item2Price = 800;
// var item2Quantity = 5;
// var shippingCharges = 100;
// var totalPrice = (item1Price * item1Quanity) + (item2Price * item2Quantity) + shippingCharges;
// document.write("Price of item 1 is " + item1Price + "<br>");
// document.write("Quantity of item 1 is " + item1Quanity + "<br>");
// document.write("Price of item 2 is " + item2Price + "<br>");
// document.write("Quantity of item 2 is " + item2Quantity + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");
// document.write("Total Cost of your order is " + totalPrice);

// ______________________________________________________________________________________

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var totalMarks = 510;
// var marksObtained = 444;
// var percentage = (marksObtained / totalMarks) * 100
// document.write("<h1>Marks Sheet</h1><br><br><br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "<br>");

// ______________________________________________________________________________________

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usd = 10;
// var sr = 25;
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total currency in PKR: " + ((usd * 104.80) + (sr * 28)));

// ______________________________________________________________________________________

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var number = 5;
// number = (((number + 5) * 10) / 2);
// document.write(number);

// ______________________________________________________________________________________

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// var currentYear = 2020;
// var birthYear = 2003;
// var firstPossibleAge = 2020 - 2003;
// var secondPossibleAge = 2020 - 2003 - 1;
// document.write("You are either " + firstPossibleAge + " or " + secondPossibleAge + " years old");

// ______________________________________________________________________________________

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// document.write("The circumference is " + circumference + "<br>");
// var area = 3.142 * (radius ** 2);
// document.write("Area of a circle " + area + "<br>");

// ______________________________________________________________________________________

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favouriteSnack = "Motu Patlu Pops";
var currenctAge = 16;
var maxAge = 50;
var snackPerDay = 2;
var daysInOneMonth = 30;
var monthsInOneYear = 12;
var daysInOneYear = daysInOneMonth * monthsInOneYear;
var snacksInOneYear = daysInOneYear * snackPerDay;
var yearsLeft = maxAge - currenctAge;
var snackInLife = yearsLeft * snacksInOneYear;
// document.write("Favourite Snack: " + favouriteSnack + "<br>");
// document.write("Current Age: " + currenctAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snacks per day: " + snackPerDay + "<br>");
// document.write("You will need " + snackInLife + " to last you until the ripe old age of " + maxAge);

// ______________________________________________________________________________________

// CHAPTER 6-9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10;
// document.write("Result: <br>");
// document.write("The value of a is: ", a, "<br>");
// document.write(".......................................", "<br><br>")
// document.write("The value of ++a is: ", ++a, "<br>");
// document.write("Now the value of a is: ", a, "<br><br><br>");
// document.write("The value of a++ is: ", a++, "<br>");
// document.write("Now the value of a is: ", a, "<br><br><br>");
// document.write("The value of --a is: ", --a, "<br>");
// document.write("Now the value of a is: ", a, "<br><br><br>");
// document.write("The value of a-- is: ", a--, "<br>");
// document.write("Now the value of a is: ", a, "<br><br><br>");

// ______________________________________________________________________________________

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1, result;
// document.write("a is: ", a, "<br>b is: ", b, "<br>");
// result = --a;
// document.write("Result after --a is: ", result, ", a is ", a, ", b is ", b, "<br>");
// result = result - --b;
// document.write("Result after --a - --b is: ", result, ", a is ", a, ", b is ", b, "<br>");
// result = result + ++b;
// document.write("Result after --a - --b + ++b is: ", result, ", a is ", a, ", b is ", b, "<br>");
// result = result + b--;
// document.write("Result after --a - --b + ++b + b-- is: ", result, ", a is ", a, ", b is ", b, "<br>");

// ______________________________________________________________________________________

// 3. Write a program that takes input a name from user & greet the user.

// var name = prompt("Please enter your name");
// alert("Hello " + name);

// ______________________________________________________________________________________

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var numberInput = +prompt("Enter a number:");
// if (isNaN(numberInput)) {
//   numberInput = 5;
// }
// for (var i = 1; i <= 10; i++) {
//   document.write(numberInput + " x " + i + " = " + numberInput * i + "<br>");
// }

// ______________________________________________________________________________________

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var subject1 = prompt("Enter name of 1st subject:");
// var subject2 = prompt("Enter name of 2nd subject:");
// var subject3 = prompt("Enter name of 3rd subject:");
var totalMarks = 100;
// var marks1 = +prompt("Enter marks for the 1st subject:");
// var marks2 = +prompt("Enter marks for the 2nd subject:");
// var marks3 = +prompt("Enter marks for the 3rd subject:");

// var subjectHolders = document.querySelectorAll(".subject-holder");
// var obtainedMarksHolders = document.querySelectorAll(".obtmarks-holder");
// subjectHolders[0].innerHTML = subject1;
// subjectHolders[1].innerHTML = subject2;
// subjectHolders[2].innerHTML = subject3;
// obtainedMarksHolders[0].innerHTML = marks1;
// obtainedMarksHolders[1].innerHTML = marks2;
// obtainedMarksHolders[2].innerHTML = marks3;

// document.write("<table>"); //table
// document.write("<thead>"); // table head
// document.write("<tr>"); // 1st row
// document.write("<th>", "Subject");
// document.write("</th>");
// document.write("<th>", "Total Marks");
// document.write("</th>");
// document.write("<th>", "Obtained Marks");
// document.write("</th>");
// document.write("<th>", "Percentage");
// document.write("</th>");
// document.write("</tr>"); // 1st row closed
// document.write("</thead>"); // table head closed
// document.write("<tbody>"); // table body
// document.write("<tr>"); // 2nd row
// document.write("<td>", subject1);
// document.write("</td>");
// document.write("<td>", totalMarks);
// document.write("</td>");
// document.write("<td>", marks1);
// document.write("</td>")
// document.write("<td>", ((marks1 / totalMarks) * 100), "%");
// document.write("</td>")
// document.write("</tr>"); // 2nd row closed
// document.write("<tr>"); // 3rd row
// document.write("<td>", subject2);
// document.write("</td>");
// document.write("<td>", totalMarks);
// document.write("</td>");
// document.write("<td>", marks2);
// document.write("</td>");
// document.write("<td>", ((marks2 / totalMarks) * 100), "%");
// document.write("</td>")
// document.write("</tr>"); // 3rd row closed
// document.write("<tr>"); // 4th row
// document.write("<td>", subject3);
// document.write("</td>");
// document.write("<td>", totalMarks);
// document.write("</td>");
// document.write("<td>", marks3);
// document.write("</td>");
// document.write("<td>", ((marks3 / totalMarks) * 100), "%");
// document.write("</td>")
// document.write("</tr>"); // 4th row closed
// document.write("</tbody>"); // table body closed
// document.write("<tfoot>"); // table footer
// document.write("</tr>"); // 5th row
// document.write("<th>");
// document.write("</th>");
// document.write("<th>", totalMarks + totalMarks + totalMarks);
// document.write("</th>");
// document.write("<th>", marks1 + marks2 + marks3);
// document.write("</th>");
// document.write("<th>", ((marks1 + marks2 + marks3) / (totalMarks + totalMarks + totalMarks)) * 100, "%");
// document.write("</th>");
// document.write("</tr>"); // 5th row closed
// document.write("</tfoot>"); // table footer closed
// document.write("</table>"); //table closed

// console.log(marks1)
// console.log(marks2)
// console.log(marks3)

// CHAPTER 9-11

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

// var firstNumber = +prompt("Enter the first number:");
// var secondNumber = +prompt("Enter the second number:");
// var operation = prompt("Enter an operation i.e +, -, *, /, %");
var result;

// switch (operation) {
//   case "+":
//     result = firstNumber + secondNumber;
//     break;
//   case "-":
//     result = firstNumber - secondNumber;
//     break;
//   case "*":
//     result = firstNumber * secondNumber;
//     break;
//   case "/":
//     result = firstNumber / secondNumber;
//     break;
//   case "%":
//     result = firstNumber % secondNumber;
//     break;
// }

// alert(result);

// CHAPTER 12-13

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

// CHAPTER 14-16

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var studentNames = [];

// ______________________________________________________________________________________

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var studentNames2 = new Array();

// ______________________________________________________________________________________

// 3. Declare and initialize a strings array.

// var stringArray = ["Hello", "World"];

// ______________________________________________________________________________________

// 4. Declare and initialize a numbers array.

// var numArray = [2, 45, 52];

// ______________________________________________________________________________________

// 5. Declare and initialize a boolean array.

// var boolArray = [true, false, false, true];

// ______________________________________________________________________________________

// 6. Declare and initialize a mixed array.

// var mixedArray = ["Hi", 32, true, ["another", "world"]];

// ______________________________________________________________________________________

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phill", "PhD"];

// document.write("Qualifications: <br><br>")

// for (var i of qualifications) {
//   document.write(i, "<br>");
// }

// ______________________________________________________________________________________

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentArray = ["Michael", "John", "Tony"];
// var scoreArray = [320, 230, 480];

// for (var i = 0; i < studentArray.length; i++) {
//   document.write("Score of ", studentArray[i], " is ", scoreArray[i], ". Percentage: ", (scoreArray[i] / 500) * 100, "%<br>");
// }

// ______________________________________________________________________________________

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["red", "green", "magenta", "yellow", "black"];
// document.write(colors, "<br>");
// var userInput = prompt("What color do you want to add to the beginning of the array?");
// colors.push(userInput);
// document.write(colors, "<br>");
// colors.unshift("blue", "cyan");
// document.write(colors, "<br>");
// colors.shift();
// document.write(colors, "<br>");
// colors.pop();
// document.write(colors, "<br>");
// var index = +prompt("At which index do you want to add an element?")
// userInput = prompt("What color do you want to add at index " + index + " of the array?");
// colors.splice(index, 0, userInput);
// document.write(colors, "<br>");
// index = +prompt("At which index do you want to delete an element of the array?");
// var deleteCount = +prompt("How many elements do you want to delete?");
// colors.splice(index, deleteCount);
// document.write(colors, "<br>");

// ______________________________________________________________________________________

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var studentScores = [320, 230, 480, 120];
// document.write("Scores of students: ", studentScores, "<br>");
// document.write("Sorted scores of students: ", studentScores.sort())

// ______________________________________________________________________________________

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var citiesArray = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list: ", citiesArray, "<br>");
// var selectedArray = citiesArray.slice(2, 4);
// document.write("Selected cities list: ", selectedArray);

// ______________________________________________________________________________________

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", " is", " my", " cat"];
// document.write("Array: <br>", arr, "<br>");
// document.write("String: <br>", arr.join(" "), "<br>");

// ______________________________________________________________________________________

// 13. Create a new array.Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO - First In First Out)

// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("Devices: <br>", devices, "<br><br>");
// document.write("Out: <br>", devices.shift(), "<br>");
// document.write("Out: <br>", devices.shift(), "<br>");
// document.write("Out: <br>", devices.shift(), "<br>");
// document.write("Out: <br>", devices.shift(), "<br>");

// ______________________________________________________________________________________

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In￾First Out)

// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("Devices: <br>", devices, "<br><br>");
// document.write("Out: <br>", devices.pop(), "<br>");
// document.write("Out: <br>", devices.pop(), "<br>");
// document.write("Out: <br>", devices.pop(), "<br>");
// document.write("Out: <br>", devices.pop(), "<br>");

// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method:

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// for (var i of manufacturers) {
//   document.write(i, "<br>")
// }

// ______________________________________________________________________________________

// CHAPTER 17-20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multidimensionalArray = [[], []];

// ______________________________________________________________________________________

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var matrixArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// ______________________________________________________________________________________

// 3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//   document.write(i, "<br>");
// }

// ______________________________________________________________________________________

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNumber = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// document.write("Multiplication table of ", tableNumber, "<br>");
// document.write("Length ", length, "<br><br>");
// for (var i = 1; i <= length; i++) {
//   document.write(tableNumber, " x ", i, " = ", tableNumber * i, "<br>");
// }

// ______________________________________________________________________________________

// 5. Write a program to print items of the following array
// using for loop:
//   fruits = [“apple”, “banana”, “mango”, “orange”,
//     “strawberry”]
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i], "<br>");
// }

// document.write("<br>");

// for (var i = 0; i < fruits.length; i++) {
//   document.write("Variable at index ", i, " is ", fruits[i], "<br>");
// }

// ______________________________________________________________________________________

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h1>Counting:</h1><br>");
// for (var i = 1; i <= 15; i++) {
//   document.write(i, ", ");
// }

// document.write("<h1>Reverse counting:</h1><br>");
// for (var i = 10; i >= 1; i--) {
//   document.write(i, ", ");
// }

// document.write("<h1>Even:</h1><br>");
// for (var i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   document.write(i, ", ");
// }

// document.write("<h1>Odd:</h1><br>");
// for (var i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   document.write(i, ", ");
// }

// document.write("<h1>Series:</h1><br>");
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   document.write(i, "k, ");
// }

// ______________________________________________________________________________________

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to the ABC bakery. What do you want to order sir/ma'am?")

// var foundIndex = items.indexOf(userInput);

// if (foundIndex !== -1) {
//   document.write(userInput, " is <strong>available</strong> at index ", foundIndex, " in our bakery");
// } else {
//   document.write("We are sorry.", userInput, " is <strong>not available</strong> in our bakery");
// }

// ______________________________________________________________________________________

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var a = [24, 53, 78, 91, 12];
// document.write("Array items: ", a, "<br>");
// a.sort().reverse();
// document.write("Largest number: ", a[0]);

// ______________________________________________________________________________________

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var a = [24, 53, 78, 91, 12];
// document.write("Array items: ", a, "<br>");
// a.sort();
// document.write("Smallest number: ", a[0]);

// ______________________________________________________________________________________

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// for (var i = 1; i < 101; i++) {
//   if (i % 5 !== 0) {
//     continue;
//   }
//   document.write(i, ", ")
// }

// ______________________________________________________________________________________

// CHAPTER 21-25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// document.write("Hello " + fullName + "<br>");

// _________________________________________________________________________________________________

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favouriteModel = prompt("Enter your favourite mobile phone model name");
// var length = favouriteModel.length;
// document.write("My favourite phone is " + favouriteModel + "<br>");
// document.write("Length of string " + length + "<br>");

// _________________________________________________________________________________________________

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index + "<br>");

// _________________________________________________________________________________________________

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var string = "Hello World";
// var lastIndex = string.lastIndexOf("l");
// document.write("String: " + string + "<br>");
// document.write("Last index of 'l': " + lastIndex + "<br>");

// _________________________________________________________________________________________________

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var letterAt3rdIndex = word[3];
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + letterAt3rdIndex + "<br>");

// _________________________________________________________________________________________________

// 6. Repeat Q1 using string concat() method

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// document.write("Hello " + fullName + "<br>");

// _________________________________________________________________________________________________

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// var toReplace = "Islam";
// var replacedWord = word.replace("Hyder", "Islam");
// document.write("City: " + word + "<br>");
// document.write("After replacement: " + replacedWord + "<br>");

// _________________________________________________________________________________________________

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var string = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedString = string.split("and").join("&")
// document.write("Message: " + string + "<br>");
// document.write("Message after replacement: " + replacedString + "<br>");

// _________________________________________________________________________________________________

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var string = "472";
// var number = +string;
// document.write("Value: ", string, "<br>");
// document.write("Type ", typeof (string), "<br>");
// document.write("Value: ", number, "<br>");
// document.write("Type: ", typeof (number), "<br>");

// _________________________________________________________________________________________________

// 10. Write a program that takes user input.Convert and
// show the input in capital letters.

// var userInput = prompt("Enter a string to convert to uppercase");
// var upperCase = userInput.toUpperCase();
// document.write("User input: ", userInput, "<br>");
// document.write("Upper case: ", upperCase, "<br>");

// _________________________________________________________________________________________________

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var userInput = prompt("Enter a string to convert to title case");
// var titleCase = userInput[0].toUpperCase() + userInput.slice(1);
// document.write("User input: ", userInput, "<br>");
// document.write("Title Case: ", titleCase);

// _________________________________________________________________________________________________

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var string = num.toString().replace(".", "");
// document.write("Numeber: ", num, "<br>");
// document.write("String: ", string, "<br>");

// _________________________________________________________________________________________________

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var userName = prompt("Enter a username");
// for (var i = 0; i < userName.length; i++) {
//   var currentLetter = userName[i]
//   if (
//     currentLetter.charCodeAt(0) === 33 ||
//     currentLetter.charCodeAt(0) === 44 ||
//     currentLetter.charCodeAt(0) === 46 ||
//     currentLetter.charCodeAt(0) === 64
//   ) {
//     alert("Please enter a valid username");
//   }
// }

// _________________________________________________________________________________________________

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchInput = prompt("Welcome to the ABC Bakery. What do you want to order sir/ma'am?");
// var searchInputLowerCase = searchInput.toLowerCase();
// var index = a.indexOf(searchInputLowerCase);
// if (index > 0) {
//   document.write(searchInput + " is <strong>available</strong> at index " + index + " in our bakery");
// } else {
//   document.write("We are sorry. " + searchInput + " is <strong>not available</strong> in our bakery");
// }

// _________________________________________________________________________________________________

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter your password");
// var containsAlphabet = false;
// var containsNumber = false;
// var validLength = false;
// var notStartsWithNumber = false;
// var currentLetterASCII;

// if (password.length >= 6) {
//   validLength = true;
// }
// if (!(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57)) {
//   notStartsWithNumber = true;
// }
// for (var i = 0; i < password.length; i++) {
//   currentLetterASCII = password[i].charCodeAt(0);
//   console.log(currentLetterASCII)
//   if ((currentLetterASCII >= 48) && (currentLetterASCII <= 57)) {
//     containsNumber = true;
//   }
//   if (((currentLetterASCII >= 65) && (currentLetterASCII <= 90)) || ((currentLetterASCII >= 97) && (currentLetterASCII <= 122))) {
//     containsAlphabet = true;
//   }
// }
// if ((!containsAlphabet || !containsNumber || !validLength || !notStartsWithNumber)) {
//   document.write("<h1>Password Invalid</h1>")
// }
// if (!(containsAlphabet)) {
//   document.write("Your password must contain at-least one alphabet", "<br>");
// }
// if (!(containsNumber)) {
//   document.write("Your password must contain at-least one number", "<br>");
// }
// if (!(validLength)) {
//   document.write("Your password must be at-least 6 characters long", "<br>");
// }
// if (!(notStartsWithNumber)) {
//   document.write("Your password can't not start with a number", "<br>");
// }

// _________________________________________________________________________________________________

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var uniArray = university.split("");
// for (var i = 0; i < uniArray.length; i++) {
//   document.write(uniArray[i], "<br>");
// }

// _________________________________________________________________________________________________

// 17. Write a program to display the last character of a user
// input.

// var userInput = prompt("Enter your input");
// document.write("User Input: ", userInput, "<br>", "Last character of input: ", userInput[userInput.length - 1], "<br>");

// _________________________________________________________________________________________________

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var string = "the quick brown fox jumps over the lazy dog";
// var count = 0;
// var strArray = string.split(" ");
// console.log(strArray)
// for (var i = 0; i < string.length; i++) {
//   console.log(strArray[i])
//   if (strArray[i] === "the") {
//     count++;
//   }
// }

// document.write("Text: ", string, "<br>");
// document.write("There are ", count, " occourence(s) of the word 'the'");

// _________________________________________________________________________________________________

// CHAPTER 26-30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt("Enter a positive number");
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("Number: ", number, "<br>");
// document.write("Round off value: ", roundOff, "<br>");
// document.write("Floor value: ", floor, "<br>");
// document.write("Ceil value: ", ceil, "<br>");

// _________________________________________________________________________________________________

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt("Enter a negative number");
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("Number: ", number, "<br>");
// document.write("Round off value: ", roundOff, "<br>");
// document.write("Floor value: ", floor, "<br>");
// document.write("Ceil value: ", ceil, "<br>");

// _________________________________________________________________________________________________

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = prompt("Enter a number");
// var absolute = Math.abs(number);
// document.write("The absolute value of " + number + " is " + absolute);

// _________________________________________________________________________________________________

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + diceValue);

// _________________________________________________________________________________________________

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var tossValue = Math.floor(Math.random() * 2) + 1;
// document.write(tossValue, "<br>");
// if (tossValue === 1) {
//   document.write("Random coin value: Tails");
// }
// else if (tossValue === 2) {
//   document.write("Random coin value: Heads");
// }

// _________________________________________________________________________________________________

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber);

// _________________________________________________________________________________________________

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var age = prompt("Enter Your age: ");
var parsedAge = parseFloat(age);
// document.write("The weight of user is " + parsedAge + " kilograms");

// _________________________________________________________________________________________________

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// console.log(secretNumber)
// var userInput = +prompt("Guess the number");
// if (userInput === secretNumber) {
//   document.write("Congratulations!");
// } else {
//   document.write("Try Again!");
// }

// _________________________________________________________________________________________________

// CHAPTER 36-34

// 1. Write a program that displays current date and time in
// your browser.

// var date = new Date();
// document.write(date);

// _________________________________________________________________________________________________

// 2. Write a program that alerts the current month in words.
// For example December.

// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var month = new Date().getMonth();
// document.write("Current Month: " + monthNames[month]);

// _________________________________________________________________________________________________

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var day = new Date().getDay();
// var dayName = days[day];
// document.write("Today is " + dayName);

// _________________________________________________________________________________________________

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var day = new Date().getDay();
// if (day === 0 || day === 6) {
//   document.write("It's Fun day")
// }

// _________________________________________________________________________________________________

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date().getDate();
// if (date < 16) {
//   document.write("First fifteen days of the month");
// }
// else if (date < 32) {
//   document.write("Last fifteen days of the month");
// }

// _________________________________________________________________________________________________

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var elapsedMiliSeconds = Date.now();
// var currentDate = new Date(Date.now());
// var specificDate = new Date(1970, 0, 1);
// document.write("Current Date: ", currentDate, "<br>");
// document.write("Elapsed miliseconds since January 1, 1970: ", elapsedMiliSeconds, "<br>");
// document.write("Elapsed minutes since January 1, 1970: ", elapsedMiliSeconds / 6400);

// _________________________________________________________________________________________________

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var hours = new Date().getHours();
// if (hours <= 12) {
//   document.write("It's AM");
// } else {
//   document.write("It's PM")
// }

// _________________________________________________________________________________________________

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate, "<br>");

// _________________________________________________________________________________________________

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadanDateDays = new Date(2015, 5, 1);
// var currentDate = new Date();
// var numberOfDays = Math.ceil((currentDate - ramadanDateDays) / 8.64e7);
// document.write(numberOfDays + " have passed sinse 1st Ramadan, 2015");

// _________________________________________________________________________________________________

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var referenceDate = new Date();
// var referenceDateSeconds = referenceDate.getTime() / 1000;
// var specificDate = new Date(2015, 0, 1);
// console.log(referenceDateSeconds)
// var specificDateSeconds = specificDate.getTime() / 1000;
// console.log(specificDateSeconds)
// var secondsPassed = referenceDateSeconds - specificDateSeconds;
// document.write("On reference date " + referenceDate + ",<br>" + secondsPassed.toFixed(0) + " seconds have passed since " + specificDate);

// _________________________________________________________________________________________________

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDate = new Date();
// var hours = currentDate.getHours();
// var hourAdded = currentDate.setHours(currentDate.getHours() + 1);
// var hourAhead = new Date(hourAdded);
// document.write(hourAhead);

// _________________________________________________________________________________________________

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// var yearBack = new Date();
// yearBack.setFullYear(currentDate.getFullYear() - 100);
// document.write("Current date: " + currentDate + "<br>100 years back it was " + yearBack);

// _________________________________________________________________________________________________

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var userInput = +prompt("Enter your age");
// var currentDate = new Date();
// var currentDateYear = currentDate.getFullYear();
// var userBirthYear = currentDateYear - userInput;
// document.write("Your age is ", userInput, "<br> Your birth year is ", userBirthYear);

// _________________________________________________________________________________________________

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// var customerName = prompt("Enter your name");
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"]
// var currentMonth = new Date().getMonth();
// currentMonth = monthNames[currentMonth];
// var units = 410;
// var rate = 16;
// var subCharge = 350;
// var amountPayable = units * rate;
// var amountPayableAfterDate = amountPayable + subCharge;
// document.write("<h1>Customer Name</h1>", "<br>");
// document.write("Customer Name: <strong>" + customerName, "</strong><br>");
// document.write("Month: <strong>" + currentMonth, "</strong><br>");
// document.write("Number of units: <strong>" + units, "</strong><br>");
// document.write("Charges per unit: <strong>" + rate, "</strong><br>");
// document.write("Net Amount Payable (within Due Date): <strong>" + amountPayable, "</strong><br>");
// document.write("Late payment subcharge: <strong>" + subCharge, "</strong><br>");
// document.write("Gross Amount Payable (after Due Date): <strong>" + amountPayableAfterDate, "</strong><br>");

// _________________________________________________________________________________________________

// CHAPTER 35-38

// 1. Write a function that displays current date & time in your
// browser.

// function showDate() {
//   var date = new Date();
//   document.write(date);
// }
// showDate();

// _________________________________________________________________________________________________

// 2. Write a function that takes first & last name and then it
// greets the user using his full name

// function greet() {
//   var firstName = prompt("Enter your first name");
//   var lastName = prompt("Enter your last name");
//   alert("Hello " + firstName + " " + lastName);
// }
// greet();

// _________________________________________________________________________________________________

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum() {
//   var firstNumber = prompt("Enter first number");
//   var secondNumber = prompt("Enter second number");
//   var sum = firstNumber + secondNumber;
//   return sum;
// }
// sum();

// _________________________________________________________________________________________________

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculate(num1, num2, op) {
//   console.log(num1, num2, op)
//   switch (op) {
//     case "+":
//       console.log("Falled in switch")
//       return (num1 + num2);
//     case "-":
//       return (num1 - num2);
//     case "*":
//       return (num1 * num2);
//     case "/":
//       return (num1 / num2);
//     default:
//       return "Invalid Input";
//   }
// }
// var number1 = +prompt("Enter First number");
// var number2 = +prompt("Enter Second number");
// var operator = prompt("Enter the operator (valid inputs are : +, -, *, /)");
// var result = calculate(number1, number2, operator);
// document.write(result);

// _________________________________________________________________________________________________

// 5. Write a function that squares its argument.

// function square(num) {
//   return num ** 2;
// }
// document.write("Num: 5<br>Square: " + square(5));

// _________________________________________________________________________________________________

// 6. Write a function that computes factorial of a number.

// function fact(num) {
//   var factorial = 1;
//   for (var i = num; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }
// document.write("Num: 5", "<br>", "Factorial: ", fact(5));

// _________________________________________________________________________________________________

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function count() {
//   var start = +prompt("Enter the start number");
//   var end = +prompt("Enter the end number");
//   document.write("Start number: " + start + "<br>End number: " + end + "<br>")
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// count();

// _________________________________________________________________________________________________

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular) {
//   function square(num) {
//     return num ** 2;
//   }

//   var hypotenuse2 = square(base) + square(perpendicular);
//   var hypotenuse = Math.sqrt(hypotenuse2);
//   return hypotenuse;
// }

// var baseInput = +prompt("Enter the base of right angled triangle");
// var perpendicularInput = +prompt("Enter the perpendiculat of the right andled triangle");
// document.write("Base: " + baseInput + "<br>Perpendicular: " + perpendicularInput + "<br>" + calculateHypotenuse(baseInput, perpendicularInput));

// _________________________________________________________________________________________________

// 9. Write a function that calculates the area of a rectangle.

// A = width * height

// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(width, height) {
//   var area = width * height;
//   document.write("Width: " + width + "<br>Height: " + height + "<br>Area: " + area + "<br><br>");
// }
// var w = 10;
// var h = 4;
// area(5, 6);
// area(w, h);

// _________________________________________________________________________________________________

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function palindrome(word) {
//   var reversedWord = "";
//   for (var i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
//   }

//   if (word === reversedWord) {
//     document.write("The word is a palindrome");
//   } else {
//     document.write("The word is not a palindrome");
//   }
// }
// palindrome("madam");

// **************************************************************************

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function titleCase(string) {
//   var stringArray = string.split(" ");
//   var transformedArray = [];
//   for (var i = 0; i < stringArray.length; i++) {
//     transformedArray[i] = stringArray[i][0].toUpperCase();
//     console.log(transformedArray[i])
//     transformedArray[i] = transformedArray[i] + stringArray[i].slice(1)
//   }
//   return transformedArray;
// }
// console.log(titleCase("this is a sentence"));

// _________________________________________________________________________________________________

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longest(string) {
//   var stringArray = string.split(" ");
//   var longestWord = stringArray[0];
//   for (var i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].length > longestWord.length) {
//       longestWord = stringArray[i]
//     }
//   }
//   return longestWord;
// }
// alert(longest("Web Development Tutorial"))

// _________________________________________________________________________________________________

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments: 'JSResourceS.com', 'o'

// function countOccurence(string, letter) {
//   var occurrences = 0
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === letter) {
//       occurrences += 1;
//     }
//   }
//   return occurrences;
// }
// alert(countOccurence("JSResourceS.com", "o"));

// _________________________________________________________________________________________________

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(r) {
//   var circumference = 2 * (22 / 7) * r;
//   document.write("The circumference is " + circumference + "<br>");
// }
// function calcArea(r) {
//   var area = ((22 / 7) * (r ** 2));
//   document.write("The area is " + area);
// }
// calcCircumference(5);
// calcArea(5)

// _________________________________________________________________________________________________

// CHAPTER 38-42

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//   return a ** b;
// }
// alert(power(2, 3));

// _________________________________________________________________________________________________

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function isLeap(year) {
//   var d = new Date(year, 1, 29);
//   if (d.getDate() === 29) {
//     alert("This year is a leap year");
//   } else {
//     alert("This year is not a leap year");
//   }
// }
// isLeap(2020);

// _________________________________________________________________________________________________

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function area(a, b, c) {
//   function s(a, b, c) {
//     return (a + b + c) / 2;
//   }
//   var s = s(a, b, c);
//   return s * (s - a) * (s - b) * (s - c);
// }
// alert(area(2, 3, 4));

// _________________________________________________________________________________________________

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function averageOf(sub1, sub2, sub3) {
//   return (sub1 + sub2 + sub3) / 3;
// }
// function percentageOf(sub1, sub2, sub3, totalMarks) {
//   return ((sub1 + sub2 + sub3) / totalMarks) * 100;
// }
// (function mainFunction() {
//   var sub1 = +prompt("Enter marks of subject 1");
//   var sub2 = +prompt("Enter marks of subject 2");
//   var sub3 = +prompt("Enter marks of subject 3");
//   alert(
//     "The average marks are: " +
//       averageOf(sub1, sub2, sub3) +
//       ", whereas the percentage is: " +
//       percentageOf(sub1, sub2, sub3, 300) +
//       "%"
//   );
// })();

// _________________________________________________________________________________________________

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function myIndexOf(char, str) {
//   for (var i = 0; i < str.length; i++) {
//     if (char === str[i]) {
//       return i;
//     }
//   }
// }
// var ch = prompt("Enter the character");
// var st = prompt("Enter the string");
// alert("The index of letter " + ch + " in " + st + " is " + myIndexOf(ch, st));

// _________________________________________________________________________________________________

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function removeVowel(str) {
//   if (str.length > 25) {
//     alert("The length of string is more than 25 characters");
//     return;
//   }
//   var strArray = str.split("");
//   strArray = strArray.filter(function (currChar) {
//     return !(
//       currChar === "a" ||
//       currChar === "e" ||
//       currChar === "i" ||
//       currChar === "o" ||
//       currChar === "u" ||
//       currChar === "A" ||
//       currChar === "E" ||
//       currChar === "I" ||
//       currChar === "O" ||
//       currChar === "U"
//     );
//   });
//   var strAltered = strArray.join("");
//   return strAltered;
// }
// var sentence = "This is a ran    dom sentence";
// alert("Before: " + sentence);
// if (removeVowel(sentence)) {
//   alert("After :" + removeVowel(sentence));
// }

// _________________________________________________________________________________________________

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// function consecutiveVowelPointer(str) {
//   var pointerArray = [];
//   for (var i = 0; i < str.length - 1; i++) {
//     var chars = str[i] + str[i + 1];
//     switch (chars) {
//       case "aa":
//         pointerArray.push("aa");
//         break;
//       case "ae":
//         pointerArray.push("ae");
//         break;
//       case "ai":
//         pointerArray.push("ai");
//         break;
//       case "ao":
//         pointerArray.push("ao");
//         break;
//       case "au":
//         pointerArray.push("au");
//         break;
//       case "ea":
//         pointerArray.push("ea");
//         break;
//       case "ee":
//         pointerArray.push("ee");
//         break;
//       case "ei":
//         pointerArray.push("ei");
//         break;
//       case "eo":
//         pointerArray.push("eo");
//         break;
//       case "eu":
//         pointerArray.push("eu");
//         break;
//       case "ia":
//         pointerArray.push("ia");
//         break;
//       case "ie":
//         pointerArray.push("ie");
//         break;
//       case "ii":
//         pointerArray.push("ii");
//         break;
//       case "io":
//         pointerArray.push("io");
//         break;
//       case "iu":
//         pointerArray.push("iu");
//         break;
//       case "oa":
//         pointerArray.push("oa");
//         break;
//       case "oe":
//         pointerArray.push("oe");
//         break;
//       case "oi":
//         pointerArray.push("oi");
//         break;
//       case "ou":
//         pointerArray.push("ou");
//         break;
//       case "ua":
//         pointerArray.push("ua");
//         break;
//       case "ue":
//         pointerArray.push("ue");
//         break;
//       case "ui":
//         pointerArray.push("ui");
//         break;
//       case "uo":
//         pointerArray.push("uo");
//         break;
//       case "uu":
//         pointerArray.push("uu");
//         break;
//     }
//   }
//   var userFriendlyMessage =
//     "The occurrencies of two vowels in a succession are: ";
//   for (var j of pointerArray) {
//     if (j === pointerArray[pointerArray.length - 1]) {
//       return (userFriendlyMessage += j + ".");
//     }
//     userFriendlyMessage += j + ", ";
//   }
//   return userFriendlyMessage;
// }
// alert(consecutiveVowelPointer("Thaies ios ae riandom stroing"));

// _________________________________________________________________________________________________

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var distance = +prompt("Enter the distance between two cities");
// function toMeters(distance) {
//   return distance * 1000;
// }
// function toFeet(distace) {
//   return distance * 3281;
// }
// function toInches(distance) {
//   return distance * 39370;
// }
// function toCentimeters(distace) {
//   return distance * 100000;
// }
// alert(
//   distance +
//     "km in meters is " +
//     toMeters(distance) +
//     ", in feet is " +
//     toFeet(distance) +
//     ", in inches is " +
//     toInches(distance) +
//     " and in centimeteres is " +
//     toCentimeters(distance)
// );

// _________________________________________________________________________________________________

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function overTimePay(hours) {
//   var overTimeHours = hours - 40;
//   return overTimeHours * 12;
// }
// var hoursWorked = +prompt("Enter the total hours that employee has worked");
// alert("The overtime that should be paid is: " + overTimePay(hoursWorked));

// _________________________________________________________________________________________________

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// function noteCalculator(amount) {
//   var amountLeft = amount;
//   var hundreds = Math.floor(amount / 100);
//   amountLeft -= hundreds * 100;
//   var fifties = Math.floor(amountLeft / 50);
//   amountLeft -= fifties * 50;
//   var tens = Math.floor(amountLeft / 10);
//   alert(
//     "You will have " +
//       hundreds +
//       " hundred note(s), " +
//       fifties +
//       " fifty note(s) and " +
//       tens +
//       " ten note(s)"
//   );
// }

// noteCalculator(+prompt("Enter the amount:"));

// _________________________________________________________________________________________________

// CHAPTER 43-48

function alertOpener() {
  alert("You clicked me!");
}

// 1. Show an alert box on click on a link.

var alertLink = document.getElementById("show-alert");
alertLink.addEventListener("click", alertOpener);

// _________________________________________________________________________________________________

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

var images = document.querySelectorAll(".mobile-container > img");
for (var image of images) {
  image.addEventListener("click", function () {
    alert("Thanks for purchasing an item from us");
  });
}

// _________________________________________________________________________________________________

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

var tableButtons = document.querySelectorAll("table button");
for (var button of tableButtons) {
  button.addEventListener("click", function () {
    var respectiveRow = this.parentNode.parentNode;
    respectiveRow.remove();
  });
}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

document
  .querySelector(".dynamic-bulb")
  .addEventListener("mouseover", function () {
    this.setAttribute("src", "assets/buld-on.jpg");
  });

document
  .querySelector(".dynamic-bulb")
  .addEventListener("mouseout", function () {
    this.setAttribute("src", "assets/buld-off.jpg");
  });

// _________________________________________________________________________________________________

//   5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

document
  .getElementById("counter-decrement")
  .addEventListener("click", function () {
    var count = +document.querySelector(".counter-holder").innerHTML;
    document.querySelector(".counter-holder").innerHTML = count - 1;
  });

document
  .getElementById("counter-increment")
  .addEventListener("click", function () {
    var count = +document.querySelector(".counter-holder").innerHTML;
    document.querySelector(".counter-holder").innerHTML = count + 1;
  });

// CHAPTER 49-52

// _________________________________________________________________________________________________

// 1. Create a signup form and display form data in your web
// page on submission.

function formSubmitHandler(event) {
  // alert(event);
  event.preventDefault();
  console.log(event);
  var firstName = document.querySelector("#f-name").value;
  var lastName = document.querySelector("#l-name").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  alert(
    "First name: " +
      firstName +
      " Last name: " +
      lastName +
      " Email: " +
      email +
      " Password: " +
      password
  );
}

// _________________________________________________________________________________________________

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function readMore() {
  document.getElementById("more-content").style.display = "block";
}

// _________________________________________________________________________________________________

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

var deleteButtons = document.querySelectorAll("table .delete");
var editButtons = document.querySelectorAll("table .edit");
for (var deleteButton of deleteButtons) {
  deleteButton.addEventListener("click", function () {
    var respectiveRow = this.parentNode.parentNode;
    respectiveRow.remove();
  });
}
for (var editButton of editButtons) {
  editButton.addEventListener("click", function () {
    var secretForm = document.querySelector(".secret-form");
    secretForm.style.display = "block";
    secretForm.children[1].value = this.parentNode.parentNode.children[1].innerHTML;
    secretForm.children[3].value = this.parentNode.parentNode.children[2].innerHTML;
    console.log(this.parentNode.parentNode.children[1].innerHTML);
    console.log(this.parentNode.parentNode.children[2].innerHTML);
  });
}

// _________________________________________________________________________________________________

// CHAPTER

// CHAPTER 58-67

// 1. Consider you have following code snippet:
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

var mainContent = document.getElementById("main-content");
var mainContentInner = mainContent.cloneNode(true);

document.getElementsByTagName("body")[0].append(mainContentInner);

var renderEls = document.getElementsByClassName("render");

for (var i = 0; i < renderEls.length; i++) {
  document.write(renderEls[i].innerHTML, "<br>");
}

var firstName = document.getElementById("first-name");
firstName.value = "Muhammad Tayyab";

var lastName = document.getElementById("last-name");
lastName.value = "Ferozi";

var email = document.getElementById("email");
email.value = "ferozitayyab@gmail.com";

// _________________________________________________________________________________________________

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

var formContent = document.getElementById("form-content");

// alert("The node type of #form-content is: " + formContent.nodeType);

var lastName = document.getElementById("lastName");
var lastNameChild = lastName.childNodes[0];

// alert("The node type of #lastName is: " + lastName.nodeType);
// alert("The node type of #lastName child is: " + lastNameChild.nodeType);

var mainContent = document.getElementById("main-content");
var mainContentFirst = mainContent.firstElementChild;
var mainContentLast = mainContent.lastElementChild;

var lastNameNext = lastName.nextElementSibling;
var lastNamePrevious = lastName.previousElementSibling;

var emailParent = email.parentElement;
var emailNodeType = email.nodeType;

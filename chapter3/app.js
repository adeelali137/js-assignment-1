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
let visitsNumber = localStorage.getItem('visits');
visitsNumber++;
localStorage.setItem('visits', visitsNumber);

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
document.write("<strong>" + visitorsName + "</strong> ordered <strong>" + quantity + " " + producTitle + "</strong>" + "(s) on XYZ Clothing Store");

// ______________________________________________________________________________________
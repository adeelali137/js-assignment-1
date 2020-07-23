// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var x = 15, y = 4, z;
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
a %= 3
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

for (var i = 1; i < + 10; i++) {
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
var convertedCelciusTemp = (celciusTemp * (9 / 5)) + 32;
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
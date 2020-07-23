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
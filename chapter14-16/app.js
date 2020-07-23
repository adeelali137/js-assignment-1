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
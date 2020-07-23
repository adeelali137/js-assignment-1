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

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

var subject1 = prompt("Enter name of 1st subject:");
var subject2 = prompt("Enter name of 2nd subject:");
var subject3 = prompt("Enter name of 3rd subject:");
var totalMarks = 100;
var marks1 = +prompt("Enter marks for the 1st subject:");
var marks2 = +prompt("Enter marks for the 2nd subject:");
var marks3 = +prompt("Enter marks for the 3rd subject:");

// var subjectHolders = document.querySelectorAll(".subject-holder");
// var obtainedMarksHolders = document.querySelectorAll(".obtmarks-holder");
// subjectHolders[0].innerHTML = subject1;
// subjectHolders[1].innerHTML = subject2;
// subjectHolders[2].innerHTML = subject3;
// obtainedMarksHolders[0].innerHTML = marks1;
// obtainedMarksHolders[1].innerHTML = marks2;
// obtainedMarksHolders[2].innerHTML = marks3;

document.write("<table>"); //table
document.write("<thead>"); // table head
document.write("<tr>"); // 1st row
document.write("<th>", "Subject");
document.write("</th>");
document.write("<th>", "Total Marks");
document.write("</th>");
document.write("<th>", "Obtained Marks");
document.write("</th>");
document.write("<th>", "Percentage");
document.write("</th>");
document.write("</tr>"); // 1st row closed
document.write("</thead>"); // table head closed
document.write("<tbody>"); // table body
document.write("<tr>"); // 2nd row
document.write("<td>", subject1);
document.write("</td>");
document.write("<td>", totalMarks);
document.write("</td>");
document.write("<td>", marks1);
document.write("</td>")
document.write("<td>", ((marks1 / totalMarks) * 100), "%");
document.write("</td>")
document.write("</tr>"); // 2nd row closed
document.write("<tr>"); // 3rd row
document.write("<td>", subject2);
document.write("</td>");
document.write("<td>", totalMarks);
document.write("</td>");
document.write("<td>", marks2);
document.write("</td>");
document.write("<td>", ((marks2 / totalMarks) * 100), "%");
document.write("</td>")
document.write("</tr>"); // 3rd row closed
document.write("<tr>"); // 4th row
document.write("<td>", subject3);
document.write("</td>");
document.write("<td>", totalMarks);
document.write("</td>");
document.write("<td>", marks3);
document.write("</td>");
document.write("<td>", ((marks3 / totalMarks) * 100), "%");
document.write("</td>")
document.write("</tr>"); // 4th row closed
document.write("</tbody>"); // table body closed
document.write("<tfoot>"); // table footer
document.write("</tr>"); // 5th row
document.write("<th>");
document.write("</th>");
document.write("<th>", totalMarks + totalMarks + totalMarks);
document.write("</th>");
document.write("<th>", marks1 + marks2 + marks3);
document.write("</th>");
document.write("<th>", ((marks1 + marks2 + marks3) / (totalMarks + totalMarks + totalMarks)) * 100, "%");
document.write("</th>");
document.write("</tr>"); // 5th row closed
document.write("</tfoot>"); // table footer closed
document.write("</table>"); //table closed

console.log(marks1)
console.log(marks2)
console.log(marks3)
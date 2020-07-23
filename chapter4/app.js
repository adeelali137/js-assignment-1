// 1. Declare 3 variables in one statement.

var a = 5, b = 6, c = 7;

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

document.write("<h1>Rules for naming JS variables</h1><br><br><br>");
document.write("Variable names can only contain " + letters + ", " + numbers + ", " + dollar + " and " + underScore + ". For example $my_1stVariable<br>");
document.write("Variable must begin with a " + letter + ", " + dollar + " or " + underScore + ". For example $name, _name or name<br>");
document.write("Variable names are case " + sensitive + "<br>");
document.write("Variable names should not be JS " + keywords);

// ______________________________________________________________________________________

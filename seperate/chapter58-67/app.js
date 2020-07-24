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

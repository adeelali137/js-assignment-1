// 1. Consider you have following code snippet:
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

var mainContent = document.getElementById("main-content");
var mainContentInner = mainContent.innerHTML;

document.getElementsByTagName("body")[0].append(mainContentInner);

// _________________________________________________________________________________________________

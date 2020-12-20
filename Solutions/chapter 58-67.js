/*-----------------------------------------CHAPTER 58-67 ------------------------------------------ */

/* ------- QUESTION 1 ------- */

var element = document.getElementById("main-content");
console.log(element);

/* 1.1 */

var inner = element.children;
console.log(inner);

/* 1.2 */

var ren = element.getElementsByClassName("render");
console.log(ren);

/* 1.3 */

document.getElementById("first-name").value = "Huzaifa Ibrahim";

/* 1.4 */

document.getElementById("last-name").value = "Muhammad Ibrahim";

/* 1.5 */

document.getElementById("email").value = "abc@example.com";


/* ------- QUESTION 2 ------- */

/* 2.1 */

var x = document.getElementById("form-content").nodeType;
console.log(x)

/* 2.2 */

var y = document.getElementById("lastName").nodeType;
console.log(y)
var y = document.getElementById("lastName").childNodes.nodeType;
console.log(y)


/* 2.3 */

var y = document.getElementById("lastName").childNodes;
console.log(y)

/* 2.4 */

var element = document.getElementById("main-content").firstChild;
console.log(element);
var element = document.getElementById("main-content").lastChild;
console.log(element);

/* 2.5 */

var y = document.getElementById("last-name").nextSibling;
console.log(y)
var y = document.getElementById("last-name").previousSibling;
console.log(y)

/* 2.6 */

var y = document.getElementById("email").parentNode;
console.log(y)
var y = document.getElementById("email").nodeType;
console.log(y)
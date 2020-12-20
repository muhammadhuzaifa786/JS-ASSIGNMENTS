/*------------------------------------------CHAPTER 12-13------------------------------------------------- */

/* ----------- Question 1 ----------- */
document.write("<br><br>"+"Question 1"+"<br><br>");


var ch = prompt("Enter Character  (Question 1)");

if (ch >= 'A' && ch <= 'Z') {
    document.write("Character is a capital letter"+"<br>");
} else if (ch >= 'a' && ch <= 'z') {
    document.write("Character is a small letter"+"<br>");
} else if (ch >= 0 && ch <= 99999999999) {
    document.write("Character is a Number"+"<br>");
}

/* ----------- Question 2 ----------- */
document.write("<br><br>"+"Question 2"+"<br><br>");

var int1 = prompt("Enter First Integer:  (Question 2)");
var int2 = prompt("Enter Second Integer:  (Question 2)");

if(int1 > int2){
    document.write(int1+" is greater than "+int2+"<br>");
}else if(int1 < int2){
    document.write(int2+" is greater than "+int1+"<br>");
}else if(int1 === int2){
    document.write(int1+" is equal to "+int2+"<br>");
}

/* ----------- Question 3 ----------- */
document.write("<br><br>"+"Question 3"+"<br><br>");

var int = prompt("Enter Integer:  (Question 3)");

if(int < 0){
    document.write(int+" is a negative value"+"<br>");
}else if(int > 0){
    document.write(int+" is a positive value"+"<br>");
}else if(int == 0){
    document.write(int+" is a 0 value"+"<br>");
}

/* ----------- Question 4 ----------- */
document.write("<br><br>"+"Question 4"+"<br><br>");

var vowel = prompt("Enter Character for checking it is vowel or not:  (Question 4)");

if(vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u'){
    document.write("True. "+vowel+" is a vowel"+"<br>");
}else{
    document.write("False. "+vowel+" is a not vowel"+"<br>");
}


/* ----------- Question 5 ----------- */
document.write("<br><br>"+"Question 5"+"<br><br>");

var correctPassword =  "abc123";

var password = prompt("Enter password:  (Question 5)");

if(password == ""){
    document.write("Plaese Enter Password");
}else if(password == correctPassword){
    document.write("Correct! The password you entered matches the original password");
}else if(password != correctPassword){
    document.write("Incorrect password");
}

/* ----------- Question 6 ----------- */
document.write("<br><br>"+"Question 6"+"<br><br>");

var greeting; 
var hour = 13; 

if (hour < 18) { 
    greeting = "Good day"; 
    document.write(greeting)
}else{
    greeting = "Good evening"; 
    document.write(greeting)
} 
 

/* ----------- Question 7 ----------- */
document.write("<br><br>"+"Question 7"+"<br><br>");


var time = prompt("Enter time in 24 hour format like (1900)  (Question 7)");

if(time >= 0000 && time < 1200){
    document.write("Good Morning");
}else if(time >= 1200 && time < 1700){
    document.write("Good  Afternoon");
}else if(time >= 1700 && time < 2100){
    document.write("Good Evening");
}else if(time >= 2100 && time < 2359){
    document.write("Good Night");
}
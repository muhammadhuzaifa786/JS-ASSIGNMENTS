/*------------------------------------------CHAPTER 14-16------------------------------------------------- */

/* ----------- Question 1 ----------- */
document.write("<br><br>"+"Question 1 is only code check script"+"<br><br>");

var sutdentNames = [];

/* ----------- Question 2 ----------- */
document.write("<br><br>"+"Question 2 is only code check script "+"<br><br>");

var sutdentNames = new Array ();

/* ----------- Question 3 ----------- */
document.write("<br><br>"+"Question 3 is only code check script "+"<br><br>");

var cars = ["Toyota", "Ferrari", "BMW"];

/* ----------- Question 4 ----------- */
document.write("<br><br>"+"Question 4 is only code check script "+"<br><br>");

var numbers = [1,2,3,4,5];


/* ----------- Question 5 ----------- */
document.write("<br><br>"+"Question 5 is only code check script "+"<br><br>");

var boolArray = [true,false];

/* ----------- Question 6 ----------- */
document.write("<br><br>"+"Question 6 is only code check script "+"<br><br>");

var mixedArray = ["Toyota", 1, "BMW", true];

/* ----------- Question 7 ----------- */


var education = ["SSC","HSC","BCS","BS","BCOM","MS,M.Phil","PhD"];

document.getElementById("demo").innerHTML = 'Question 7<h1>Qualification</h1><ol><li>' + education.join("</li><li>"); + '</li></ol>';

/* ----------- Question 8 ----------- */
document.write("<br><br>"+"Question 8 "+"<br><br>");

var student = ["Huzaifa","Ali","Bilal"];
var scores = [480,250,360];

document.write("Score Of "+student[0]+" Is "+scores[0]+" .Percentage Is "+scores[0]*100/500+"<br>");
document.write("Score Of "+student[1]+" Is "+scores[1]+" .Percentage Is "+scores[1]*100/500+"<br>");
document.write("Score Of "+student[2]+" Is "+scores[2]+" .Percentage Is "+scores[2]*100/500+"<br>");

/* ----------- Question 9 ----------- */
document.write("<br><br>"+"Question 9 "+"<br><br>");

var colorNames = [];
var biggeningcolor = prompt("Enter the color to insert at the begining of array (QUESTION 9)");
var endcolor = prompt("Enter the color to insert at the end of array (QUESTION 9)");
colorNames.unshift(biggeningcolor);
colorNames.push(endcolor);
document.write(colorNames+"<br>");
colorNames.unshift("purple");
colorNames.unshift("blue");
document.write(colorNames+"<br>");
colorNames.shift();
colorNames.pop();
document.write(colorNames+"<br>");
var addposition = prompt("Enter the position at which you want to add color (QUESTION 9)");
var colorvalue = prompt("Enter the color to insert at your desired position (QUESTION 9)");
colorNames.splice(addposition, 0, colorvalue);
document.write(colorNames+"<br>");
var delposition = prompt("Enter the position at which you want to delete color (QUESTION 9)");
var countColors = prompt("How many color do you want to delete from your desired position (QUESTION 9)");
colorNames.splice(delposition, countColors);
document.write(colorNames+"<br>");





/* ----------- Question 10 ----------- */
document.write("<br><br>"+"Question 10 "+"<br><br>");

var score = [480,250,360];
var sorted = score.sort();
document.write(sorted+"<br>");


/* ----------- Question 11 ----------- */
document.write("<br><br>"+"Question 11 "+"<br><br>");

var cities = ["Karachi","Lahore","Multan","Peshawar","Quetta","Islamabad"];
document.write("<br>Cities List. <br>"+cities+"<br>");
var newCities = cities.slice(0,2)
var selectedCities = [newCities];
document.write("<br>Selected Cities List. <br>"+selectedCities+"<br>");

/* ----------- Question 12 ----------- */
document.write("<br><br>"+"Question 12 "+"<br><br>");

var arr = ["This", "is ", "my ", "cat"];
var concat = arr.join("  ");

document.write(concat+"<br>");

/* ----------- Question 13 ----------- */
document.write("<br><br>"+"Question 13 "+"<br><br>");

var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");

document.write("Devices<br>"+devices+"<br>")

document.write("<br>"+"Out"+"<br>")
var pop1 = devices.shift();
document.write(pop1);
document.write("<br>"+"Out"+"<br>")
var pop2 = devices.shift();
document.write(pop2);
document.write("<br>"+"Out"+"<br>")
var pop3 = devices.shift();
document.write(pop3);
document.write("<br>"+"Out"+"<br>")
var pop4 = devices.shift();
document.write(pop4);

/* ----------- Question 14 ----------- */
document.write("<br><br>"+"Question 14 "+"<br><br>");

var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");

document.write("Devices<br>"+devices+"<br>")

document.write("<br>"+"Out"+"<br>")
var pop1 = devices.pop();
document.write(pop1);
document.write("<br>"+"Out"+"<br>")
var pop2 = devices.pop();
document.write(pop2);
document.write("<br>"+"Out"+"<br>")
var pop3 = devices.pop();
document.write(pop3);
document.write("<br>"+"Out"+"<br>")
var pop4 = devices.pop();
document.write(pop4);


/* ----------- Question 15 ----------- */
document.write("<br><br>"+"Question 15 is on top of the page "+"<br><br>");

var select = document.getElementById("selectNumber"); 
var options = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]; 


select.innerHTML = "";

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}


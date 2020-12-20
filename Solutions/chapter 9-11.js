/*------------------------------------------CHAPTER 9-11------------------------------------------------- */

/* ----------- Question 1 ----------- */
document.write("Question 1 "+"<br><br>");

var city = prompt("Enter City  (QUESION NO 1)");

if(city == "karachi"){
    alert("Welcome to the city of lights");
    document.write("Welcome to the city of lights"+"<br>");
}else{
    alert("Welcome to "+city);
    document.write("Welcome to "+city+"<br>");
}

/* ----------- Question 2 ----------- */
document.write("<br><br>"+"Question 2 "+"<br><br>");

var gender = prompt("Enter Gender  (QUESTION 2)");

if(gender == "male"){
    alert(" Good Morning Sir");
    document.write(" Good Morning Sir"+"<br>");
}else if(gender == "female"){
    alert(" Good Morning Ma’am");
    document.write(" Good Morning Ma’am "+"<br>");
}else{
    alert(" Please mention right gender");
    document.write("Please mention right gender"+"<br>");
}

/* ----------- Question 3 ----------- */
document.write("<br><br>"+"Question 3 "+"<br><br>");

var signal = prompt("Enter Signal Color  (QUESTION 3)");

if(signal == 'red'){
    alert(" Must Stop");
    document.write(" Must Stop"+"<br>");
}else if(signal == 'yellow'){
    alert(" Ready To Move");
    document.write(" Ready To Move"+"<br>");
}else if(signal == 'green'){
    alert(" Move Now");
    document.write(" Move Now"+"<br>");
}else{
    alert(" Please mention right signal color");
    document.write("Please mention right signal color"+"<br>");
}

/* ----------- Question 4 ----------- */
document.write("<br><br>"+"Question 4 "+"<br><br>");

var fuel = prompt("Enter Remaining Fuel  (QUESTION 4)");

if(fuel < 0.25){
    alert(" Please refill the fuel in your car");
    document.write(" Please refill the fuel in your car"+"<br>");
}else{
    alert(" You are good to go with your car");
    document.write("You are good to go with your car"+"<br>");
}


/* ----------- Question 5 ----------- */
document.write("<br><br>"+"Question 5 is in alerts"+"<br><br>");

var a = 4; 
if (++a === 5){ alert("given condition for variable a is true"); } 
 
var b = 82; 
if (b++ === 83){ alert("given condition for variable b is true"); } 
 
var c = 12; 
if (c++ === 13){ alert("condition 1 is true"); } 
if (c === 13){ alert("condition 2 is true"); } 
if (++c < 14){ alert("condition 3 is true"); } 
if(c === 14){ alert("condition 4 is true"); } 

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 

if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 

if (true){ alert("True"); } if (false){ alert("False"); } 

if("car" < "cat"){ alert("car is smaller than cat"); } 


/* ----------- Question 6 ----------- */
document.write("<br><br>"+"Question 6 "+"<br><br>");


var subject1Marks = prompt("Enter Marks Of Subject 1");
var subject2Marks = prompt("Enter Marks Of Subject 2");
var subject3Marks = prompt("Enter Marks Of Subject 3");
var totalMarks = prompt("Enter Total Marks");
var subject1Marks = parseInt(subject1Marks); 
var subject2Marks = parseInt(subject2Marks); 
var subject3Marks = parseInt(subject3Marks); 
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var totalPercentage = totalObtainedMarks * 100 / totalMarks;

if(totalPercentage >= 80){
    var grade = "A one";
    var remarks = "Excellent";
}else if(totalPercentage >= 70){
    var grade = "A";
    var remarks = "Good";
}else if(totalPercentage >= 60){
    var grade = "B";
    var remarks = "You need to improve";
}else if(totalPercentage < 60){
    var grade = "Fail";
    var remarks = "Sorry";
}


document.write("<h1>Mark Sheet</h1><br>");
document.write("Total Marks = "+totalMarks+"<br>");
document.write("Marks Obtained = "+totalObtainedMarks+"<br>");
document.write("Percentage = "+totalPercentage+"<br>");
document.write("Grade = "+grade+"<br>");
document.write("Remarks = "+remarks+"<br>");
 
 

/* ----------- Question 7 ----------- */
document.write("<br><br>"+"Question 7 "+"<br><br>");
var secretNumber = 7;
var guessNumber = prompt("Guess The Secret Number (QUESTION 7)");

if(guessNumber == secretNumber){
    alert("Bingo! Correct answer");
    document.write("Bingo! Correct answer<br>");
}else if(guessNumber == ++secretNumber){
    alert("Close enough to the correct answer");
    document.write("“Close enough to the correct answer<br>");
}



/* ----------- Question 8 ----------- */
document.write("<br><br>"+"Question 8 "+"<br><br>");


var divisible = prompt("Enter Number  (QUESTION 8)");

if(divisible % 3 == 0){
    alert("The Number is divisible by 3");
    document.write("The number is divisible by 3<br>");
}else{
    alert("The Number is not divisible by 3");
    document.write("The number is not divisible by 3<br>");
}


/* ----------- Question 9 ----------- */
document.write("<br><br>"+"Question 9 "+"<br><br>");

var even = prompt("Enter Number  (QUESTION 9)");

if(even % 2 == 0){
    alert("The Number is even");
    document.write("The number is even<br>");
}else{
    alert("The Number is not even");
    document.write("The number is not even<br>");
}

/* ----------- Question 10 ----------- */
document.write("<br><br>"+"Question 10 "+"<br><br>");


var t = prompt("Enter Tempreture  (QUESTION 10)");

if(t > 40){
    alert("It is too hot outside");
    document.write("It is too hot outside<br>");
}else if(t > 30){
    alert("“The Weather today is Normal");
    document.write("“The Weather today is Normal<br>");
}else if(t > 20){
    alert("“Today’s Weather is cool");
    document.write("“Today’s Weather is cool<br>");
}else if(t > 10){
    alert("OMG! Today’s weather is so Cool");
    document.write("OMG! Today’s weather is so Cool<br>");
}else{
    alert("Please write correnct tempreture");
    document.write("Please write correnct tempreture<br>");
}


/* ----------- Question 11 ----------- */
document.write("<br><br>"+"Question 11 "+"<br><br>");


var val1 = prompt("Enter Value 1 for calculating  (Question 11)");
var val2 = prompt("Enter Value 2 for calculating  (Question 11)");
var op = prompt("Enter Operation (+ * - / %)  (Question 11)");

if(op == "+"){
    var result = val1 + val2;
    alert("Result of addition of "+val1+" and "+val2+" is "+result);
    document.write("Result of addition of "+val1+" and "+val2+" is "+result+"<br>");

}else if(op == "-"){
    var result = val1 - val2;
    alert("Result of Subtraction of "+val1+" and "+val2+" is "+result);
    document.write("Result of Subtraction of "+val1+" and "+val2+" is "+result+"<br>");
}else if(op == "*"){
    var result = val1 * val2;
    alert("Result of multiplication of "+val1+" and "+val2+" is "+result);
    document.write("Result of multiplication of "+val1+" and "+val2+" is "+result+"<br>");
}else if(op == "/"){
    var result = val1 / val2;
    alert("Result of division of "+val1+" and "+val2+" is "+result);
    document.write("Result of division of "+val1+" and "+val2+" is "+result+"<br>");
}else if(op == "%"){
    var result = val1 % val2;
    alert("Result of modulus of "+val1+" and "+val2+" is "+result);
    document.write("Result of modulus of "+val1+" and "+val2+" is "+result+"<br>");
}else{
    alert("Please write correct opearation");
    document.write("Please write correct opearation<br>");
}
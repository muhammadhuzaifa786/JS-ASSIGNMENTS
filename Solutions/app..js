/*----------------------------------------------CHAPTER 1---------------------------------------------------*/
/*----------------------------------------------CHAPTER 1---------------------------------------------------*/
/*----------------------------------------------CHAPTER 1---------------------------------------------------*/

/* ----------- Question 1 ----------- */

alert("Welcome To Saylani Welfare");

/* ----------- Question 2 ----------- */

alert("Error! Please enter a valid password.");

/* ----------- Question 3 ----------- */

alert("Welcome To The JS Land.  \nHappy Coding!");

/* ----------- Question 4 ----------- */

alert("Welcome To The JS Land.");
alert("Happy Coding!");

/* ----------- Question 5 ----------- */

alert("Hello.. I can run JS through my web browser console.");

/* ----------- Question 6 & 7 is completed in assignment 4----------- */




/*----------------------------------------------CHAPTER 2---------------------------------------------------*/
/*----------------------------------------------CHAPTER 2---------------------------------------------------*/
/*----------------------------------------------CHAPTER 2---------------------------------------------------*/




/* ----------- Question 1 ----------- */

var username;

/* ----------- Question 2 ----------- */

var myName = "Huzaifa Ibrahim";

/* ----------- Question 3 ----------- */

var message;
message = "Hello World";
alert(message);

/* ----------- Question 4 ----------- */

var name = "My Name IS Huzaifa Ibrahim";
var rollNo = "My Roll No Is WM4358";
var city = "I Live In Karachi";

alert(name);
alert(rollNo);
alert(city);

/* ----------- Question 5 ----------- */

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

/* ----------- Question 6 ----------- */

var email = "huzaifaibrahimpolice@gmail.com";
alert("My Email Address Is "+email);

/* ----------- Question 7 ----------- */

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book : "+book);

/* ----------- Question 8 ----------- */

document.write("Yes I can write content on my browser thourgh JS"+"<br>");

/* ----------- Question 9 ----------- */

alert("“▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬”");




/*----------------------------------------------CHAPTER 3---------------------------------------------------*/
/*----------------------------------------------CHAPTER 3---------------------------------------------------*/
/*----------------------------------------------CHAPTER 3---------------------------------------------------*/




/* ----------- Question 1 ----------- */

var age = 21;
alert("I am "+age+" years old");

/* ----------- Question 2 ----------- */

var counter =14;
alert("You have visited this site "+counter+" times");

/* ----------- Question 3 ----------- */

var birthYear = 1999;
document.write("My birth year is "+birthYear+"<br>");
var dataType = typeof(birthYear);
document.write("Data type of my birth year variable is  "+dataType+"<br>");

/* ----------- Question 4 ----------- */

var visitorName = "Huzaifa Ibrahim";
var quantity = 10;
var productName = "Watches";

document.write(visitorName+" ordered "+quantity+" "+productName+" form XYZ Clothing Store");





/*----------------------------------------------CHAPTER 4---------------------------------------------------*/
/*----------------------------------------------CHAPTER 4---------------------------------------------------*/
/*----------------------------------------------CHAPTER 4---------------------------------------------------*/




/* ----------- Question 1 ----------- */

var name, age , number;

/* ----------- Question 2 ----------- */

/* Legal Variables */
var name;
var age;
var phNo;
var address;
var country;

/* ILLegal Variables 
var 1name;
var @age;
var &phNo;
var *address;
var ^country; */

/* ----------- Question 3 ----------- */

document.write("<h1>"+"Rules For JS Variable Names"+"</h1><br>");
document.write("variable names can only contain numbers , $ and _. For example: $my_1stVaraible "+"<br>");
document.write("variable name begin with a letter, $ or _ . For Example : $name, _name or name"+"<br>");
document.write("variable names are case sensitive"+"<br>");
document.write("variable names should not be JS keywords"+"<br>");




/*------------------------------------------CHAPTER 5------------------------------------------------- */
/*------------------------------------------CHAPTER 5------------------------------------------------- */
/*------------------------------------------CHAPTER 5------------------------------------------------- */




/* ----------- Question 1 ----------- */
document.write("<br><br>"+"Question 1"+"<br><br>");1
var num1 = 10;
var num2 = 2;
var sum = num1 + num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum+"<br>");


/* ----------- Question 2 ----------- */
document.write("<br><br>"+"Question 2"+"<br><br>");
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;


document.write("Subtraction of "+num1+" and "+num2+" is "+sub+"<br>");
document.write("Multiplication of "+num1+" and "+num2+" is "+mul+"<br>");
document.write("Division of "+num1+" and "+num2+" is "+div+"<br>");
document.write("Modulus of "+num1+" and "+num2+" is "+mod+"<br>");


/* ----------- Question 3 ----------- */
document.write("<br><br>"+"Question 3"+"<br><br>");

var variable;
document.write("The value of the variable after declaration is "+variable+"<br>");
variable = 5;
document.write("Initial Value is "+variable+"<br>");
var increment = ++variable;
document.write("Valie after increment is "+increment+"<br>");
var addition = variable + 7;
document.write("Value after Addition is "+addition+"<br>");
var decrement = --addition;
document.write("The Value after Decrement is "+decrement+"<br>");
var remainder = decrement % 3;
document.write("The remainder is "+remainder+"<br>");


/* ----------- Question 4 ----------- */
document.write("<br><br>"+"Question 4"+"<br><br>");

var movieTicketPrice = 600;

var costOf5tICKETS = 600*5;

document.write("Total cost to buy 5 tickets to a movie is "+costOf5tICKETS+" PKR "+"<br>");

/* ----------- Question 5 ----------- */
document.write("<br><br>"+"Question 5"+"<br><br>");

var num = prompt("Enter Number")

var num = parseInt(num); 
var i = 0;

document.write('<table border="1" cellspacing="0">');
for(i=1;i<10;i++) {
    document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
}

document.write("</table>");

/* ----------- Question 6 ----------- */
document.write("<br><br>"+"Question 6"+"<br><br>");

var celciusTemp = prompt("Enter Celcius Temprature   (QUESTION 6)");
var fahrenheitTemp = prompt("Enter Celcius Temprature   (QUESTION 6)");

var fahrenheit = (celciusTemp * 9/5)+32;
var celcius = (fahrenheitTemp -32 ) * 5/9;

document.write(celciusTemp+"C is "+fahrenheit+"F"+"<br>");
document.write(fahrenheitTemp+"F is "+celcius+"C"+"<br>");

/* ----------- Question 7 ----------- */
document.write("<br><br>"+"Question 7"+"<br><br>");

var item1Price = 650;
var item2Price = 100;
var item1Quatity = 3;
var item2Quatity = 7;
var shippingCharges = 100;
var totalOfItem1 = item1Price * item1Quatity;
var totalOfItem2 = item2Price * item2Quatity;
var total = totalOfItem1 + totalOfItem2 + shippingCharges;

document.write("Price of item 1 is "+item1Price+"<br>");
document.write("Quantity of item 2 is "+item1Quatity+"<br>");
document.write("Price of item 1 is "+item2Price+"<br>");
document.write("Quantity of item 2 is "+item2Quatity+"<br>");
document.write("Shipping Charges is "+shippingCharges+"<br><br>");

document.write("Total cost of your order Is "+total+"<br>");

/* ----------- Question 8 ----------- */
document.write("<br><br>"+"Question 8"+"<br><br>");

var totalMarks = 100;
var studentMarks = 98;
var percentage = studentMarks*100 / totalMarks;

document.write("Total Marks "+totalMarks+"<br>");
document.write("Marks Obtained "+studentMarks+"<br>")
document.write("Percentage Is "+percentage+"<br>");

/* ----------- Question 9 ----------- */
document.write("<br><br>"+"Question 9"+"<br><br>");

var dollars = 10;
var riyal = 25;
var dollarTopakRupee = 104.80;
var riyalTopakRupee = 28;

var totalCurrency = dollars*dollarTopakRupee + riyal*riyalTopakRupee;

document.write("Total Currency In PKR Is "+totalCurrency+"<br>");

/* ----------- Question 10 ----------- */
document.write("<br><br>"+"Question 10"+"<br><br>");

var num = 5;

var value = num+5*10/2;

document.write("The Answer Is "+value+"<br>")

/* ----------- Question 11 ----------- */
document.write("<br><br>"+"Question 11"+"<br><br>");

var currentYear = 2020;
var birthYear = 1999;
var age = currentYear-birthYear;

document.write("Current Year : "+currentYear+"<br>")
document.write("Birth Year : "+birthYear+"<br>")
document.write("Your Age : "+age+"<br>")

/* ----------- Question 12 ----------- */
document.write("<br><br>"+"Question 12"+"<br><br>");

var radius = 20;
var pi = 3.142;
var circumference = 2*pi*radius;
var area = pi*radius*2;
document.write("The circumference Is "+circumference+"<br>");
document.write("The area Is "+area+"<br>");

/* ----------- Question 13 ----------- */
document.write("<br><br>"+"Question 13"+"<br><br>");

var favSnack = "Choclate Chip";
var currentAge = 15;
var maxAge = 65;
var snackPerday = 3;
var remainingYears = maxAge - currentAge;
var days = remainingYears * 365;
var total = days * snackPerday;
document.write("You will need "+total+" "+favSnack+ " to last you until the ripe old age of "+maxAge+"<br>");




/*------------------------------------------CHAPTER 6-9------------------------------------------------- */
/*------------------------------------------CHAPTER 6-9------------------------------------------------- */
/*------------------------------------------CHAPTER 6-9------------------------------------------------- */




/* ----------- Question 1 ----------- */
document.write("Question 1 "+"<br><br>");
var a = 10;

document.write("Result"+"<br>");
document.writeln("The value of a is: "+a+"<br>");

document.writeln("--------------------------"+"<br>");

var a = ++a;
document.write("The value of ++a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");

var a= a++;
document.write("The value of a++ is: "+a+"<br>");
var a = ++a;
document.write("Now the value of a is: "+a+"<br>");

var a = --a;
document.write("The value of --a is: "+a+"<br>");
document.write("Now the value of a is: "+a+"<br>");

var a = a--;
document.write("The value of a-- is: "+a+"<br>");
var a = --a;
document.write("Now the value of a is: "+a+"<br>");


/* ----------- Question 2 ----------- */


document.write("<br><br>"+"Question 2 "+"<br><br>");


var a = 2, b = 1; 
var result = --a - --b + ++b + b--;
/*            1  -  0  +  2  +  0   */
/* Result will be   3 */

document.write("a = "+a+"<br>");
document.write("b = "+b+"<br>");
document.write("result = "+result+"<br>");

/* ----------- Question 3 ----------- */

document.write("<br><br>"+"Question 3 is the greeting shown up when page loads "+"<br><br>");


var greeting = prompt("Enter Your Name: (QUESTION NO 3)");

alert("Welcome "+greeting);

/* ----------- Question 4 ----------- */

document.write("<br><br>"+"There is no Question 4 in assignment file"+"<br><br>");


/* ----------- Question 5 ----------- */

document.write("<br><br>"+"Question 5"+"<br><br>");

var num = prompt("Enter Number (QUESTION NO 5)"); 

if(num == ""){
    num = 5;
    var num = parseInt(num); 
    var i = 0;

    document.write('<table border="1" cellspacing="0">');
    for(i=1;i<10;i++) {
        document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
    }

    document.write("</table>");
}else{
    var num = parseInt(num); 
    var i = 0;

    document.write('<table border="1" cellspacing="0">');
    for(i=1;i<10;i++) {
        document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
    }

    document.write("</table>");

}


/* ----------- Question 6 ----------- */

document.write("<br><br>"+"Question 6"+"<br><br>");



var totalMarks = 100;
var subject1 = prompt("Enter Name Of Subject 1:  (QUESTION NO 6)");
var subject2 = prompt("Enter Name Of Subject 2:   (QUESTION NO 6)");
var subject3 = prompt("Enter Name Of Subject 3:   (QUESTION NO 6)");
var subject1Marks = prompt("Enter Marks Of "+subject1+"");
var subject2Marks = prompt("Enter Marks Of "+subject2+"");
var subject3Marks = prompt("Enter Marks Of "+subject3+"");
var subject1percentage = subject1Marks*100/totalMarks;
var subject2percentage = subject2Marks*100/totalMarks;
var subject3percentage = subject3Marks*100/totalMarks;
var subject1Marks = parseInt(subject1Marks); 
var subject2Marks = parseInt(subject2Marks); 
var subject3Marks = parseInt(subject3Marks); 
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var totalPercentage = totalObtainedMarks * 100 / 300;


document.write('<table border="1" cellspacing="20">');

        document.write("<tr><td><b>" + "SUBJECTS" + "</b></td><td><b>"+ "TOTAL MARKS" + "</b></td><td><b>"+ "SUBJECT MARKS" + "</b></td><td><b>"+ "SUBJECT PERCENTAGE" + "</b></td></tr>");
        document.write("<tr><td>" + subject1  + "</td><td>"+ totalMarks  + "</td><td>"+subject1Marks  +"</td><td>"+ subject1percentage+"%" + "</td></tr>");
        document.write("<tr><td>" + subject2  + "</td><td>"+ totalMarks  + "</td><td>"+ subject2Marks  +"</td><td>"+ subject2percentage+"%" + "</td></tr>");
        document.write("<tr><td>" + subject3  + "</td><td>"+ totalMarks  + "</td><td>"+ subject3Marks  +"</td><td>"+ subject3percentage+"%" + "</td></tr>");
        document.write("<tr><td><b>"  + ""  + "</b></td><td><b>"+ totalMarks*3 + "</b></td><td><b>"+ totalObtainedMarks +"</b></td><td><b>"+ totalPercentage + "</b></td></tr>");

    document.write("</table>");





/*------------------------------------------CHAPTER 9-11------------------------------------------------- */
/*------------------------------------------CHAPTER 9-11------------------------------------------------- */
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




/*------------------------------------------CHAPTER 12-13------------------------------------------------- */
/*------------------------------------------CHAPTER 12-13------------------------------------------------- */
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




/*------------------------------------------CHAPTER 14-16------------------------------------------------- */
/*------------------------------------------CHAPTER 14-16------------------------------------------------- */
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





/*------------------------------------------CHAPTER 17-20------------------------------------------------- */
/*------------------------------------------CHAPTER 17-20------------------------------------------------- */
/*------------------------------------------CHAPTER 17-20------------------------------------------------- */




/* ----------- Question 1 ----------- */
document.write("<br><br>"+"Question 1 is a code check script "+"<br><br>");
// set array length
var arrayLength = 3;

// create array
var multiArray = new Array(arrayLength);
for (var i = 0; i < multiArray.length; i++) {
  multiArray[i] = new Array(arrayLength);
}

/* ----------- Question 2 ----------- */
document.write("<br><br>"+"Question 2 "+"<br><br>");
// set array length
var arrayLength = 3;

// create array
var multiArray = new Array(arrayLength);
for (var i = 0; i < multiArray.length; i++) {
  multiArray[i] = new Array(arrayLength);
}

// add items to first array index
multiArray[0][0] = "0";
multiArray[0][1] = "1";
multiArray[0][2] = "2";
multiArray[0][3] = "3";

// second
multiArray[1][0] = 1;
multiArray[1][1] = 0;
multiArray[1][2] = 1;
multiArray[1][3] = 2;

// third
multiArray[2][0] = 2;
multiArray[2][1] = 1;
multiArray[2][2] = 0;
multiArray[2][2] = 1;

document.write("<br>"+multiArray); // printed out in first index order

/* ----------- Question 3 ----------- */
document.write("<br><br>"+"Question 3 "+"<br><br>");

for (var input = 1; input <= 10; input++) {
    document.write(input+"<br>");
}

/* ----------- Question 4 ----------- */
document.write("<br><br>"+"Question 4"+"<br><br>");

var num = prompt("Enter Number for its multiplication table (QUESTION NO 4)"); 
var length = prompt("Enter Length for table of your number (QUESTION NO 4)"); 


    var num = parseInt(num); 
    var length = parseInt(length);
    var i = 0;

    document.write('<table border="1" cellspacing="0">');
    for(i=1;i<=length;i++) {
        document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
    }

    document.write("</table>");


/* ----------- Question 5 ----------- */
document.write("<br><br>"+"Question 5"+"<br><br>");

fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write(fruits+"<br>");
 document.write("Element at index 0 Is "+fruits[0]+"<br>");
 document.write("Element at index 1 Is "+fruits[1]+"<br>");
 document.write("Element at index 2 Is "+fruits[2]+"<br>");
 document.write("Element at index 3 Is "+fruits[3]+"<br>");
 document.write("Element at index 4 Is "+fruits[4]+"<br>");


/* ----------- Question 6 ----------- */
document.write("<br><br>"+"Question 6"+"<br><br>");
    document.write("<h2>Counting...</h2>")
    for(var i = 1; i <= 15; i++) {
      document.write(i+",");
    }
    document.write("<h2>Reverse Counting...</h2>");
    for(var j = 10; j >= 1; j--) {
      document.write(j+",");
    }
    document.write("<h2>Even...</h2>");
    for (var x=0; x<=20; x++) {
      if (x % 2 === 0) {
              document.write(x +  ",");
      }
    }
    document.write("<h2>Odd...</h2>");
    for (var x=0; x<=20; x++) {
      if (x % 2 === 1) {
              document.write(x +  ",");
      }
    }
    document.write("<h2>Series...</h2>");
    for (var x=2; x<=20; x++) {
      if (x % 2 === 0) {
              document.write(x +"k" + ",");
      }
    }
    

/* ----------- Question 7 ----------- */
document.write("<br><br>"+"Question 7"+"<br><br>");

A = ["cake", "apple pie", "cookie", "chips", "patties"]; 

var search = prompt("Search Here  (Question 7)");

if(A.indexOf(search) !== -1){
  document.write(search+" is available at  in our bakery");
} else{
  document.write("We Are sorry, "+search+" is not available in our bakery");
}


/* ----------- Question 8 ----------- */
  document.write("<br><br>"+"Question 8"+"<br><br>");

  var number=[24, 53, 78, 91, 12]; 
  var largest = number[0];
  for (i=0;i<number.length;i++){
  if(number[i]>largest){
    largest=number[i];
  }
  }
  document.write("The Array Is "+number+"<br>");
  document.write("The Largest Number Is "+largest+"<br>");

/* ----------- Question 9 ----------- */
document.write("<br><br>"+"Question 9"+"<br><br>");

var number=[24, 53, 78, 91, 12]; 
var smallest = number[0];
for (i=0;i<number.length;i++){
if(number[i]<smallest){
smallest=number[i];
}
}
document.write("The Array Is "+number+"<br>");
document.write("The Smallest Number Is "+smallest+"<br>");

/* ----------- Question 10 ----------- */
document.write("<br><br>"+"Question 10"+"<br><br>");


    for (var i=1; i<100; i++) {
			if (i%5==0){
        document.write(i +", ");
      } 		
	}


/*----------------------------------------------CHAPTER 21-25---------------------------------------------------*/
/*----------------------------------------------CHAPTER 21-25---------------------------------------------------*/
/*----------------------------------------------CHAPTER 21-25---------------------------------------------------*/



/* ------- QUESTION 1 ------- */

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");

var fullName = firstName + " " + lastName;

alert("Welcome " + fullName)

/* ------- QUESTION 2 ------- */

var favPhone = prompt("Enter Your Favorite Mobile hone Model")

document.write("My Favourite Mobile Phone Model Is " + favPhone + "<br>");
var length = favPhone.length;
document.write("Length Of String: " + length + "<br>");

/* ------- QUESTION 3 ------- */

var string = "Pakistani"
var index = string.indexOf("n");
document.write("String Is " + string + "<br>");
document.write("Index of n is: " + index + "<br>");

/* ------- QUESTION 4 ------- */

var string = "Hello World"
var index = string.lastIndexOf("l")
document.write("String Is " + string + "<br>");
document.write("Index of l is: " + index + "<br>");

/* ------- QUESTION 5 ------- */

var string = "Pakistani"
var index = string.charAt(3);
document.write("String Is " + string + "<br>");
document.write("Character at Index 3 is: " + index + "<br>");

/* ------- QUESTION 6 ------- */

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");

var fullName = firstName.concat(" " + lastName);

alert("Welcome " + fullName)

/* ------- QUESTION 7 ------- */

var city = "Hyderabad"

for (var i = 0; i < city.length; i++) {
    if (city.slice(i, i + 5) === "Hyder") {
        var newCity = city.slice(0, i) + "Islam" + city.slice(i + 5);
    }
}

document.write("City Is " + city + "<br>");
document.write("City after Replacement is: " + newCity + "<br>");



/* ------- QUESTION 8 ------- */

var message = "Ali and Sami are best friends. They play cricket and football together."

var newStr = message.replace(/and/g, "or");

alert(newStr)


/* ------- QUESTION 9 ------- */

var value = "472"
document.write("Value = " + value + "<br>");
document.write("Type = " + typeof (value) + "<br>");
var num = parseInt(value);
document.write("Value = " + num + "<br>");
document.write("Type = " + typeof (num) + "<br>");


/* ------- QUESTION 10 ------- */

var dryFruit = prompt("Enter Your Dry Fruit ");
var upper = dryFruit.toUpperCase();

document.write("User Input = " + dryFruit + "<br>");
document.write("Upper Case = " + upper + "<br>");


/* ------- QUESTION 11 ------- */

var str = "javascript";
var res = str.charAt(0).toUpperCase() + str.slice(1);
document.write("User Input = " + str + "<br>");
document.write("Title Case = " + res + "<br>");


/* ------- QUESTION 12 ------- */


var num = 35.36;
var newStr = num.toString();
var str = newStr.replace(".", "");


document.write("Number = " + num + "<br>");
document.write("Result = " + str + "<br>");



/* ------- QUESTION 13 ------- */

const checkValidName = (username) => username.match(/[\@\.\,\!]/) === null;

var userName = prompt("Enter your Input: ");
while (!checkValidName(userName)) {
    alert("please enter a valid userName");
    userName = prompt("Enter your Input: ");
};


/* ------- QUESTION 14 ------- */

var A = ['cake', 'applepie', 'cookie', 'chips', 'patties']

var search = prompt("Search Here");

var search = search.toLowerCase();

if (A.indexOf(search) !== -1) {
    document.write(search + " is available in our bakery");
} else {
    document.write("We Are sorry, " + search + " is not available in our bakery"+"<br>");
}




/* ------- QUESTION 15 ------- */

var password = prompt("Enter Passowrd");
var paswd =  /^(?=.*[!@#$%^&*])[!@#$%^&*]$/;

for (var i = 0; i < password.length; i++) {
    if (password.charAt(0) == "0" || password.charAt(i) == "1" || password.charAt(i) == "2" || password.charAt(i) == "3" || password.charAt(i) == "4" || password.charAt(i) == "5" || password.charAt(i) == "6" || password.charAt(i) == "7" || password.charAt(i) == "8" || password.charAt(i) == "9") {
        document.write("Password cannot be start with number!"+"<br>");
    
    }else if(password.length <= 5){
        document.write("Password has to be 6 characters long!"+"<br>");
       
    }else if(password.value.match(paswd)){
        document.write("Password must Contain number and alphabet!"+"<br>");
      
    }else{
        document.write("Correct Password"+"<br>")
    }
    
}


/* ------- QUESTION 16 ------- */

var university = "University of Karachi"; 
var ar = university.split(''); 
var array = ar.join(" <br> ");
document.write( array +"<br>");


/* ------- QUESTION 17 ------- */


var string = prompt("Enter Your Input")
var index = string.lastIndexOf(string.length - 1);
var character = string.charAt(string.length - 1);
document.write("String Is " + string + "<br>");
document.write("Character at last Index is: " + character + "<br>");


/* ------- QUESTION 18 ------- */

var str = "the quick brown fox jumped over the lazy dog.";

var count = str.split("the").length-1

document.write("There are "+count+" occurrences(s) of word 'the' "+"<br>")





/*----------------------------------------------CHAPTER 26-30---------------------------------------------------*/
/*----------------------------------------------CHAPTER 26-30---------------------------------------------------*/
/*----------------------------------------------CHAPTER 26-30---------------------------------------------------*/




/* ------- QUESTION 1 ------- */

var value = prompt("Enter positive Integer ");
if (value > 0) {
    document.write("Number = " + value + "<br>");
    document.write("Round = " + Math.round(value) + "<br>");
    document.write("Floor = " + Math.floor(value) + "<br>");
    document.write("Ceil = " + Math.ceil(value) + "<br>");
} else {
    document.write("Please Enter Positive Integer" + "<br>")
}


/* ------- QUESTION 2 ------- */

var value = prompt("Enter positive Integer ");
if (value < 0) {
    document.write("Number = " + value + "<br>");
    document.write("Round = " + Math.round(value) + "<br>");
    document.write("Floor = " + Math.floor(value) + "<br>");
    document.write("Ceil = " + Math.ceil(value) + "<br>");
} else {
    document.write("Please Enter Negative Integer" + "<br>")
}


/* ------- QUESTION 3 ------- */

var value = prompt("Enter Integer ");

document.write("The absolute value of " + value + " is " + Math.abs(value) + "<br>");

/* ------- QUESTION 4 ------- */

var diceRoll = Math.floor(Math.random() * 6) + 1;
document.write('Random Dice Value ' + diceRoll + "<br>");


/* ------- QUESTION 5 ------- */

var value = Math.floor(Math.random() * 2)
if (value < 0.5) {
    document.write("Coin Value = " + value + " You Got Heads"+"<br>");
} else {
    document.write("Coin Value = " + value + " You Got Tails"+"<br>")
};


/* ------- QUESTION 6 ------- */


var random = Math.floor(Math.random() * (100 - 1) + 1);
document.write("Random Number between 1 and 100: " + random + "<br>")


/* ------- QUESTION 7 ------- */

var weight = prompt("Enter your weight ");
if (weight > 0) {
    document.write("The weight of user is " + weight + " Kilograms" + "<br>");
} else {
    document.write("Please Enter Correct Weight" + "<br>")
}


/* ------- QUESTION 8 ------- */

var random = Math.floor(Math.random() * (10 - 1) + 1);
var secretNumber = prompt("Enter Secret Number between 1 and 10 ");

if (secretNumber === random) {
    document.write("Congratulations"+"<br>")
} else {
    document.write("Try Again"+"<br>")
}




/*----------------------------------------------CHAPTER 31-34---------------------------------------------------*/
/*----------------------------------------------CHAPTER 31-34---------------------------------------------------*/
/*----------------------------------------------CHAPTER 31-34---------------------------------------------------*/


/* ------- QUESTION 1 ------- */

var rightNow = new Date();

document.write(rightNow + "<br>");


/* ------- QUESTION 2 ------- */

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var d = new Date();
document.write("The current month is " + monthNames[d.getMonth()] + "<br>");


/* ------- QUESTION 3 ------- */

var d = new Date();
var day = d.getDay();


if (day == 0) {
    document.write("Today is Sun " + "<br>");
} else if (day == 1) {
    document.write("Today is Mon " + "<br>");
} else if (day == 2) {
    document.write("Today is Tue " + "<br>");
} else if (day == 3) {
    document.write("Today is Wed " + "<br>");
} else if (day == 4) {
    document.write("Today is Thu " + "<br>");
} else if (day == 5) {
    document.write("Today is Fri " + "<br>");
} else if (day == 6) {
    document.write("Today is Sat " + "<br>");
}

/* ------- QUESTION 4 ------- */

var d = new Date();
var day = d.getDay();


if (day == 0) {
    document.write("Its Fun Day " + "<br>");
} else if (day == 6) {
    document.write("Its Fun Day " + "<br>");
} else {
    document.write("Its Not Fun Day " + "<br>");
}


/* ------- QUESTION 5 ------- */

var d = new Date();
var date = d.getDate();

if (date < 16) {
    document.write("First fifteen days of the month" + "<br>")
} else {
    document.write("Last fifteen days of the month" + "<br>")
}


/* ------- QUESTION 6 ------- */

var date1, date2;
date1 = new Date();
date2 = new Date("Jan 1, 1970");
var seconds = Math.abs(date1 - date2) / 1000;


var diff = (date1.getTime() - date2.getTime()) / 1000;
diff /= 60;
var minutes = Math.abs(Math.round(diff));

document.write("Current date : "+date1+" Elapsed milliseconds since January 1, 1970 is "+seconds+" Elapsed minutes since January 1,1970 is "+minutes+"<br>")




/* ------- QUESTION 7 ------- */

var d = new Date();
var time = d.getHours();

if (time > 12) {
    document.write("Its Pm" + "<br>")
} else {
    document.write("Its Am" + "<br>")
}



/* ------- QUESTION 8 ------- */

var d = new Date();
var laterDate = new Date("Dec 31, 2020");

document.write(laterDate + "<br>")


/* ------- QUESTION 9 ------- */

var date1, date2;
date1 = new Date();
date2 = new Date("June 18, 2015");
var res = Math.abs(date1 - date2) / 1000;
var days = Math.floor(res / 86400);
document.write(days + " days have passed from June 18 2015");


/* ------- QUESTION 10 ------- */


var date1, date2;
date1 = new Date();
date2 = new Date("June 18, 2015");
var seconds = Math.abs(date1 - date2) / 1000;
document.write("<br>On reference date : " + date1 + " " + seconds + " seconds had passed since bigginning of 2015" + "<br>");


/* ------- QUESTION 11 ------- */


var currentDate = new Date();
var oneYearFromNow = new Date();
oneYearFromNow.setHours(oneYearFromNow.getHours() - 1);
document.write("Current date : " + currentDate + " 1 Hour ago it was " + oneYearFromNow + "<br>")


/* ------- QUESTION 12 ------- */
var currentDate = new Date();
var oneYearFromNow = new Date();
oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() - 100);
document.write("Current date : " + currentDate + " 100 years back it was " + oneYearFromNow + "<br>")

/* ------- QUESTION 13 ------- */

var today = new Date();
var birthDate = new Date("4/18/1999");
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;

}
document.write("Your age is " + age + "<br>")


/* ------- QUESTION 14 ------- */

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var d = new Date();


var customerName = "Huzaifa Ibrahim"
var currentMonth = monthNames[d.getMonth()];
var numberOfUnit = 410;
var charges = 16;
var netAmoutPayable = numberOfUnit * charges;
var lateCharges = 350;
var grossAmountPayable = netAmoutPayable + lateCharges;

document.write("Customer Name: " + customerName + "<br>")
document.write("Month: " + currentMonth + "<br>")
document.write("Number of units: " + numberOfUnit + "<br>")
document.write("Charges per unit: " + charges + "<br>")
document.write("Net Amount Payable: " + netAmoutPayable + "<br>")
document.write("Late Payment Charges: " + lateCharges + "<br>")
document.write("Gross Amount Payable: " + grossAmountPayable + "<br>")


/*----------------------------------------------CHAPTER 35-38---------------------------------------------------*/
/*----------------------------------------------CHAPTER 35-38---------------------------------------------------*/
/*----------------------------------------------CHAPTER 35-38---------------------------------------------------*/



/* ------- QUESTION 1 ------- */

function date() {
    var date = new Date();
    document.write(date + "<br>")
}

date();

/* ------- QUESTION 2 ------- */


function greeting(firstname, lastname) {
    document.write("Welcome " + firstname + " " + lastname + "<br>")
}

var firstname = prompt("Enter First Name : ")
var lastname = prompt("Enter Last Nmae : ")

greeting(firstname, lastname);


/* ------- QUESTION 3 ------- */

function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}

var num1 = prompt("Enter 1st Number : ")
var num2 = prompt("Enter 2nd Number : ")
var num1 = parseInt(num1)
var num2 = parseInt(num2)

document.write("The Sum Is : " + sum(num1, num2) + "<br>")


/* ------- QUESTION 4 ------- */

function calculator(num1, num2, opt) {
    if (opt === "+") {
        var result = num1 + num2;
        document.write("The Sum of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else if (opt === "-") {
        var result = num1 - num2;
        document.write("The Subtraction of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else if (opt === "*") {
        var result = num1 * num2;
        document.write("The Multiplication of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else if (opt === "/") {
        var result = num1 / num2;
        document.write("The Division of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else if (opt === "%") {
        var result = num1 / num2;
        document.write("The Modulus of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else {
        document.write("Invalid Operator" + "<br>")
    }
}

var num1 = prompt("Enter 1st Number : ")
var num2 = prompt("Enter 2nd Number : ")
var opt = prompt("Enter Operator ( + , - , * , / , % ) : ")
var num1 = parseInt(num1)
var num2 = parseInt(num2)

calculator(num1, num2, opt)


/* ------- QUESTION 5 ------- */

function square(num) {
    var square = num * num;
    return square;
}

var num = prompt("Enter Number for finding square of it : ")
var num = parseInt(num)
document.write("The Square Of " + num + " is " + square(num) + "<br>")

/* ------- QUESTION 6 ------- */



function Factorial(num) {
    var ans = 1;

    for (var i = 2; i <= num; i++)
        ans = ans * i;
    return ans;
}

var num = prompt("Enter Number for finding Factorial of it : ")
var num = parseInt(num)
document.write("The Factorial Of " + num + " is " + Factorial(num) + "<br>")


/* ------- QUESTION 7 ------- */


function getNumbers(x, y) {
    var numbers = [];
    for (var i = ++x; i < y; i++) {
        numbers.push(i);
    }
    return numbers;
}

var num1 = prompt("Enter 1st Number : ")
var num2 = prompt("Enter 2nd Number : ")
var result = getNumbers(num1, num2);
document.write("The Numbers Between " + num1 + " and " + num2 + " is " + result + "<br>")


/* ------- QUESTION 8 ------- */



function calculateHypotenuse() {

    function calculateSquare(base, perpendicular) {
        var baseSquare = base * base
        var perpendicularSquare = perpendicular * perpendicular
        var result = baseSquare + perpendicularSquare;
        return result;
    }

    document.write("The Hypotenuse of base " + base + " and perpendicular " + perpendicular + " is " + calculateSquare(base, perpendicular) + "<br>")

}
var base = prompt("Enter base value : ")
var perpendicular = prompt("Enter perpendicular value : ")
var base = parseInt(base)
var perpendicular = parseInt(perpendicular)
calculateHypotenuse(base, perpendicular)


/* ------- QUESTION 9 ------- */

var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");

function area(length, width) {
    return length * width;
}


document.writeln('The area of your rectangle is ' + area(length, width) + "<br>");


/* ------- QUESTION 10 ------- */


function check_Palindrome(str_entry) {

    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;

    if (cstr === "") {
        document.writeln("Nothing found!" + "<br>");
        return false;
    }

    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {

        if (cstr.length === 1) {
            document.writeln("Entry is a palindrome." + "<br>");
            return true;
        } else {

            ccount = (cstr.length - 1) / 2;
        }
    }

    for (var x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            document.writeln("Entry is not a palindrome." + "<br>");
            return false;
        }
    }
    document.writeln("The entry is a palindrome." + "<br>");
    return true;
}

var str_entry = prompt("Enter a String to check its palindrome or not.");
check_Palindrome(str_entry);


/* ------- QUESTION 11 ------- */


function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}

var str = prompt("Enter a String to capatalize each word.");
document.write("The string is : " + str + "<br>")
document.write("The Upper Case Of String Is " + uppercase(str) + "<br>")


/* ------- QUESTION 12 ------- */


function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
var str = prompt("Enter a String to find longest word.");
document.write("The string is : " + str + "<br>")
document.write("The Longest Word Of String Is " + longestWord(str) + "<br>")

/* ------- QUESTION 13 ------- */


function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o')+"<br>");


/* ------- QUESTION 14 ------- */


function calcCircumference(){
    var circumference = Math.PI * 2 * radius;
    document.write("The circumference is " + circumference+"<br>");
}

function calcArea(){
    var area = Math.PI * radius * radius;
    document.write("The area is " + area+"<br>");
}

var radius = prompt("Enter a Radius.");
calcCircumference(radius)
calcArea(radius)


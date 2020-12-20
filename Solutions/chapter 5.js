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



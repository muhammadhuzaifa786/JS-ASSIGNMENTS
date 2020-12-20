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




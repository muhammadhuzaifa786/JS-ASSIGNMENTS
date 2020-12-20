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



/*-----------------------------------------CHAPTER 38-42 ------------------------------------------ */

/* ------- QUESTION 1 ------- */

var a, b, value;
a = prompt("enter the value of a: ");
b = prompt("enter the value of b: ");

value = power(a, b);
alert(a + " raised to power " + b + " is " + value);


function power(a, b) {
    var i, value;
    value = a;
    for (i = 1; i < b; i++) {
        value = value * a;
    }
    return value;
}


/* ------- QUESTION 2 ------- */

var year, leap;
year = prompt("Enter an year : ");
leap = find(year);
if (leap == 1)
    alert(year + " year is leap year ");
else
    printf(year + " year is not a leap year ");



function find(a) {
    var i = 0;
    if ((a % 4 && a % 100 && a % 400) == 0)
        i = 1;
    else
        i = 0;
    return i;
}

/* ------- QUESTION 3 ------- */

var side1 = +prompt("Enter Value Of Side 1");
var side2 = +prompt("Enter Value Of Side 2");
var side3 = +prompt("Enter Value Of Side 3");

perimeter(side1, side2, side3)


function perimeter(side1, side2, side3) {
    var perimeter = (side1 + side2 + side3) / 2;
    return perimeter

}

area(side1, side2, side3, perimeter(side1, side2, side3));

function area(side1, side2, side3, perimeter) {
    var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
    alert(area);
}


/* ------- QUESTION 4 ------- */

marks();

function marks() {
    var subject1 = +prompt("Enter Subject 1 Marks : ")
    var subject2 = +prompt("Enter Subject 2 Marks : ")
    var subject3 = +prompt("Enter Subject 3 Marks : ")


    average(subject1, subject2, subject3);

    function average(subject1, subject2, subject3) {

        ave = (subject1 + subject2 + subject3) / 3.0
        return ave;

    }

    percentage(average(subject1, subject2, subject3))

    function percentage(tot) {
        var tot = subject1 + subject2 + subject3;
        perce = (tot * 100) / 300
        return perce;
    }

    alert("The Average is = " + ave);
    alert("The Percentage is = " + perce)
}


/* ------- QUESTION 5 ------- */

/* ------- QUESTION 6 ------- */

var str = prompt("Enter string : ")
removeVowels(str);

function removeVowels(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        if ("aeiou".match(c.toLowerCase()) == null) {
            result += c;
        }
    }
    alert("The String After Removing Vowels Are : " + result)
}


/* ------- QUESTION 7 ------- */

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}

alert(findOccurrences())


/* ------- QUESTION 8 ------- */


var km;

km = prompt("Enter distance in kilometers: ");

/* calculate the conversion */
function meter(km) {

    var m = km * 1000;
    alert("The distance in Meters: " + m);
}

function cm(km) {
    var cm = km * 1000 * 100;
    alert("The distance in Centimeters: " + cm);
}

function f(km) {
    var f = km * 3280.84;
    alert("The distance in Feet: " + f);
}

function inc(km) {
    var n = km * 39370.08;
    alert("The distance in Inches: " + n);
}
meter(km)
cm(km)
f(km)
inc(km)


/* ------- QUESTION 9 ------- */


var count = 1,
    working_hours, over_time;
var over_time_pay;

while (count <= 10) {
    working_hours = prompt("Enter the working hours of employee no :");

    if (working_hours > 40) {
        over_time = working_hours - 40;
        over_time_pay = over_time * 12.00;
        alert("Employee No " + count + " overtime pay is " + over_time_pay);
    } else
        alert("You have to work for more than 40 hours to get over time pay");

    count++;
}

/* ------- QUESTION 10 ------- */

var amount;
amount = +prompt("Please input amount for withdraw : ");

var hundred = amount / 100;
var fifty = (amount % 100) / 50;
var ten = (((amount % 100) % 50) / 10);
var remaining = (((amount % 100) % 50) % 10);



alert("Required notes of Rs. 100  :  " + Math.floor(hundred));
alert("Required notes of Rs. 50   :  " + Math.round(fifty));
alert("Required notes of Rs. 10   :  " + Math.round(ten));
alert("Amount still remaining Rs. :  " + Math.round(remaining));
/*-----------------------------------------CHAPTER 43-48 ------------------------------------------ */

/* ------- QUESTION 1 ------- */

// answer is inside the index.html page


/* ------- QUESTION 2 ------- */

function thankyou() {
    alert("Thanks for purchasing phone from us")
}


/* ------- QUESTION 3 ------- */

function SomeDeleteRowFunction() {

    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}


/* ------- QUESTION 4 ------- */

function newimage() {
    document.getElementById("img").src = "img/new.jpg";
}

function oldimage() {
    document.getElementById("img").src = "img/old.png";
}


/* ------- QUESTION 5 ------- */

var counter = 0;

function onIncrease() {
    counter += 1;
    document.getElementById("clicks").innerHTML = counter;
};

function onDecrease() {
    counter -= 1;
    document.getElementById("clicks").innerHTML = counter;
};
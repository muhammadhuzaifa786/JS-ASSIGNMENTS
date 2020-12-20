/*-----------------------------------------CHAPTER 53-58 ------------------------------------------ */

/* ------- QUESTION 1 ------- */

var modal = document.getElementById("myModal");

function image_1() {
    var img = document.getElementById("one");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
        modal.style.display = "none";
    }


}


function image_2() {
    var img = document.getElementById("two");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }


    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
        modal.style.display = "none";
    }
}



function image_3() {
    var img = document.getElementById("three");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }


    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
        modal.style.display = "none";
    }
}



function image_4() {
    var img = document.getElementById("four");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }


    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
        modal.style.display = "none";
    }
}


/* ------- QUESTION 2 ------- */



function zoomin() {
    var myImg = document.getElementById("img01");
    var currWidth = myImg.clientWidth;
    if (currWidth == 500) {
        alert("Maximum zoom-in level reached.");
    } else {
        myImg.style.width = (currWidth + 10) + "px";
    }
}

function zoomout() {
    var myImg = document.getElementById("img01");
    var currWidth = myImg.clientWidth;
    if (currWidth == 50) {
        alert("Maximum zoom-out level reached.");
    } else {
        myImg.style.width = (currWidth - 10) + "px";
    }
}
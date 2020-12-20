/*-----------------------------------------CHAPTER 49-52 ------------------------------------------ */

/* ------- QUESTION 1 ------- */

function check() {

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;

    document.writeln("First Name = " + firstName + "<br>");
    document.writeln("Last Name = " + lastName + "<br>");
    document.writeln("Email = " + email + "<br>");
}


/* ------- QUESTION 2 ------- */

function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}


/* ------- QUESTION 3 ------- */

function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";


    var name = document.getElementById("name_row" + no);
    var country = document.getElementById("country_row" + no);
    var age = document.getElementById("age_row" + no);

    var name_data = name.innerHTML;
    var country_data = country.innerHTML;
    var age_data = age.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
    age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}


function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}
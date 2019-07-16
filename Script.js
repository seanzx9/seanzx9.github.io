//hello typing effect
var i = 0;
var j = 0;
var hello = " Hello.";
var name = " I'm Sean.";

function welcomeMessage() {
    typeHello();
    setTimeout(typeName, 1500);
}

function typeHello() {
    if (i < hello.length) {
        document.getElementById("home").innerHTML += hello.charAt(i);
        i++;
        setTimeout(typeHello, 100);
    }
}

function typeName() {
    if (j < name.length) {
        document.getElementById("home").innerHTML += name.charAt(j);
        j++;
        setTimeout(typeName, 100);
    }
}

//footer animation
var e = 0;
var emailOpac = 0.9;
var emailFaded = false;
var l = 0;
var linkedinOpac = 0.9;
var linkedinFaded = false;

window.onload = function () {
    var email = document.getElementById("email-icon");
    var linkedin = document.getElementById("linkedin-icon");

    email.addEventListener("mouseover", linkedinOut);
    email.addEventListener("mouseout", linkedinIn);
    linkedin.addEventListener("mouseover", emailOut);
    linkedin.addEventListener("mouseout", emailIn);
}

function linkedinOut() {
    var linkedin = document.getElementById("linkedin-icon");

    if (l < 50 && linkedinFaded == false) {
        linkedin.style.opacity = linkedinOpac;
        linkedinOpac -= 0.01;
        l++;
        setTimeout(linkedinOut, 5);
    }
    if (l == 50) {
        linkedinFaded = true;
    }
}

function linkedinIn() {
    var linkedin = document.getElementById("linkedin-icon");

    l = 0;
    linkedinOpac = 0.9;
    linkedin.style.opacity = linkedinOpac;
    linkedinFaded = false;
}

function emailOut() {
    var email = document.getElementById("email-icon");

    if (e < 50 && emailFaded == false) {
        email.style.opacity = emailOpac;
        emailOpac -= 0.01;
        e++;
        setTimeout(emailOut, 5);
    }
    if (e == 50) {
        linkedinFaded = true;
    }
}

function emailIn() {
    var email = document.getElementById("email-icon");

    e = 0;
    emailOpac = 0.9;
    email.style.opacity = emailOpac;
    emailFaded = false;

}




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
window.onload = function () {
    var email = document.getElementById("email-icon");
    var linkedin = document.getElementById("linkedin-icon");

    email.addEventListener("mouseover", emailMouseOver);
    email.addEventListener("mouseout", mouseOut);
    linkedin.addEventListener("mouseover", linkedinMouseOver);
    linkedin.addEventListener("mouseout", mouseOut);
}

function emailMouseOver() {
    var email = document.getElementById("email-icon");
    var linkedin = document.getElementById("linkedin-icon");

    email.style.opacity = "1";
    linkedin.style.opacity = "0.5";
    email.style.height = "43px";
    email.style.width = "43px";
    linkedin.style.height = "37px";
    linkedin.style.width = "37px";
}

function linkedinMouseOver() {
    var email = document.getElementById("email-icon");
    var linkedin = document.getElementById("linkedin-icon");

    email.style.opacity = "0.5";
    linkedin.style.opacity = "1";
    email.style.height = "37px";
    email.style.width = "37px";
    linkedin.style.height = "43px";
    linkedin.style.width = "43px";
}

function mouseOut() {
    var email = document.getElementById("email-icon");
    var linkedin = document.getElementById("linkedin-icon");

    email.style.opacity = "0.9";
    linkedin.style.opacity = "0.9";
    email.style.height = "40px";
    email.style.width = "40px";
    linkedin.style.height = "40px";
    linkedin.style.width = "40px";
}




//hello typing effect
var i = 0;
var j = 0;
var hello = " Hello.";
var name = " I'm Sean.";

//footer animation
var e = 0;
var emailOpac = 0.9;
var emailFaded = false;
var l = 0;
var linkedinOpac = 0.9;
var linkedinFaded = false;

//hello typing effect
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

    //fades linkedin logo when mouse on email logo
    email.addEventListener("mouseover", function linFade(){
        if (linkedinFaded == false) {
            linkedin.style.opacity = linkedinOpac;
            linkedinOpac -= 0.01;
            l++;
            setTimeout(linFade, 1);
        }
        if (l == 50) {
            linkedinFaded = true;
        }
    });
    //makes linkedin logo solid when mouse out
    email.addEventListener("mouseout", function linIn() {
        linkedinFaded = false;
        l = 0;
        linkedinOpac = 0.9;
        linkedin.style.opacity = linkedinOpac;
    });
    //makes email logo fade when mouse on linkedin logo
    linkedin.addEventListener("mouseover", function emailOut(){
        if (emailFaded == false) {
            email.style.opacity = emailOpac;
            emailOpac -= 0.01;
            e++;
            setTimeout(emailOut, 5);
        }
        if (e == 50) {
            emailFaded = true;
        }
    });
    //makes email logo solid when mouse out
    linkedin.addEventListener("mouseout", function emailIn(){
        emailFaded = false;
        e = 0;
        emailOpac = 0.9;
        email.style.opacity = emailOpac;
    });
}




//typing effect
var i = 0;
var hello = "Hello. I'm Sean.";
var welcome = " Welcome to my website!"
var typed = false;
var deleted = false;

//hello message typing effect
function welcomeMessage() {
    var txt = document.getElementById("welcome-txt");
    if (typed == false) {
        if (i < 6) {
            txt.innerHTML += hello.charAt(i);
            i++;
            setTimeout(welcomeMessage, 125);
        }
        else if (i == 6) {
            txt.innerHTML += hello.charAt(i);
            i++;
            setTimeout(welcomeMessage, 1000);
        }
        else if (i > 6 && i < hello.length) {
            txt.innerHTML += hello.charAt(i);
            i++;
            setTimeout(welcomeMessage, 125);
        }
        else if (i == hello.length) {
            typed = true;
        }
    }
}

//deletes hello and retypes new welcome message
function reWrite() {
    var txt = document.getElementById("welcome-txt");

    if (typed == true) {
        if (i > 0 && deleted == false) {
            i--;
            txt.innerHTML = hello.substring(0, i);
            setTimeout(reWrite, 150);
        }
        else if (i == 0) {
            i++;
            deleted = true;
            setTimeout(reWrite, 500);

        }
        else if (i < welcome.length && deleted == true) {
            txt.innerHTML += welcome.charAt(i);
            i++;
            setTimeout(reWrite, 125);
        }
    }
}

//waits for page to be loaded and then adds listeners
window.onload = function () {
    var txt = document.getElementById("welcome-txt");
    var email = document.getElementById("email-icon");
    var linkedin = document.getElementById("linkedin-icon");

    //for mouse going over the welcome message or any click in the screen
    txt.addEventListener("mouseover", reWrite);
    document.addEventListener("click", reWrite);

    //for hovering over email icon
    email.addEventListener("mouseover", function() {
        email.style.filter = "invert(25%)";
    });
    email.addEventListener("mouseout", function() {
        email.style.filter = "invert(0%)";
    });

    //for hovering over linkedin icon
    linkedin.addEventListener("mouseover", function() {
        linkedin.style.filter = "invert(25%)";
    });
    linkedin.addEventListener("mouseout", function() {
        linkedin.style.filter = "invert(0%)";
    });
}
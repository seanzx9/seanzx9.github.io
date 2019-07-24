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

    //for mouse going over the welcome message or any click in the screen
    txt.addEventListener("mouseover", reWrite);
    document.addEventListener("click", reWrite);
}

//deletes hello and retypes new welcome message
function reWrite() {
    var txt = document.getElementById("welcome-txt");

    //removes listeners
    txt.removeEventListener("mouseover", reWrite);
    document.removeEventListener("click", reWrite);

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

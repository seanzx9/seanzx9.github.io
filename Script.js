//typing effect, moving arrow, fading with extending lines
window.onload = function () {
    var body = document.getElementsByTagName("BODY")[0];
    //for typing welcome message
    var i = 0;
    var hello = "Hello! I'm Sean.";
    var typed = false;
    var txt = document.getElementById("welcome-txt");
    //for the arrow
    var arrowShow = 0;
    //line elements and widths
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line1w = line1.clientWidth;
    var line2w = line2.clientWidth;
    //about text
    var about = document.getElementById("about-txt");
    var index = 0;
    var letter = -2;
    var done = false;
    var me = [
        "Now just keep clicking :)",
        "Let's make this short and sweet.",
        "I'm a student at Stony Brook University.",
        "I major in Computer Engineering.    and minor in Enviromental Design, Policy, and Planning.",
        "In short, I just like tech and the environment.",
        "You want more?",
        "Well you can keep clicking to read more about me.",
        "Or go ahead and click on the my projects link on the bottom left side of the screen.",
        "So you want a little more about me.",
        "My favorite color is green.",
        "I practice mixed martial arts.",
        "I enjoy playing soccer.",
        "Mangos are my favorite fruit.",
        "My workouts are 100% calisthenics.",
        "Is that enough about me?",
        "No?",
        "Well feel free to contact me and we can talk some more!",
        "Now go look at my projects.",
        "I have no more to say here.",
        "Really.",
        "...",
        "\"Life would be wonderful if people would leave you alone.\" - Charlie Chaplin",
        "Ok I have no more.",
        "For real this time.",
        "Contact me!",
        ""
    ];

    //invoke typing 
    welcomeMessage();

    //types out message, sets typed to true when completed
    function welcomeMessage() {
        if (typed === false) {
            disableScrolling();
            if (i < 6) {
                txt.innerHTML += hello.charAt(i);
                i++;
                setTimeout(welcomeMessage, 100);
            }
            else if (i === 6) {
                txt.innerHTML += hello.charAt(i);
                i++;
                txt.innerHTML += "<br />";
                setTimeout(welcomeMessage, 600);
            }
            else if (i > 6 && i < hello.length) {
                txt.innerHTML += hello.charAt(i);
                i++;
                setTimeout(welcomeMessage, 100);
            }
            else if (i === hello.length) {
                typed = true;
                enableScrolling();
            }
        }
    }

    function disableScrolling() {
        body.style.overflow = "hidden";
    }

    function enableScrolling() {
        body.style.overflow = "initial";
    }

    //shows moving arrow
    setInterval(function () {
        if (typed === true) {
            //hide element if scroll too far down
            if (window.pageYOffset > 500) {
                document.getElementById("arrow").style.visibility = "hidden";
            }
            if (arrowShow === 0) {
                document.getElementById("arrow").style.visibility = "visible";
                document.getElementById("arrow").style.bottom = "-20px";
                arrowShow = 2;
            }
            else if (arrowShow === 2) {
                document.getElementById("arrow").style.bottom = "-50px";
                arrowShow = 1;
            }
            else {
                document.getElementById("arrow").style.bottom = "-80px";
                arrowShow = 0;
            }
        }
    }, 400);

    //follows scroll to delete characters or change lines
    setInterval(function () {
        if (typed === true) {
            //don't extend if past page width
            if (line2w + (5 * window.pageYOffset) < document.getElementById("home").scrollWidth - 20) {
                line1.style.width = line1w + (5 * window.pageYOffset) + "px";
                line2.style.width = line2w + (5 * window.pageYOffset) + "px";
            }

            if (window.pageYOffset > 290) {
                txt.innerHTML = "";
                line1.style.opacity = "0.05";
                line2.style.opacity = "0.05";
            }
            else if (window.pageYOffset >= 280) {
                txt.innerHTML = "<br />" + hello.substring(12, 13);
                line1.style.opacity = "0.1";
                line2.style.opacity = "0.1";
            }
            else if (window.pageYOffset >= 270) {
                txt.innerHTML = "<br />" + hello.substring(11, 13);
                line1.style.opacity = "0.15";
                line2.style.opacity = "0.15";
            }
            else if (window.pageYOffset >= 250) {
                txt.innerHTML = "<br />" + hello.substring(9, 9) + hello.substring(10, 13);
                line1.style.opacity = "0.2";
                line2.style.opacity = "0.2";
            }
            else if (window.pageYOffset >= 220) {
                txt.innerHTML = hello.substring(3, 4) + "<br />" + hello.substring(8, 9) + hello.substring(10, 13);
                line1.style.opacity = "0.25";
                line2.style.opacity = "0.25";
            }
            else if (window.pageYOffset >= 190) {
                txt.innerHTML = hello.substring(3, 4) + "<br />" + hello.substring(7, 9) + hello.substring(10, 13);
                line1.style.opacity = "0.3";
                line2.style.opacity = "0.3";
            }
            else if (window.pageYOffset >= 160) {
                txt.innerHTML = hello.substring(3, 5) + "<br />" + hello.substring(7, 9) + hello.substring(10, 13) + hello.substring(15, 15);
                line1.style.opacity = "0.4";
                line2.style.opacity = "0.4";
            }
            else if (window.pageYOffset >= 130) {
                txt.innerHTML = hello.substring(2, 5) + "<br />" + hello.substring(7, 9) + hello.substring(10, 13) + hello.substring(15, 15);
                line1.style.opacity = "0.5";
                line2.style.opacity = "0.5";
            }
            else if (window.pageYOffset >= 100) {
                txt.innerHTML = hello.substring(2, 6) + "<br />" + hello.substring(7, 9) + hello.substring(10, 13) + hello.substring(15, 16);
                line1.style.opacity = "0.6";
                line2.style.opacity = "0.6";
            }
            else if (window.pageYOffset >= 70) {
                txt.innerHTML = hello.substring(2, 6) + "<br />" + hello.substring(7, 9) + hello.substring(10, 14) + hello.substring(15, 16);
                line1.style.opacity = "0.7";
                line2.style.opacity = "0.7";
            }
            else if (window.pageYOffset >= 40) {
                txt.innerHTML = hello.substring(2, 6) + "<br />" + hello.substring(7, 9) + hello.substring(10, 16);
                line1.style.opacity = "0.8";
                line2.style.opacity = "0.8";

            }
            else if (window.pageYOffset >= 10) {
                txt.innerHTML = hello.substring(1, 6) + "<br />" + hello.substring(7, 16);
                line1.style.opacity = "0.9";
                line2.style.opacity = "0.9";
            }
            else {
                txt.innerHTML = hello.substring(0, 6) + "<br />" + hello.substring(7, 16);
                line1.style.opacity = "1";
                line2.style.opacity = "1";
            }
        }
    }, 100);

    about.addEventListener("click", intro);
    function intro() {
        if (index < me.length) {
            if (letter === -2) {
                about.removeEventListener("click", intro);
                about.style.backgroundColor = "#e25b4b";
                letter++;
                setTimeout(intro, 500);
            }
            else if (letter === -1) {
                about.style.backgroundColor = "transparent";
                about.innerHTML = "";
                letter++;
                setTimeout(intro, 300);
            }
            else if (letter < me[index].length) {
                //for major and minor
                if (index === 3) {
                    if (letter < 33) {
                        about.innerHTML += me[index].charAt(letter);
                        letter++;
                        if (letter === 33)
                            setTimeout(intro, 550);
                        else
                            setTimeout(intro, 80);
                    }
                    else if (letter === 33) {
                        about.innerHTML = me[index].substring(0, 31);
                        letter++;
                        setTimeout(intro, 80);
                    }
                    else {
                        about.innerHTML += me[index].charAt(letter);
                        letter++;
                        setTimeout(intro, 80);
                    }
                }
                //everything else (normal messages)
                else {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    setTimeout(intro, 80);
                }
            }
            else {
                index++;
                letter = -2;
                about.addEventListener("click", intro);
            }
        }
    }
}
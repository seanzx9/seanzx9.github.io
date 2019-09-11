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
    var me = [
        "Let's make this short and sweet.",
        "I'm a student at Stony Brook University.",
        "I major in Computer Engineering.  and minor in Enviromental Design, Policy, and Planning.",
        "In short, I'm into tech and the environment.",
        "Scroll down to check out my projects!" +
        "Or keep clicking/tapping...",
        "A little more about me...",
        "My favorite color is green." +
        "I practice mixed martial arts." +
        "I like soccer." +
        "Mangos are my favorite fruit." +
        "Is that enough?",
        "No?",
        "Well feel free to contact me and we can talk some more!",
        "Now go check out my projects.",
        "I have no more to say here.",
        "Really.",
        "...",
        "Contact me!",
        ":)"
    ];
    //about me pic and text
    var pfp = document.getElementById("me-pic");
    var aboutTxt = document.getElementById("about-txt");
    var opacityPercent = 0.9;
    
    //wait for scroll
    $(document).on("scroll", function () {
        //fade in projects break when scrolled to
        if ($(this).scrollTop() >= $('#project-header').position().top + 1000) {
            $('#project-header').fadeIn(1000);
        }

        //fade out when scrolled down
        if (window.innerWidth > 768) {
            if (window.pageYOffset < innerHeight * 1.3)
                opacityPercent = 0.9;
            else if (window.pageYOffset > innerHeight * 1.85)
                opacityPercent = -0.1;
            else if (window.pageYOffset > innerHeight * 1.8)
                opacityPercent = 0.05;
            else if (window.pageYOffset > innerHeight * 1.75)
                opacityPercent = 0.1;
            else if (window.pageYOffset > innerHeight * 1.7)
                opacityPercent = 0.2;
            else if (window.pageYOffset > innerHeight * 1.65)
                opacityPercent = 0.3;
            else if (window.pageYOffset > innerHeight * 1.6)
                opacityPercent = 0.4;
            else if (window.pageYOffset > innerHeight * 1.55)
                opacityPercent = 0.5;
            else if (window.pageYOffset > innerHeight * 1.5)
                opacityPercent = 0.6;
            else if (window.pageYOffset > innerHeight * 1.45)
                opacityPercent = 0.65;
            else if (window.pageYOffset > innerHeight * 1.4)
                opacityPercent = 0.7;
            else if (window.pageYOffset > innerHeight * 1.35)
                opacityPercent = 0.75;
            else if (window.pageYOffset > innerHeight * 1.3)
                opacityPercent = 0.8;

            pfp.style.opacity = opacityPercent;
            aboutTxt.style.opacity = opacityPercent + 0.1;
        }
    })

    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
            }
        });
    }).scroll();

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //invoke typing 
    welcomeMessage();

    //start at top of page
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1);

    //types out message, sets typed to true when completed
    function welcomeMessage() {
        if (typed === false) {
            disableScrolling();
            if (i < 6) {
                line1.style.width = txt.clientWidth + 25 + "px";
                line1w = txt.clientWidth + 25;
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
                line2.style.width = txt.clientWidth + 25 + "px";
                line2w = txt.clientWidth + 25;
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

    //disables scrolling with overflow
    function disableScrolling() {
        body.style.overflow = "hidden";
    }

    //enables scrolling with overflow
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

    //follows scroll to delete characters or change lines or hide about me content
    window.onscroll = function() {
        if (typed === true) {
            if (window.innerWidth > 768) {
                //extend lines and don't extend if past page width
                if (line1w + (5 * window.pageYOffset) < window.innerWidth - 40)
                    line1.style.width = line1w + (5 * window.pageYOffset) + "px";

                if (line2w + (5 * window.pageYOffset) < window.innerWidth - 40)
                    line2.style.width = line2w + (5 * window.pageYOffset) + "px";

                if (txt.clientWidth + (3 * window.pageYOffset) < window.innerWidth) {
                    console.log("Compare: " + window.innerWidth * (window.pageYOffset + 1) + "\nWidth: " + window.innerWidth);
                    txt.style.left = 15 + (window.pageYOffset * 2.5) + "px";
                    txt.style.fontSize = ((window.pageYOffset / 30) + 1 * 10) + "vh";
                    txt.style.top = 32 - (window.pageYOffset / 20) + "%";
                    line1.style.top = 40 - (window.pageYOffset / 40) + "%";
                    line2.style.top = 55 + (window.pageYOffset / 36) + "%";
                }

                if (window.pageYOffset > 0) {
                    line1.style.opacity = 1 - (window.pageYOffset / 250);
                    line2.style.opacity = 1 - (window.pageYOffset / 250);
                    txt.style.opacity = 1 - (window.pageYOffset / 260);
                }
                else {
                    line1.style.opacity = "1";
                    line2.style.opacity = "1";
                }
            }
            else {
                if (line1w > 0)
                    line1.style.width = line1w - (window.pageYOffset) + "px";

                if (line2w > 0)
                    line2.style.width = line2w - (window.pageYOffset) + "px";

                //delete characters as scrolling
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
        }
    };

    //goes through about me text
    //letter goes to 2 to highlight background
    //letter goes to 1 when deleting text
    about.addEventListener("click", intro);
    function intro() {
        //loop through all off array
        if (index < me.length) {
            //for highlighting text
            if (letter === -2) {
                about.removeEventListener("click", intro);
                about.style.backgroundColor = "#e25b4b";
                letter++;
                setTimeout(intro, 500);
            }
            //for deleting text
            else if (letter === -1) {
                about.style.backgroundColor = "transparent";
                about.innerHTML = "";
                letter++;
                setTimeout(intro, 400);
            }
            //for typing effect
            else if (letter < me[index].length) {
                if (index === 0) {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    if (letter === me[index].length) {
                        index++;
                        letter = -2;
                        setTimeout(intro, 1200);
                    }
                    else
                        setTimeout(intro, 80);
                }
                else if (index === 1) {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    if (letter === me[index].length) {
                        index++;
                        letter = -2;
                        setTimeout(intro, 1400);
                    }
                    else
                        setTimeout(intro, 80);
                }
                //creates delay for major and minor
                else if (index === 2) {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    if (letter === 32) {
                        setTimeout(intro, 700);
                    }
                    else if (letter === 33) {
                        about.innerHTML = about.innerHTML.substring(0, 31);
                        setTimeout(intro, 100);
                    }
                    else if (letter === me[index].length) {
                        index++;
                        letter = -2;
                        setTimeout(intro, 1500);
                    }
                    else
                        setTimeout(intro, 80);
                }
                //delay for brief summary
                else if (index === 3) {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    if (letter === 8) {
                        setTimeout(intro, 400);
                    }
                    else if (letter === me[index].length) {
                        index++;
                        letter = -2;
                        setTimeout(intro, 1600);
                    }
                    else
                        setTimeout(intro, 80);
                }
                //continue about page or go to projects
                else if (index === 4) {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    if (letter === 37) {
                        about.innerHTML += "<br/>";
                        setTimeout(intro, 1400);
                    }
                    else
                        setTimeout(intro, 80);
                }
                //let user know they're continuing
                else if (index === 5) {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    if (letter === me[index].length) {
                        index++;
                        letter = -2;
                        setTimeout(intro, 1400);
                    }
                    else
                        setTimeout(intro, 80);
                }
                //list some fun facts
                else if (index === 6) {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    if (letter === 27) {
                        about.innerHTML += "<br/>";
                        setTimeout(intro, 500);
                    }
                    else if (letter === 57) {
                        about.innerHTML += "<br/>";
                        setTimeout(intro, 500);
                    }
                    else if (letter === 71) {
                        about.innerHTML += "<br/>";
                        setTimeout(intro, 500);
                    }
                    else if (letter === 100) {
                        about.innerHTML += "<br/>";
                        setTimeout(intro, 500);
                    }
                    else
                        setTimeout(intro, 80);
                }
                //everything else (normal typing)
                else {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    setTimeout(intro, 80);
                }
            }
            //reset to next element of array
            else {
                index++;
                letter = -2;
                about.addEventListener("click", intro);
            }
        }
    }
}
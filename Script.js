//typing effect, moving arrow, fading with extending lines
window.onload = function () {
    var body = document.getElementsByTagName("BODY")[0];
    //for typing welcome message
    var i = 0;
    var hello = "Hello! I'm Sean.";
    var typed = false;
    var txt = document.getElementById("welcome-txt");
    //for the arrow
    var arrow = document.getElementById("arrow");
    var arrowPos = -1;
    var up = false;
    var down = true;
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
        "I'm a student at Stony Brook University.",
        "I major in Computer Engineering.",
        "My interests are in software development, AI, and embedded systems.",
        "But I'm always interested in exploring new things!",
        "Scroll down to check out some of my projects!"
    ];
    //about me pic and text
    var pfp = document.getElementById("me-pic");
    var aboutTxt = document.getElementById("about-txt");
    var opacityPercent = 0.9;
    var scrolled = false;
    var windowHeight = window.innerHeight;

    //fade in project head and project images
    var projHeader = document.getElementById("project-header");
    var img = document.querySelectorAll(".project-img");
    var title = document.querySelectorAll(".project-title-overlay");
    var desc = document.querySelectorAll(".project-desc-overlay");

    //check if element on screen
    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight + (viewHeight * 0.2) >= 0);
    }

    //fades in an element
    function show(element) {
        (function fade() {
            var val = parseFloat(element.style.opacity);
            if (!((val += 0.05) > 1)) {
                element.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

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
                line1.style.width = 40 * i + 'px';
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
                line2.style.width = 40 * (i - 7) + 'px';
                line2w = txt.clientWidth + 15;
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

    //disables scrolling 
    function disableScrolling() {
        body.style.overflow = "hidden";
    }

    //enables scrolling 
    function enableScrolling() {
        body.style.overflow = "initial";
    }

    //shows moving arrow
    setInterval(function () {
        if (typed === true) {
            //hide element if scroll too far down
            if (window.pageYOffset > 500) {
                arrow.style.visibility = "hidden";
            }
            else {
                arrow.style.visibility = "visible";
                if (down === true) {
                    arrowPos *= 1.08;
                    arrow.style.bottom = arrowPos + "px";
                    if (arrowPos <= -80) {
                        down = false;
                        up = true;
                    }
                }
                else if (up === true) {
                    arrowPos *= 0.92;
                    arrow.style.bottom = arrowPos + "px";
                    if (arrowPos >= -1) {
                        down = true;
                        up = false;
                    }
                }
            }
        }
    }, 10);

    //follows scroll 
    window.onscroll = function () {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (typed === true) {
            if (window.innerWidth > 768) {
                //extend lines and don't extend if past page width
                if (line1w + (5 * window.pageYOffset) < window.innerWidth - 40)
                    line1.style.width = line1w + (5 * window.pageYOffset) + "px";

                if (line2w + (5 * window.pageYOffset) < window.innerWidth - 40)
                    line2.style.width = line2w + (5 * window.pageYOffset) + "px";

                if (txt.clientWidth + (3 * window.pageYOffset) < window.innerWidth) {
                    txt.style.left = 15 + (window.pageYOffset * 2.5) + "px";
                    txt.style.fontSize = ((window.pageYOffset / 30) + 1 * 10) + "vh";
                    txt.style.top = 32 - (window.pageYOffset / 20) + "%";
                    line1.style.top = 40 - (window.pageYOffset / 35) + "%";
                    line2.style.top = 55 + (window.pageYOffset / 44) + "%";
                    line1.style.borderTopWidth = 10 + window.pageYOffset / 10 + "px";
                    line2.style.borderTopWidth = 10 + window.pageYOffset / 10 + "px";
                }

                if (window.pageYOffset > 0) {
                    line1.style.opacity = 1 - (window.pageYOffset / 250);
                    line2.style.opacity = 1 - (window.pageYOffset / 250);
                    txt.style.opacity = 1 - (window.pageYOffset / 260);
                    arrow.style.opacity = 1 - (window.pageYOffset / 300);
                }
                else {
                    txt.style.opacity = "1";
                    arrow.style.opacity = "1";
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

        //project divide
        if (checkVisible(projHeader))
            show(projHeader);
        else
            projHeader.style.opacity = "0";

        //loop through all projects
        for (var i = 0; i < img.length; i++) {
            if (checkVisible(img[i])) {
                show(img[i]);
                show(title[i]);
                show(desc[i]);
            }
            else {
                img[i].style.opacity = "0";
                title[i].style.opacity = "0";
                desc[i].style.opacity = "0";
            }
        }

        //fade out about page when scrolled down
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

        if (scrollTop >= windowHeight && !scrolled) {
            scrolled = true;
            intro();
        }
    };

    //goes through about me text
    //letter goes to 2 to highlight background
    //letter goes to 1 when deleting text  
    function intro() {
        //loop through all off array
        if (index < me.length) {
            //for highlighting text
            if (letter === -2) {
                about.removeEventListener("click", intro);
                about.style.backgroundColor = "#ba411f";
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
                if (index >= 0) {
                    about.innerHTML += me[index].charAt(letter);
                    letter++;
                    if (letter === me[index].length) {
                        index++;
                        letter = -2;
                        setTimeout(intro, 1000);
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
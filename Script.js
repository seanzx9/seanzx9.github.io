//for typing effect
var i = 0;
var txt = ' Welcome to my Website!'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typing() {
    if (i < txt.length) {
        document.getElementById("first-parallax").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}
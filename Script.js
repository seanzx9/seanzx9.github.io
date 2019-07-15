//for typing effect
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


window.onload = function () {
    //elements on the page
    var txt = document.getElementById("projects-title");
    var desc = document.getElementById("projects-desc");
    var pic = document.getElementById("projects-pic");

    var title = [
        "LED Clock",
        "Project Name"
    ];
    var def = [
        "Digital clock programmed in x86 assembly with basic timekeeping and alarm functions, USB charging, and a LED binary seconds counter.",
        "Project description"
    ];

    var source = [
        "img/clock.jpg",
        "#.png"
    ];

    //start off on first project
    txt.innerHTML = title[0];
    desc.innerHTML = def[0];
    pic.src = source[0];

    //fade in text
    setTimeout(function () {
        window.scrollTo(1, 0);
        $("#projects-title").fadeIn(1000);
        $("#projects-desc").fadeIn(1000);
        $("#projects-pic").fadeIn(1000);
        txt.style.display = "block";
        desc.style.display = "block";
        pic.style.display = "block";
    }, 1);

    //change text as scrolling
    document.onscroll = function () {
        var pos = Math.floor(window.pageYOffset / window.innerHeight);
        var dec = pos - (window.pageYOffset / window.innerHeight);
        txt.innerHTML = title[pos];
        desc.innerHTML = def[pos];
        pic.src = source[pos];
        txt.style.opacity = 1.3 + (dec * 1.2);
        desc.style.opacity = 1.3 + (dec * 1.2);
        pic.style.opacity = 1.3 + (dec * 1.2);
    }
}
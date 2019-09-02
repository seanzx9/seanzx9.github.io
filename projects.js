window.onload = function () {

    //elements on the page
    var txt = document.getElementById("projects-title");
    var desc = document.getElementById("projects-desc");
    var pic = document.getElementById("projects-pic");
    document.getE

    var title = [
        "LED Clock",
        "Project Name 1",
        "Project Name 2"
    ];
    var def = [
        "Digital clock programmed in x86 assembly with basic timekeeping and alarm functions, USB charging, and a LED binary seconds counter.",
        "Project description 1",
        "Proect description 2"
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
        window.scrollTo(0, 0);
        $("#projects-title").fadeIn(1000);
        $("#projects-desc").fadeIn(1000);
        $("#projects-pic").fadeIn(1000);
        txt.style.display = "block";
        desc.style.display = "block";
        pic.style.display = "block";
    }, 1);

    //change text as scrolling
    document.onscroll = function () {
        var pos = Math.floor((window.pageYOffset / window.innerHeight) * 2);
        var dec = pos - (window.pageYOffset / window.innerHeight) * 2;
        txt.innerHTML = title[pos];
        desc.innerHTML = def[pos];
        pic.src = source[pos];
        txt.style.opacity = 1.2 + dec;
        desc.style.opacity = 1.2 + dec;
        pic.style.opacity = 1.2 + dec;
    }
}
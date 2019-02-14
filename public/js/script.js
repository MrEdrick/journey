function runOnScroll() {
    var header = document.getElementById("header");
    var header_left = document.getElementById("header-left");
    var header_rigth = document.getElementById("header-rigth");
    var header_center = document.getElementById("header-center");

    if (document.body.scrollTop >= 10) {
        if (header.classList.contains("header-solid")) {
            return;
        }

        header.classList.remove("header-blur");
        header_left.classList.remove("header-top-left");
        header_rigth.classList.remove("header-top-rigth");
        header_center.classList.remove("header-button");


        header_left.classList.add("header-left");
        header_rigth.classList.add("header-rigth");
        header_center.classList.add("header-center");
        header.classList.add("header-solid");
    } else {
        if (header.classList.contains("header-blur")) {
            return;
        }

        header.classList.remove("header-solid");
        header_left.classList.remove("header-left");
        header_rigth.classList.remove("header-rigth");
        header_center.classList.remove("header-center");

        header.classList.add("header-blur");
        header_left.classList.add("header-top-left");
        header_rigth.classList.add("header-top-rigth");
        header_center.classList.add("header-button");
    }
};

window.document.body.addEventListener("scroll", runOnScroll);
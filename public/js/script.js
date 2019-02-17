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

const start_img_path = "img/start/journey+jou+companies+resignification+experience+design+digital+marketing+img+start";
const start_img_type = ".jpg";

var slideIndexStartImages = 0;
var slideTimeoutStartImages;
showSlidesStartImages(slideIndex);

// Next/previous controls
function plusSlidesStartImages(n) {
    clearTimeout(slideTimeoutStartImages);
    showSlides(slideIndexStartImages += n);
}

// Thumbnail image controls
function currentSlideStartImages(n) {
    clearTimeout(slideTimeoutStartImages);
    showSlides(slideIndexStartImages = n);
}

function showSlidesStartImages() {
    var i;
    var slides = document.getElementsByClassName("start-slide-images");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexStartImages++;
    if (slideIndexStartImages > slides.length) {
        slideIndexStartImages = 1
    }
    slides[slideIndexStartImages - 1].style.display = "block";
    slides[slideIndexStartImages- 1].src = start_img_path + "+" + slideIndexStartImages.toString() + start_img_type;
    slideTimeout = setTimeout(showSlidesStartImages, 5000); // Change image every 3 seconds
}

const client_img_path = "img/client/journey+jou+companies+resignification+experience+design+digital+marketing+img+client";
const client_img_type = ".jpg";

var slideIndex = 0;
var slideTimeoutStartImages;
showSlidesClientImages(slideIndex);

// Next/previous controls
function plusSlidesClientImages(n) {
    clearTimeout(slideTimeoutClientImages);
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlideClientImages(n) {
    clearTimeout(slideTimeoutClientImages);
    showSlides(slideIndex = n);
}

function showSlidesClientImages() {
    var i;
    var slides = document.getElementsByClassName("client-slide-images");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].src = client_img_path + "+" + slideIndex.toString() + client_img_type;
    slideTimeout = setTimeout(showSlidesClientImages, 5000); // Change image every 3 seconds
}
// div carouselbox
var carousel = document.querySelector(".carouselbox");
// the two buttons next and prev
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;
// array of images for carousel box
var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];
// backround styling for box
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
// displaying images function from array
function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: when carosuel clicked, open new window.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: next button
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();

  navigate(1);
});

// TODO: previous button
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);

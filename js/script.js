let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");

  let slidesArr = Array.from(slides);

  let dots = document.querySelectorAll(".dot");

  let dotArr = Array.from(dots);

  if (n > slidesArr.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidesArr.length;
  }

  slidesArr.map((item) => {
    item.style.display = "none";
  });

  dotArr.map((item) => {
    item.className = item.className.replace(" active", "");
  });

  slidesArr[slideIndex - 1].style.display = "block";
  dotArr[slideIndex - 1].className += " active";
}

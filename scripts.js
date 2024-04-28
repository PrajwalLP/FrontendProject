window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  const images = document.querySelectorAll(".image img");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      this.style.opacity = "1";
    });
  });
  const sections = document.querySelectorAll(".about");
  let index = 0;

  function nextSection() {
    sections[index].style.display = "none";
    index = (index + 1) % sections.length;
    sections[index].style.display = "flex";
  }

  document.body.addEventListener("click", nextSection);
});

let currentIndex = 0;
function nextBackground() {
  const section = document.querySelector(".banner");
  const images = [
    "url('images/image-1.jpg')",
    "url('images/image-2.jpg')",
    "url('images/image-3.jpg')",
  ];
  section.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}
function openImage(img) {
  const fullImageSrc = img.getAttribute("data-full");
  window.open(fullImageSrc, "_blank", "width=auto, height=auto");
}

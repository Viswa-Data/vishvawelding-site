const heroImages = [
  "images/hero-1.jpg",
  "images/hero-2.jpg",
  "images/hero-3.jpg",
  "images/hero-4.jpg",
  "images/hero-5.jpg"
];

let currentImage = 0;
const heroBg = document.querySelector(".hero-bg");

// initial image
heroBg.style.backgroundImage = `url(${heroImages[0]})`;

setInterval(() => {
  currentImage = (currentImage + 1) % heroImages.length;
  heroBg.style.backgroundImage = `url(${heroImages[currentImage]})`;
}, 4000); // change every 4 seconds

// Bg-Slider Menu awal
const images = [
    'url("gambar/unklab.jpg")',
    'url("gambar/kostWullur1.jpg")',
    'url("gambar/kostWullur2.jpg")',
    'url("gambar/kostMizpa.png")',
    'url("gambar/kostMaringka1.jpg")',
    'url("gambar/kostMaringka2.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    const bgSlider = document.getElementById('bg-slider');
    bgSlider.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();
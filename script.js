const sliderImages = document.querySelectorAll('.hero-slider img');
let currentSlide = 0;

function showSlide(index) {
    sliderImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us. We will get back to you soon!');
    this.reset();
});

// Initialize slider
showSlide(currentSlide);
let currentSlide = 1;
const slides = Array.from(document.querySelectorAll('.slide'));
const totalSlides = slides.length;

function updateUI() {
    slides.forEach((slide, idx) => {
        if (idx + 1 === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function next() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateUI();
    }
}

function prev() {
    if (currentSlide > 1) {
        currentSlide--;
        updateUI();
    }
}

function goToSlide(n) {
    if (n >= 1 && n <= totalSlides) {
        currentSlide = n;
        updateUI();
    }
}

// Keyboard navigation
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
        next();
    } else if (e.key === 'ArrowLeft') {
        prev();
    }
});
    
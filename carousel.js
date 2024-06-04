document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, carousel.children.length - 1);
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * window.innerWidth;
        carousel.style.transform = `translateX(${offset}px)`;  
    }
});

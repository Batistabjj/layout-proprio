let currentIndex = 0;

const images = document.querySelectorAll('.imagem-carrosell img');
const totalImages = images.length;

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
    });
}
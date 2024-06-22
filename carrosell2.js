let currentIndex = 0;

const images = document.querySelectorAll('.imagem-carrosell img');
const totalImages = images.length;

document.getElementById('neext-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.getElementById('preev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
});
}
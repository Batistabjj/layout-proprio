
    document.addEventListener('DOMContentLoaded', function() {
        let currentIndex = 0;
        const images = document.querySelectorAll('.carousel-image img');
        const totalImages = images.length;

        document.getElementById('next-button').addEventListener('click', function() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].classList.add('active');
        });

        document.getElementById('prev-button').addEventListener('click', function() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            images[currentIndex].classList.add('active');
        });

        // Inicializa o carrossel mostrando a primeira imagem
        images[currentIndex].classList.add('active');
});

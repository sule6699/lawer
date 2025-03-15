function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}

let currentIndex = 0;
const slides = document.querySelectorAll('.image-slide');
const totalSlides = slides.length;

function changeImage() {
    slides.forEach((slide, index) => {
        slide.style.opacity = 0; // Hide all images
    });
    
    // Show the current image
    slides[currentIndex].style.opacity = 1;
    
    // Update the index to show the next image
    currentIndex = (currentIndex + 1) % totalSlides;
}

// Change image every 3 seconds
setInterval(changeImage, 3000); 

// Initial image display
changeImage();

// Toggle menu function
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Header scroll effects
let lastScrollPosition = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
    
    if (currentScrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    if (currentScrollPosition > lastScrollPosition) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    
    if (currentScrollPosition === 0) {
        header.classList.remove('header-hidden');
    }
    
    lastScrollPosition = currentScrollPosition;
});

// Go to top button
document.addEventListener('DOMContentLoaded', function() {
    const goToTopBtn = document.getElementById('goToTopBtn');
    
    window.addEventListener('scroll', function() {
        const heightToShow = 20;
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollPosition > heightToShow) {
            goToTopBtn.style.display = 'flex';
        } else {
            goToTopBtn.style.display = 'none';
        }
    });
    
    goToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});

// Adjust scrolling speed based on screen width
function adjustScrollingSpeed() {
    const winnersTrack = document.querySelector('.winners-track');
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 480) {
        winnersTrack.style.animation = 'scroll 15s linear infinite';
    } else if (screenWidth <= 768) {
        winnersTrack.style.animation = 'scroll 20s linear infinite';
    } else if (screenWidth <= 992) {
        winnersTrack.style.animation = 'scroll 25s linear infinite';
    } else {
        winnersTrack.style.animation = 'scroll 30s linear infinite';
    }
}

// Run on load and resize
window.addEventListener('load', adjustScrollingSpeed);
window.addEventListener('resize', adjustScrollingSpeed);
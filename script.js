// Mobile Menu Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksA = document.querySelectorAll('.nav-links a');

if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
        mobileNavToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu on link click
navLinksA.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


// Header Scroll Effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '0';
        header.style.background = 'rgba(255, 255, 255, 0.7)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple animation observer for product cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

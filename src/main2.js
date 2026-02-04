// Animations for Design 2

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const elements = document.querySelectorAll('.hero-text h1, .hero-text p, .cta-btn, .service-card, .quote-content');

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });
});

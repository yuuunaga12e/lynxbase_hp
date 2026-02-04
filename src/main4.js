// Animations for Design 4

document.addEventListener('DOMContentLoaded', () => {
    // Simple fade-in for hero elements
    const elements = document.querySelectorAll('.hero-text > *');

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.8s ease ${index * 0.15}s`;

        // Trigger reflow
        void el.offsetWidth;

        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});

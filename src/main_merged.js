// Animations for Merged Design
// Targeting Design 2 structural classes with Design 3 styles

document.addEventListener('DOMContentLoaded', () => {

    // Staggered Reveal
    const reveals = document.querySelectorAll('.hero-text h1, .hero-text p, .cta-btn, .service-card, .section-header');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Add delay based on index for stagger effect within the viewport
                // However, intersection observer might fire all at once for hero. 
                // Simple delay logic:
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 150);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        // Add specific transition delays for initial load elements
        if (el.closest('.hero-text')) {
            el.style.transitionDelay = `${index * 0.1}s`;
        }
        observer.observe(el);
    });

    // Custom class styling
    const style = document.createElement('style');
    style.innerHTML = `
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
    document.head.appendChild(style);
});

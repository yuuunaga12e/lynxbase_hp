// Animations for Design 3

document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for blobs
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const shape1 = document.querySelector('body::before'); // Pseudo elements often can't be selected like this for transform, but we can't select pseudo easily in JS.
        // Instead, let's animate the hero visual slightly

        const heroVisual = document.querySelector('.hero-visual');
        const heroContent = document.querySelector('.hero-content');

        if (heroVisual) heroVisual.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        if (heroContent) heroContent.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });

    // Staggered Reveal
    const reveals = document.querySelectorAll('.hero h1, .hero p, .btn-primary, .feature-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, idx * 100);
            }
        });
    });

    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        observer.observe(el);
    });

    // Custom class adder for reveal
    const style = document.createElement('style');
    style.innerHTML = `
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
    document.head.appendChild(style);
});

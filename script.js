// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Glitch effect on hover
const glitchText = document.querySelector('.glitch-text');
let glitchInterval;

function startGlitch() {
    if (glitchInterval) return;
    
    glitchInterval = setInterval(() => {
        const originalText = glitchText.innerText;
        const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
        
        let newText = '';
        for (let i = 0; i < originalText.length; i++) {
            if (Math.random() < 0.1) {
                newText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                newText += originalText[i];
            }
        }
        
        glitchText.innerText = newText;
    }, 50);
    
    setTimeout(() => {
        clearInterval(glitchInterval);
        glitchInterval = null;
        glitchText.innerText = 'Beyond\nAppearances';
    }, 500);
}

glitchText.addEventListener('mouseenter', startGlitch);

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.feature-card');
    
    parallaxElements.forEach((el, index) => {
        const speed = 1 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * 0.1 * speed}px)`;
    });
});

// Navbar background opacity on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .cta-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Intersection Observer for feature cards animation
const observerOptions2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions2);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer2.observe(card);
});

// Optional: Add hover effect for feature icons
document.querySelectorAll('.feature-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

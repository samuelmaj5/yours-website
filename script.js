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
    rootMargin: '-20px',
    threshold: 0.2
};

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Add some randomness to the animation
            const card = entry.target;
            const randomRotate = (Math.random() - 0.5) * 15; // Reduced rotation
            const randomDelay = Math.random() * 0.3 + 0.2; // Increased delay (0.2s to 0.5s)
            
            card.style.transform = `rotate(${randomRotate}deg)`;
            card.style.transitionDelay = `${randomDelay}s`;
            
            // Reset rotation after animation
            setTimeout(() => {
                card.style.transform = 'none';
            }, 1000 + (randomDelay * 1000)); // Increased duration
        }
    });
}, observerOptions2);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    // Add base delay based on index
    card.style.transitionDelay = `${index * 0.2}s`; // Increased delay between cards
    observer2.observe(card);
});

// Add interactive hover effect for feature icons
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const icon = card.querySelector('.feature-icon');
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate rotation based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25; // Reduced rotation sensitivity
        const rotateY = (centerX - x) / 25; // Reduced rotation sensitivity
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`; // Reduced scale
        icon.style.transform = `scale(1.1) translate(${(centerX - x) / 30}px, ${(centerY - y) / 30}px)`; // Reduced movement
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        const icon = card.querySelector('.feature-icon');
        icon.style.transform = 'scale(1) translate(0, 0)';
    });
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

// Scroll to Top Functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.createElement('div');
    scrollToTopButton.classList.add('scroll-to-top');
    scrollToTopButton.innerHTML = '↑';
    document.body.appendChild(scrollToTopButton);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-large");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function(e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});


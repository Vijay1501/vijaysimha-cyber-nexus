// Cybersecurity Portfolio - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initTypingAnimation();
    initParticles();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(5, 8, 15, 0.95)';
        } else {
            navbar.style.background = 'rgba(5, 8, 15, 0.9)';
        }
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
}

// Typing animation for hero section
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const text = 'Cybersecurity Student | Threat Hunter | Builder';
    let index = 0;
    let currentText = '';

    function typeText() {
        if (index < text.length) {
            currentText += text.charAt(index);
            typingElement.innerHTML = currentText + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeText, 100);
        } else {
            // Keep cursor blinking
            typingElement.innerHTML = currentText + '<span class="cursor">|</span>';
        }
    }

    // Start typing animation after a delay
    setTimeout(typeText, 1000);
}

// Particle animation
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Create particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (3 + Math.random() * 2) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .contact-form-container');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 500);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Simulate form submission
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'hsl(120, 100%, 50%)' : type === 'error' ? 'hsl(0, 84%, 60%)' : 'hsl(180, 100%, 50%)'};
        color: hsl(220, 13%, 3%);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some cyberpunk effects
function addCyberEffects() {
    // Add glitch effect to hero name occasionally
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance
                heroName.style.textShadow = '2px 0 #ff0000, -2px 0 #00ffff';
                setTimeout(() => {
                    heroName.style.textShadow = '';
                }, 150);
            }
        }, 2000);
    }
}

// Resume functions
function downloadResume() {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume file path
    link.download = 'Vijaysimha_Naidu_Resume.pdf';
    
    // Show a message since we don't have an actual file
    alert('Resume download feature would be implemented with an actual PDF file. Please contact me directly for my resume.');
}

function viewResume() {
    // Open resume in new tab
    alert('Resume viewer would open here. Please contact me directly to view my resume.');
}

// Initialize cyber effects after page load
window.addEventListener('load', addCyberEffects);

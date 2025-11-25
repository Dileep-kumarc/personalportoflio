// Enhanced Smooth Scrolling Implementation
class SmoothScrolling {
    constructor() {
        this.init();
    }
    
    init() {
        // Handle navigation link clicks
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (!targetId || targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (!target) return;
                
                e.preventDefault();
                
                // Calculate offset based on target section
                const offset = this.calculateOffset(targetId, target);
                
                // Use custom smooth scroll with calculated offset
                this.smoothScrollTo(target, offset);
                
                // Add visual feedback for mobile
                this.addScrollFeedback(anchor);
            });
        });
        
        // Add easing to all scroll behaviors
        this.addGlobalScrollEasing();
    }
    
    calculateOffset(targetId, target) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        
        // Different offsets for different sections
        switch(targetId) {
            case '#skills':
                // For skills section, add extra padding for better visibility
                return navbarHeight + (window.innerWidth <= 768 ? 20 : 40);
            case '#projects':
            case '#experience':
            case '#education':
            case '#contact':
                return navbarHeight + 20;
            case '#home':
                return 0; // No offset for home
            default:
                return navbarHeight + 20;
        }
    }
    
    addScrollFeedback(anchor) {
        // Add visual feedback on mobile
        if (window.innerWidth <= 768) {
            anchor.style.transform = 'scale(0.95)';
            anchor.style.transition = 'transform 0.15s ease';
            
            setTimeout(() => {
                anchor.style.transform = 'scale(1)';
            }, 150);
            
            // Add haptic feedback if available
            if (navigator.vibrate) {
                navigator.vibrate(30);
            }
        }
    }
    
    smoothScrollTo(target, offset = 0) {
        const targetPosition = target.offsetTop - offset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        
        // Optimized duration for faster navigation
        const baseDuration = 600;  // Reduced from 800
        const maxDuration = 900;   // Reduced from 1200
        const minDuration = 300;   // Reduced from 400
        
        let duration = Math.min(maxDuration, Math.max(minDuration, Math.abs(distance) * 0.4));
        
        // Even faster on mobile for snappier navigation
        if (window.innerWidth <= 768) {
            duration = Math.min(600, duration * 0.7);
        }
        
        // Faster navigation for navbar clicks
        const isNavbarClick = document.querySelector('.nav-menu').contains(document.activeElement);
        if (isNavbarClick) {
            duration = Math.min(500, duration * 0.8);
        }
        
        let start = null;
        
        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = this.easeInOutQuart(timeElapsed, startPosition, distance, duration);
            
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                // Ensure we end up exactly at the target position
                window.scrollTo(0, targetPosition);
                
                // Add completion feedback
                this.addCompletionFeedback(target);
            }
        };
        
        requestAnimationFrame(animation);
    }
    
    addCompletionFeedback(target) {
        // Subtle highlight effect when reaching target
        if (target.id === 'skills') {
            const skillCards = target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transform = 'scale(1.02)';
                    card.style.transition = 'transform 0.2s ease';
                    
                    setTimeout(() => {
                        card.style.transform = 'scale(1)';
                    }, 200);
                }, index * 50);
            });
        }
    }
    
    // Easing functions for smooth animation
    easeInOutQuart(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    }
    
    easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    addGlobalScrollEasing() {
        // Add momentum scrolling for webkit browsers
        document.body.style.webkitOverflowScrolling = 'touch';
        
        // Smooth scrolling for keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End') {
                e.preventDefault();
                
                const viewport = window.innerHeight;
                let targetScroll = window.pageYOffset;
                
                switch (e.key) {
                    case 'PageUp':
                        targetScroll -= viewport * 0.8;
                        break;
                    case 'PageDown':
                        targetScroll += viewport * 0.8;
                        break;
                    case 'Home':
                        targetScroll = 0;
                        break;
                    case 'End':
                        targetScroll = document.documentElement.scrollHeight - viewport;
                        break;
                }
                
                window.scrollTo({
                    top: Math.max(0, targetScroll),
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Initialize smooth scrolling
new SmoothScrolling();

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill-card, .project-card, .certificate-card, .education-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && message) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Download Resume button
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        // You can replace this with actual resume download link
        alert('Resume download will be available soon!');
        // window.open('path-to-your-resume.pdf', '_blank');
    });
}

// Hire me button
const hireMeBtn = document.querySelector('.btn-primary');
if (hireMeBtn && hireMeBtn.textContent.includes('Hire')) {
    hireMeBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Email button in hero section
const emailBtn = document.querySelector('.btn-secondary');
if (emailBtn) {
    emailBtn.addEventListener('click', () => {
        window.location.href = 'mailto:dileepkmr.c@gmail.com';
    });
}

// Add parallax effect to hero section (desktop only with clamp)
const applyParallax = () => {
    const heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;

    const isDesktop = window.innerWidth >= 992;
    const menuOpen = document.body.classList.contains('menu-open');

    if (!isDesktop || menuOpen) {
        heroImage.style.transform = 'translateY(0)';
        return;
    }

    const scrolled = window.pageYOffset;
    const offset = Math.max(-20, Math.min(60, scrolled * 0.2));
    heroImage.style.transform = `translateY(${offset}px)`;
};

window.addEventListener('scroll', applyParallax);
window.addEventListener('resize', applyParallax);
// Initialize parallax state
applyParallax();

// Enhanced Typewriter Effect for Hero Title with Sound
const createTypewriterEffect = () => {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const fullText = 'Hey, I am Dileep Kumar';
    const highlightStart = fullText.indexOf('Dileep Kumar');
    
    // Clear the text and prepare for animation
    typewriterElement.textContent = '';
    typewriterElement.style.width = '0';
    typewriterElement.style.borderRight = '3px solid var(--primary-color)';
    
    let charIndex = 0;
    let currentText = '';
    
    const typeChar = () => {
        if (charIndex < fullText.length) {
            currentText += fullText[charIndex];
            
            // Apply highlight to "Dileep Kumar"
            if (charIndex >= highlightStart) {
                const beforeHighlight = fullText.substring(0, highlightStart);
                const highlightText = currentText.substring(highlightStart);
                typewriterElement.innerHTML = beforeHighlight + 
                    '<span class="highlight-name">' + highlightText + '</span>';
            } else {
                typewriterElement.textContent = currentText;
            }
            
            charIndex++;
            
            // Variable typing speed for more natural effect
            const baseSpeed = 80;
            const randomVariation = Math.random() * 60;
            const pauseAfterSpace = currentText.endsWith(' ') ? 150 : 0;
            
            setTimeout(typeChar, baseSpeed + randomVariation + pauseAfterSpace);
        } else {
            
            // Typing complete - remove border cursor and add blinking cursor
            setTimeout(() => {
                typewriterElement.classList.add('typing-complete');
                typewriterElement.style.borderRight = 'none';
                
                // Add blinking cursor after name
                const highlightSpan = typewriterElement.querySelector('.highlight-name');
                if (highlightSpan) {
                    highlightSpan.innerHTML += '<span class="typing-cursor"></span>';
                }
                
                // Remove blinking cursor after 3 seconds
                setTimeout(() => {
                    const cursor = typewriterElement.querySelector('.typing-cursor');
                    if (cursor) cursor.remove();
                }, 3000);
            }, 500);
        }
    };
    
    // Start typing after page loads
    setTimeout(() => {
        typewriterElement.style.width = 'auto';
        typeChar();
    }, 1000);
};

// Initialize typewriter effect
document.addEventListener('DOMContentLoaded', createTypewriterEffect);

// ==================== CREATIVE ENHANCEMENTS ==================== //

// Minimal Loading Screen Implementation
class LoadingScreen {
    constructor() {
        this.hideLoader();
    }
    
    hideLoader() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
            loadingScreen.remove();
        }
        document.body.style.overflow = 'visible';
        document.body.style.pointerEvents = 'auto';
    }
}

// Enhanced Custom Cursor Implementation
class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.custom-cursor');
        this.dot = document.querySelector('.cursor-dot');
        this.ring = document.querySelector('.cursor-ring');
        this.mouseX = 0;
        this.mouseY = 0;
        this.ringX = 0;
        this.ringY = 0;
        this.isVisible = false;
        
        this.init();
    }
    
    init() {
        if (!this.cursor || !this.dot || !this.ring || window.innerWidth <= 768) return;
        
        // Ensure cursor is visible
        this.showCursor();
        
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            // Show cursor if hidden
            if (!this.isVisible) {
                this.showCursor();
            }
            
            // Update dot position immediately
            this.dot.style.left = this.mouseX + 'px';
            this.dot.style.top = this.mouseY + 'px';
            this.dot.style.opacity = '1';
            this.dot.style.visibility = 'visible';
        });
        
        // Handle mouse enter/leave for document
        document.addEventListener('mouseenter', () => this.showCursor());
        document.addEventListener('mouseleave', () => this.hideCursor());
        
        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .nav-link, input, textarea, .project-link, .btn-project');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.showCursor(); // Ensure cursor is visible on hover
                this.ring.classList.add('hover');
                this.dot.style.transform = 'translate(-50%, -50%) scale(1.5) !important';
                this.dot.style.background = 'var(--secondary-color) !important';
            });
            
            el.addEventListener('mouseleave', () => {
                this.ring.classList.remove('hover');
                this.dot.style.transform = 'translate(-50%, -50%) scale(1) !important';
                this.dot.style.background = 'var(--primary-color) !important';
            });
        });
        
        // Force cursor visibility on scroll
        window.addEventListener('scroll', () => {
            this.showCursor();
        });
        
        // Force cursor visibility on any mouse activity
        document.addEventListener('mousedown', () => this.showCursor());
        document.addEventListener('mouseup', () => this.showCursor());
        document.addEventListener('click', () => this.showCursor());
        
        // Animate ring with easing
        this.animateRing();
    }
    
    showCursor() {
        if (this.cursor && this.dot && this.ring) {
            this.cursor.style.opacity = '1';
            this.cursor.style.visibility = 'visible';
            this.dot.style.opacity = '1';
            this.dot.style.visibility = 'visible';
            this.ring.style.opacity = '1';
            this.ring.style.visibility = 'visible';
            this.isVisible = true;
        }
    }
    
    hideCursor() {
        if (this.cursor && this.dot && this.ring) {
            this.cursor.style.opacity = '0.3';
            this.ring.style.opacity = '0.3';
            this.isVisible = false;
        }
    }
    
    animateRing() {
        const lerp = (start, end, factor) => start + (end - start) * factor;
        
        const animate = () => {
            this.ringX = lerp(this.ringX, this.mouseX, 0.12);
            this.ringY = lerp(this.ringY, this.mouseY, 0.12);
            
            if (this.ring) {
                this.ring.style.left = this.ringX + 'px';
                this.ring.style.top = this.ringY + 'px';
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
}

// Sound functionality removed for better performance

// Micro-interactions Manager
class MicroInteractions {
    constructor() {
        this.init();
    }
    
    init() {
        this.addButtonEffects();
        this.addCardEffects();
        this.addFormEffects();
        this.addScrollEffects();
    }
    
    addButtonEffects() {
        const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, a');
        
        buttons.forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.95)';
            });
            
            btn.addEventListener('mouseup', () => {
                btn.style.transform = 'scale(1)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
            });
        });
    }
    
    addCardEffects() {
        const cards = document.querySelectorAll('.skill-card, .project-card, .certificate-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    addFormEffects() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.transform = 'scale(1.02)';
                input.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.2)';
                input.style.transition = 'all 0.3s ease';
            });
            
            input.addEventListener('blur', () => {
                input.style.transform = 'scale(1)';
                input.style.boxShadow = 'none';
            });
        });
    }
    
    addScrollEffects() {
        // Add smooth reveal animations on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .certificate-card');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }
}

// Particle Mouse Trail Effect
class ParticleTrail {
    constructor() {
        this.particles = [];
        this.maxParticles = 8;
        this.init();
    }
    
    init() {
        if (window.innerWidth <= 768) return; // Skip on mobile
        
        let isMouseMoving = false;
        let mouseTimeout;
        
        document.addEventListener('mousemove', (e) => {
            isMouseMoving = true;
            
            clearTimeout(mouseTimeout);
            mouseTimeout = setTimeout(() => {
                isMouseMoving = false;
            }, 100);
            
            if (isMouseMoving && Math.random() > 0.7) {
                this.createParticle(e.clientX, e.clientY);
            }
        });
        
        this.animate();
    }
    
    createParticle(x, y) {
        if (this.particles.length >= this.maxParticles) {
            const oldParticle = this.particles.shift();
            if (oldParticle.element.parentNode) {
                oldParticle.element.remove();
            }
        }
        
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
            opacity: 0.6;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(particle);
        
        this.particles.push({
            element: particle,
            x: x,
            y: y,
            life: 1,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        });
    }
    
    animate() {
        this.particles.forEach((particle, index) => {
            particle.life -= 0.015;
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            particle.element.style.opacity = particle.life;
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
            particle.element.style.transform = `translate(-50%, -50%) scale(${particle.life})`;
            
            if (particle.life <= 0) {
                if (particle.element.parentNode) {
                    particle.element.remove();
                }
                this.particles.splice(index, 1);
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Emergency loading screen removal
const emergencyShowPage = () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
        loadingScreen.remove();
    }
    document.body.style.overflow = 'visible';
    document.body.style.pointerEvents = 'auto';
};

// Show page immediately if loading takes too long
setTimeout(emergencyShowPage, 500);

// Initialize all enhancements immediately
document.addEventListener('DOMContentLoaded', () => {
    // Quick loading screen that doesn't block
    try {
        new LoadingScreen();
    } catch (e) {
        emergencyShowPage();
    }
    
    // Initialize everything immediately
    const initEverything = () => {
        // Enable custom cursor on desktop only
        if (window.innerWidth > 768) {
            // Force hide system cursor
            document.body.style.cursor = 'none !important';
            document.documentElement.style.cursor = 'none !important';
            
            // Aggressively show custom cursor
            const customCursor = document.querySelector('.custom-cursor');
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorRing = document.querySelector('.cursor-ring');
            
            if (customCursor && cursorDot && cursorRing) {
                customCursor.style.cssText = 'display: block !important; opacity: 1 !important; visibility: visible !important; z-index: 99999 !important; position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; pointer-events: none !important;';
                cursorDot.style.cssText = 'display: block !important; opacity: 1 !important; visibility: visible !important; z-index: 100001 !important; position: fixed !important; width: 12px !important; height: 12px !important; background: #ff6b6b !important; border-radius: 50% !important; transform: translate(-50%, -50%) !important; box-shadow: 0 0 20px #ff6b6b, 0 0 40px #ff6b6b !important; border: 2px solid white !important; mix-blend-mode: difference !important;';
                cursorRing.style.cssText = 'display: block !important; opacity: 1 !important; visibility: visible !important; z-index: 100000 !important; position: fixed !important; width: 40px !important; height: 40px !important; border: 2px solid rgba(255, 107, 107, 0.6) !important; border-radius: 50% !important; transform: translate(-50%, -50%) !important; backdrop-filter: blur(2px) !important;';
            }
            
            new CustomCursor();
            new ParticleTrail();
        }
        
        // Initialize micro-interactions (sound removed for better performance)
        new MicroInteractions();
        
        // Ensure interactions work
        document.body.style.pointerEvents = 'auto';
        
        // Force show page content
        document.body.style.overflow = 'visible';
    };
    
    // Initialize immediately and also after a short delay
    initEverything();
    setTimeout(initEverything, 100);
});

// Aggressive cursor visibility enforcement
setInterval(() => {
    if (window.innerWidth > 768) {
        const customCursor = document.querySelector('.custom-cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorRing = document.querySelector('.cursor-ring');
        
        if (customCursor && cursorDot && cursorRing) {
            // Force all cursor elements to be visible
            customCursor.style.cssText += 'display: block !important; opacity: 1 !important; visibility: visible !important; z-index: 99999 !important;';
            cursorDot.style.cssText += 'display: block !important; opacity: 1 !important; visibility: visible !important; z-index: 100001 !important;';
            cursorRing.style.cssText += 'display: block !important; opacity: 1 !important; visibility: visible !important; z-index: 100000 !important;';
            
            // Ensure body cursor is hidden
            document.body.style.cursor = 'none !important';
            document.documentElement.style.cursor = 'none !important';
        }
    }
}, 500); // Check every half second

// Also check on section changes
const allSections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && window.innerWidth > 768) {
            setTimeout(() => {
                const cursorDot = document.querySelector('.cursor-dot');
                const cursorRing = document.querySelector('.cursor-ring');
                
                if (cursorDot && cursorRing) {
                    cursorDot.style.cssText += 'display: block !important; opacity: 1 !important; visibility: visible !important;';
                    cursorRing.style.cssText += 'display: block !important; opacity: 1 !important; visibility: visible !important;';
                }
            }, 100);
        }
    });
}, { threshold: 0.5 });

allSections.forEach(section => sectionObserver.observe(section));

// Performance optimization - pause animations when tab is not active
document.addEventListener('visibilitychange', () => {
    const animatedElements = document.querySelectorAll('.floating-shapes, .grid-overlay');
    if (document.hidden) {
        animatedElements.forEach(el => el.style.animationPlayState = 'paused');
    } else {
        animatedElements.forEach(el => el.style.animationPlayState = 'running');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

// Toggle mobile menu
const toggleMenu = () => {
    if (!menuBtn || !navMenu) return;
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
};

// Close mobile menu when clicking a link
const closeMenu = () => {
    if (!menuBtn || !navMenu) return;
    menuBtn.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
};

// Event Listeners
if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && !e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// Sticky header on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Highlight current section in navigation (reuse existing sections/navLinks)
const highlightNavigation = () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// Initialize
highlightNavigation();


// Back-to-top button behavior
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    const toggleBackToTop = () => {
        if (window.pageYOffset > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();

    backToTopBtn.addEventListener('click', () => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            window.scrollTo({ top: 0 });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Projects Grid - allow natural vertical scrolling on touch devices
const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) {
    // Ensure vertical scroll is never blocked on mobile
    projectsGrid.style.touchAction = 'pan-y';

    const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

    // Enable click-and-drag horizontal scroll ONLY on non-touch devices
    if (!isTouchDevice) {
        let isDown = false;
        let startX;
        let scrollLeft;

        projectsGrid.addEventListener('mousedown', (e) => {
            isDown = true;
            projectsGrid.classList.add('dragging');
            startX = e.pageX - projectsGrid.offsetLeft;
            scrollLeft = projectsGrid.scrollLeft;
        });

        projectsGrid.addEventListener('mouseleave', () => {
            isDown = false;
            projectsGrid.classList.remove('dragging');
        });

        projectsGrid.addEventListener('mouseup', () => {
            isDown = false;
            projectsGrid.classList.remove('dragging');
        });

        projectsGrid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - projectsGrid.offsetLeft;
            const walk = (x - startX) * 2;
            projectsGrid.scrollLeft = scrollLeft - walk;
        });
    }
}

console.log('Portfolio loaded successfully! 🚀');

// Convert hero email button to 'Connect with me' and scroll to contact
const heroButtons = document.querySelector('.hero-buttons');
if (heroButtons) {
    const emailBtn = heroButtons.querySelector('.btn-secondary');
    if (emailBtn) {
        emailBtn.innerHTML = '<span>Connect with me</span>';
        emailBtn.classList.remove('btn-secondary');
        emailBtn.classList.add('btn-primary');
        emailBtn.addEventListener('click', () => {
            const target = document.querySelector('#contact');
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

// Enhanced Theme Toggle with Mobile Support
class EnhancedThemeToggle {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = this.getStoredTheme() || 'dark'; // Default to dark
        this.init();
    }
    
    getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            return null;
        }
    }
    
    setStoredTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            console.warn('Unable to store theme preference');
        }
    }
    
    init() {
        // Apply initial theme
        this.applyTheme(this.currentTheme);
        
        if (!this.themeToggle) return;
        
        // Set initial icon
        this.updateIcon();
        
        // Enhanced mobile event handling
        let touchStarted = false;
        
        // Touch events for mobile devices
        this.themeToggle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            touchStarted = true;
            
            // Visual feedback on touch
            this.themeToggle.style.transform = 'scale(0.95)';
        }, { passive: false });
        
        this.themeToggle.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (touchStarted) {
                touchStarted = false;
                this.toggleTheme();
                
                // Reset visual state
                setTimeout(() => {
                    this.themeToggle.style.transform = 'scale(1)';
                }, 100);
            }
        }, { passive: false });
        
        this.themeToggle.addEventListener('touchcancel', (e) => {
            touchStarted = false;
            this.themeToggle.style.transform = 'scale(1)';
        });
        
        // Click event for desktop (only if not a touch device)
        this.themeToggle.addEventListener('click', (e) => {
            // Prevent double trigger on mobile devices
            if (!touchStarted && !('ontouchstart' in window)) {
                e.preventDefault();
                e.stopPropagation();
                this.toggleTheme();
            }
        });
        
        // Add keyboard support for accessibility
        this.themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.currentTheme = newTheme;
        this.applyTheme(newTheme);
        this.updateIcon();
        
        // Add visual feedback
        this.addFeedback();
        
        // Sound functionality removed for better performance
    }
    
    applyTheme(theme) {
        // Remove existing theme classes
        document.documentElement.removeAttribute('data-theme');
        document.body.classList.remove('dark-theme', 'light-theme');
        
        // Apply new theme
        document.documentElement.setAttribute('data-theme', theme);
        document.body.classList.add(`${theme}-theme`);
        
        // Store preference
        this.setStoredTheme(theme);
        
        // Update meta theme-color for mobile status bar
        this.updateMetaThemeColor(theme);
        
        // Force style recalculation on mobile
        this.forceStyleUpdate();
    }
    
    updateIcon() {
        if (!this.themeToggle) return;
        
        const icon = this.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        this.themeToggle.innerHTML = `<i class="${icon}"></i>`;
        
        // Update aria-label for accessibility
        const label = this.currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
        this.themeToggle.setAttribute('aria-label', label);
    }
    
    updateMetaThemeColor(theme) {
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            const color = theme === 'dark' ? '#0a0a0a' : '#ffffff';
            metaThemeColor.setAttribute('content', color);
        }
    }
    
    forceStyleUpdate() {
        // Force repaint on mobile devices to ensure theme applies correctly
        if (window.innerWidth <= 768) {
            const body = document.body;
            const originalDisplay = body.style.display;
            body.style.display = 'none';
            body.offsetHeight; // Trigger reflow
            body.style.display = originalDisplay;
            
            // Ensure theme toggle is visible after theme change
            this.ensureToggleVisibility();
        }
    }
    
    ensureToggleVisibility() {
        if (!this.themeToggle) return;
        
        // Force visibility styles regardless of theme
        const forceStyles = {
            display: 'inline-flex !important',
            visibility: 'visible !important',
            opacity: '1 !important',
            zIndex: '1150 !important'
        };
        
        Object.entries(forceStyles).forEach(([prop, value]) => {
            this.themeToggle.style.setProperty(prop, value, 'important');
        });
        
        // Add specific positioning and styles for mobile
        if (window.innerWidth <= 768) {
            this.themeToggle.style.setProperty('position', 'fixed', 'important');
            this.themeToggle.style.setProperty('top', '16px', 'important');
            this.themeToggle.style.setProperty('bottom', 'auto', 'important');
            this.themeToggle.style.setProperty('right', '90px', 'important');
            this.themeToggle.style.setProperty('z-index', '1150', 'important');
        }
        
        // Add specific light theme styles if needed
        if (this.currentTheme === 'light') {
            this.themeToggle.style.setProperty('background', 'rgba(255, 255, 255, 0.95)', 'important');
            this.themeToggle.style.setProperty('border', '2px solid rgba(0, 0, 0, 0.3)', 'important');
            this.themeToggle.style.setProperty('color', '#222', 'important');
            this.themeToggle.style.setProperty('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.2)', 'important');
        } else {
            // Dark theme styles for mobile
            if (window.innerWidth <= 768) {
                this.themeToggle.style.setProperty('background', 'rgba(0, 0, 0, 0.8)', 'important');
                this.themeToggle.style.setProperty('border', '2px solid rgba(255, 255, 255, 0.3)', 'important');
                this.themeToggle.style.setProperty('color', '#fff', 'important');
                this.themeToggle.style.setProperty('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.3)', 'important');
            }
        }
    }
    
    addFeedback() {
        if (!this.themeToggle) return;
        
        // Add haptic feedback on mobile
        if (navigator.vibrate && window.innerWidth <= 768) {
            navigator.vibrate(50);
        }
        
        // Visual feedback animation
        this.themeToggle.style.transform = 'scale(0.9)';
        this.themeToggle.style.transition = 'all 0.15s ease';
        
        setTimeout(() => {
            this.themeToggle.style.transform = 'scale(1)';
        }, 150);
    }
    
}

// Initialize enhanced theme toggle
const enhancedThemeToggle = new EnhancedThemeToggle();

// View converter removed - cleaner mobile experience

// Periodic check for mobile theme toggle visibility
if (typeof window !== 'undefined') {
    // Check visibility every 2 seconds on mobile
    setInterval(() => {
        if (window.innerWidth <= 768 && enhancedThemeToggle && enhancedThemeToggle.themeToggle) {
            enhancedThemeToggle.ensureToggleVisibility();
        }
    }, 2000);
    
    // Also check on resize and orientation change
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && enhancedThemeToggle) {
            setTimeout(() => enhancedThemeToggle.ensureToggleVisibility(), 100);
        }
    });
    
    window.addEventListener('orientationchange', () => {
        if (enhancedThemeToggle) {
            setTimeout(() => enhancedThemeToggle.ensureToggleVisibility(), 300);
        }
    });
    
    // Emergency fallback for mobile theme toggle
    const addEmergencyThemeToggle = () => {
        if (window.innerWidth <= 768) {
            const themeButton = document.getElementById('themeToggle');
            if (themeButton) {
                // Add a direct onclick handler as fallback
                themeButton.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    
                    // Apply theme immediately
                    document.documentElement.setAttribute('data-theme', newTheme);
                    
                    // Update icon
                    const icon = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
                    themeButton.innerHTML = `<i class="${icon}"></i>`;
                    
                    // Store preference
                    try {
                        localStorage.setItem('theme', newTheme);
                    } catch (e) {
                        console.warn('Unable to store theme');
                    }
                    
                    // Visual feedback
                    themeButton.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        themeButton.style.transform = 'scale(1)';
                    }, 150);
                    
                    // Haptic feedback
                    if (navigator.vibrate) {
                        navigator.vibrate(50);
                    }
                };
                
                console.log('Emergency theme toggle handler added for mobile');
            }
        }
    };
    
    // Add emergency handler after 3 seconds
    setTimeout(addEmergencyThemeToggle, 3000);
}

// Scroll Progress Bar
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const fab = document.getElementById('fab');
    const fabMain = fab?.querySelector('.fab-main');
    const fabOptions = fab?.querySelector('.fab-options');
    
    if (!fab || !fabMain || !fabOptions) return;

    let isFabOpen = false;
    let scrollTimeout;
    let lastScrollTop = 0;
    const fabHeight = fab.offsetHeight;
    
    // Toggle FAB menu
    const toggleFabMenu = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        isFabOpen = !isFabOpen;
        fab.classList.toggle('active', isFabOpen);
        
        // Toggle between plus and close icons
        const icon = fabMain.querySelector('i');
        if (icon) {
            if (isFabOpen) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-plus');
            }
        }
        
        // Add/remove body class to prevent scrolling when FAB is open on mobile
        if (window.innerWidth <= 768) {
            document.body.style.overflow = isFabOpen ? 'hidden' : '';
        }
    };
    
    // Close FAB menu when clicking outside
    const closeFabMenu = (e) => {
        if (isFabOpen && !fab.contains(e.target)) {
            isFabOpen = false;
            fab.classList.remove('active');
            
            // Reset icon
            const icon = fabMain.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-plus');
            }
            
            // Re-enable body scroll
            document.body.style.overflow = '';
        }
    };
    
    // Handle FAB button click
    fabMain.addEventListener('click', toggleFabMenu);
    
    // Close when clicking outside
    document.addEventListener('click', closeFabMenu);
    
    // Prevent closing when clicking on FAB options
    fabOptions.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Handle scroll behavior
    const handleScroll = () => {
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Get current scroll position
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only run if scrolled more than 5px
        if (Math.abs(currentScroll - lastScrollTop) > 5) {
            // Scrolling down and not at the top
            if (currentScroll > lastScrollTop && currentScroll > 100) {
                fab.style.transform = 'translateY(100px)';
            } 
            // Scrolling up or at the top
            else {
                fab.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }
        
        // Set a timeout to handle scroll end
        scrollTimeout = setTimeout(() => {
            fab.style.transition = 'transform 0.3s ease';
        }, 100);
    };
    
    // Add scroll event listener with passive for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Handle window resize
    const handleResize = () => {
        // Reset body overflow if resizing to desktop
        if (window.innerWidth > 768) {
            document.body.style.overflow = '';
        } else if (isFabOpen) {
            document.body.style.overflow = 'hidden';
        }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up event listeners when component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('click', closeFabMenu);
        fabMain.removeEventListener('click', toggleFabMenu);
        fabOptions.removeEventListener('click', (e) => e.stopPropagation());
    };
});

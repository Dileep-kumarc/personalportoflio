/* ============================================
   MOBILE-OPTIMIZED NAVBAR JAVASCRIPT
   Add this to your script.js or create new file
   ============================================ */

(function() {
    'use strict';
    
    // Get DOM elements
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const themeToggle = document.getElementById('themeToggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    const html = document.documentElement;
    
    // Store scroll position for iOS
    let scrollPosition = 0;
    
    /* ============================================
       MOBILE MENU FUNCTIONS
       ============================================ */
    
    // Open menu
    function openMenu() {
        // Store current scroll position
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add active classes
        menuBtn.classList.add('active');
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        
        // Lock scroll and save position (iOS fix)
        body.style.top = `-${scrollPosition}px`;
        
        // Update aria attributes
        menuBtn.setAttribute('aria-expanded', 'true');
    }
    
    // Close menu
    function closeMenu() {
        // Remove active classes
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Restore scroll position
        body.style.top = '';
        window.scrollTo(0, scrollPosition);
        
        // Update aria attributes
        menuBtn.setAttribute('aria-expanded', 'false');
    }
    
    // Toggle menu
    function toggleMenu() {
        const isActive = navMenu.classList.contains('active');
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    /* ============================================
       EVENT LISTENERS - MENU
       ============================================ */
    
    // Menu button click
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Overlay click - close menu
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Nav links click - close menu and scroll
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // If menu is open, close it
            if (navMenu.classList.contains('active')) {
                closeMenu();
            }
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Smooth scroll to section
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - offset;
                    
                    // Wait a moment for menu to close
                    setTimeout(function() {
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            }
        });
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    /* ============================================
       THEME TOGGLE FUNCTION
       ============================================ */
    
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Optional: Add a little animation feedback
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(function() {
            themeToggle.style.transform = '';
        }, 300);
    }
    
    // Theme toggle click
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleTheme();
        });
    }
    
    // Load saved theme on page load
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
    }
    
    /* ============================================
       NAVBAR SCROLL EFFECT
       ============================================ */
    
    let lastScroll = 0;
    
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolled down
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }
    
    // Throttle scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(handleScroll);
    }, { passive: true });
    
    /* ============================================
       ACTIVE LINK ON SCROLL
       ============================================ */
    
    function updateActiveLink() {
        const scrollPos = window.pageYOffset + navbar.offsetHeight + 50;
        
        navLinks.forEach(function(link) {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const section = document.querySelector(href);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                }
            }
        });
    }
    
    // Update active link on scroll (throttled)
    let linkTimeout;
    window.addEventListener('scroll', function() {
        if (linkTimeout) {
            clearTimeout(linkTimeout);
        }
        linkTimeout = setTimeout(updateActiveLink, 100);
    }, { passive: true });
    
    /* ============================================
       PREVENT SCROLL ISSUES ON RESIZE
       ============================================ */
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    /* ============================================
       INITIALIZE ON PAGE LOAD
       ============================================ */
    
    document.addEventListener('DOMContentLoaded', function() {
        loadTheme();
        handleScroll();
        updateActiveLink();
        
        // Set initial aria attributes
        if (menuBtn) {
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Also run on window load (backup)
    window.addEventListener('load', function() {
        loadTheme();
        handleScroll();
        updateActiveLink();
    });
    
})();

/* ============================================
   EXPORT FOR USE IN OTHER SCRIPTS (Optional)
   ============================================ */

// If you need to close the menu from outside this script:
window.closeNavMenu = function() {
    const navMenu = document.getElementById('navMenu');
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;
    
    if (navMenu && navMenu.classList.contains('active')) {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        body.style.top = '';
        menuBtn.setAttribute('aria-expanded', 'false');
    }
};

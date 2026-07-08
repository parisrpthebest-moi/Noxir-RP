// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Wiki Navigation
    const wikiLinks = document.querySelectorAll('.wiki-sidebar a');
    const wikiSections = document.querySelectorAll('.wiki-section');

    wikiLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all sections and links
            wikiSections.forEach(section => section.classList.remove('active'));
            wikiLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link and corresponding section
            this.classList.add('active');
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');
            }
        });
    });

    // Set first wiki section as active on load
    if (wikiLinks.length > 0 && wikiSections.length > 0) {
        wikiLinks[0].classList.add('active');
        wikiSections[0].classList.add('active');
    }

    // Update active nav link
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentLocation)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Copy to clipboard function for links
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Lien copié!');
    });
}

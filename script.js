// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for hero section buttons
document.querySelectorAll('.cta-buttons .btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    threshold: 0.2
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: Stop observing after the section is visible
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Highlight active navigation link on scroll
const navLinks = document.querySelectorAll('.nav-links a');
const sectionDetails = Array.from(sections).map(section => ({
    id: section.getAttribute('id'),
    top: section.offsetTop,
    height: section.offsetHeight
}));

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100; // Adjust for offset
    const current = sectionDetails.find(section => 
        scrollY >= section.top && scrollY < section.top + section.height
    );

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href').substring(1) === current.id) {
            link.classList.add('active');
        }
    });
});

// Burger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        const expanded = navLinks.classList.toggle('mobile-visible');
        navLinks.classList.toggle('mobile-hidden');
        burgerMenu.setAttribute('aria-expanded', expanded);
    });
});
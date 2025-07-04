document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.querySelector('.preloader');

    // Simulate loading
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 3000);

    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#6e45e2"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6e45e2",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cryptic button effect
                if (this.classList.contains('portfolio-link') || this.classList.contains('btn')) {
                    const originalText = this.querySelector('.btn-text') ? this.querySelector('.btn-text').textContent : this.textContent;
                    const originalHTML = this.innerHTML;

                    // Replace with cryptic code
                    this.innerHTML = '<span class="cryptic-code">' + generateCrypticCode() + '</span>';

                    setTimeout(() => {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });

                        // Restore original content after scroll
                        setTimeout(() => {
                            if (this.querySelector('.btn-text')) {
                                this.querySelector('.btn-text').textContent = originalText;
                            } else {
                                this.innerHTML = originalHTML;
                            }
                        }, 1000);
                    }, 500);
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Generate cryptic code for button effect
    function generateCrypticCode() {
        const chars = '01{}[]();=>+−*/%&|^~!?';
        let code = '';
        for (let i = 0; i < 20; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Animate skill bars on scroll
    const skillCards = document.querySelectorAll('.skill-card');

    function animateSkills() {
        skillCards.forEach(card => {
            const skillLevel = card.getAttribute('data-skill-level');
            const progressBar = card.querySelector('.progress-bar');

            if (isElementInViewport(card) && !card.classList.contains('animated')) {
                card.classList.add('animated');
                progressBar.style.width = skillLevel + '%';
            }
        });
    }

    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Run once on page load

    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitButton = this.querySelector('#submitBtn');
            const formMessage = document.getElementById('formMessage');

            // Simulate form submission
            submitButton.disabled = true;
            submitButton.querySelector('.btn-text').textContent = 'Sending...';

            setTimeout(() => {
                formMessage.textContent = 'Your message has been sent successfully!';
                formMessage.classList.add('success');
                formMessage.style.display = 'block';

                submitButton.disabled = false;
                submitButton.querySelector('.btn-text').textContent = 'Send Message';

                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    formMessage.style.display = 'none';
                    formMessage.classList.remove('success');
                }, 3000);
            }, 1500);
        });
    }

    // Cursor trailer effect
    const cursorTrailer = document.querySelector('.cursor-trailer');

    if (cursorTrailer) {
        document.addEventListener('mousemove', e => {
            cursorTrailer.style.left = e.pageX + 'px';
            cursorTrailer.style.top = e.pageY + 'px';
        });

        // Interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .nav-link, .portfolio-card, .skill-card');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorTrailer.style.transform = 'translate(-50%, -50%) scale(2)';
                cursorTrailer.style.opacity = '0.2';
            });

            el.addEventListener('mouseleave', () => {
                cursorTrailer.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorTrailer.style.opacity = '0.5';
            });
        });
    }

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        // Hero section animations
        gsap.from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });

        gsap.from('.hero-tagline', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.6,
            ease: 'power3.out'
        });

        gsap.from('.hero-description', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.9,
            ease: 'power3.out'
        });

        gsap.from('.hero-buttons', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 1.2,
            ease: 'power3.out'
        });

        if (document.querySelector('.hero-image-wrapper')) {
            gsap.from('.hero-image-wrapper', {
                duration: 1,
                x: 50,
                opacity: 0,
                delay: 1,
                ease: 'power3.out'
            });
        }

        // Section animations
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            gsap.from(section.querySelectorAll('.section-title, .section-divider, .section-subtitle'), {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: 'power3.out'
            });
        });
    }

    // Load more portfolio items
    const loadMoreBtn = document.getElementById('loadMorePortfolio');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Simulate loading more items
            loadMoreBtn.querySelector('.btn-text').textContent = 'Loading...';

            setTimeout(() => {
                // In a real scenario, you would fetch and append new items here
                loadMoreBtn.querySelector('.btn-text').textContent = 'No More Projects';
                loadMoreBtn.disabled = true;
            }, 1500);
        });
    }

    // View full resume
    const viewResumeBtn = document.getElementById('viewFullResume');
    if (viewResumeBtn) {
        viewResumeBtn.addEventListener('click', () => {
            // Simulate opening resume
            viewResumeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';

            setTimeout(() => {
                window.open('(LATEST)Shravan Ramnarain CV.pdf', '_blank');
                viewResumeBtn.innerHTML = '<i class="fas fa-file-alt"></i> View Full Resume';
            }, 1000);
        });
    }
});

// Portfolio Filtering
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Portfolio Modal Animation
    const portfolioModals = document.querySelectorAll('.portfolio-modal');

    portfolioModals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function () {
            gsap.from(modal.querySelector('.modal-content'), {
                y: 50,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.out'
            });
        });
    });

    // Certificate Modal Animation
    const certificateModals = document.querySelectorAll('#matricModal, #degreeModal');

    certificateModals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function () {
            gsap.from(modal.querySelector('.modal-content'), {
                y: 50,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.out'
            });

            gsap.from(modal.querySelector('.certificate-modal-image'), {
                scale: 0.9,
                opacity: 0,
                duration: 0.5,
                delay: 0.2,
                ease: 'back.out(1.7)'
            });
        });
    });

    // View Details Button Animation
    const viewDetailButtons = document.querySelectorAll('.view-details');

    viewDetailButtons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Quick View Button Animation
    const quickViewButtons = document.querySelectorAll('.quick-view');

    quickViewButtons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Journey Section Animation
    const journeyItems = document.querySelectorAll('.journey-item');

    journeyItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });

    // Certificate Section Animation
    const certificateCards = document.querySelectorAll('.certificate-card');

    certificateCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.view-details').forEach(function (button) {
        button.addEventListener('click', function () {
            const project = this.getAttribute('data-project');
            if (project === 'ers') {
                window.location.href = 'ERS.html';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.view-details').forEach(function (button) {
        button.addEventListener('click', function () {
            const project = this.getAttribute('data-project');
            if (project === 'saopo') {
                window.location.href = 'OPO.html';
            }
        });
    });
});
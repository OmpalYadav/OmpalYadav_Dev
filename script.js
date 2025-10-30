document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // 1. Sticky Header on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // 3. Close Mobile Menu When a Link is Clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // 4. Active Nav Link Highlighting on Scroll
    const onScroll = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Triggers when section is 1/3 from the top of the viewport
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Run once on load

    // 5. Contact Form Simulation
    // A real form requires a backend or a third-party service like Formspree.
    // This code simulates a successful submission.
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Simulate sending message
                formMessage.textContent = 'Thank you! Your message has been sent.';
                formMessage.style.color = 'var(--success)';
                contactForm.reset();
            } else {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.style.color = 'var(--secondary)';
            }

            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }

});

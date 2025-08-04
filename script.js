document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // EmailJS form submission
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            formStatus.textContent = 'Sending...';
            formStatus.style.color = '#f59e0b'; // Warning color

            // Replace with your EmailJS Service ID and Template ID
            const serviceID = "YOUR_EMAILJS_SERVICE_ID";
            const templateID = "YOUR_EMAILJS_TEMPLATE_ID";

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.style.color = '#10b981'; // Success color
                    form.reset();
                }, (error) => {
                    formStatus.textContent = `Failed to send message: ${JSON.stringify(error)}`;
                    formStatus.style.color = '#ef4444'; // Error color
                });
        });
    }
});
// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');

    if (!submitButton) {
        console.error('Submit button not found!');
        return;
    }

    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Submit button clicked');
        
        // Get form values
        const name = contactForm.querySelector('input[placeholder="Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;

        console.log('Form values:', { name, email, subject, message });

        // Basic form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Construct the mailto link with the form data
        const mailtoLink = `mailto:murithigad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
`Name: ${name}
Email: ${email}
Message: ${message}`
        )}`;

        // Open the email client
        console.log('Opening mailto link:', mailtoLink);
        window.location.href = mailtoLink;
    });

    // Email validation helper function
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('#about, #services, #portfolio, #contact').forEach((section) => {
    observer.observe(section);
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbarDark');
    } else {
        navbar.classList.remove('navbarDark');
    }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.bgimage');
    if (parallax) {
        let scrollPosition = window.pageYOffset;
        parallax.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
    }
}); 

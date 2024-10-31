// Smooth scroll to sections
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert welcome message on page load
window.onload = function() {
    alert("Welcome to JobPortal! Find your next job here.");
};

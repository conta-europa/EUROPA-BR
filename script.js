document.addEventListener("DOMContentLoaded", function() {
    // Animation for hero section
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = 0;
    heroContent.style.transform = "translateY(-50px)";
    setTimeout(() => {
        heroContent.style.transition = "all 0.5s ease";
        heroContent.style.opacity = 1;
        heroContent.style.transform = "translateY(0)";
    }, 500);

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: "smooth"
            });
        });
    });

    // Form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Obrigado por entrar em contato! Responderemos em breve.");
    });
});

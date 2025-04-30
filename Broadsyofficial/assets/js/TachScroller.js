document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".dark-box-2"); // Right side sections
    const navLinks = document.querySelectorAll(".left-line-list li"); // Left side list items

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 50% visibility required to activate
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let activeId = entry.target.id;

                // Remove "active" class from all <li> elements
                navLinks.forEach(link => link.classList.remove("active"));

                // Find corresponding <li> and add "active" class
                let activeNav = document.querySelector(`.left-line-list li a[id="/#${activeId}"]`);
                if (activeNav) {
                    activeNav.parentElement.classList.add("active");
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.parentElement.classList.remove("active"));

            // Hide all content
            contents.forEach(content => content.style.display = "none");

            // Add active class to the clicked tab
            this.parentElement.classList.add("active");

            // Show the corresponding content
            const targetId = this.getAttribute("data-target");
            document.getElementById(targetId).style.display = "block";
        });
    });
});
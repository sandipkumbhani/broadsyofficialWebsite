document.addEventListener("DOMContentLoaded", function () {
    // Select the correct elements
    const tabs = document.querySelectorAll(".s-technologies-tabs__nav-item");
    const contents = document.querySelectorAll(".technologies");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove 'active' and add 'hidden' to all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => {
                content.classList.remove("active");
                content.classList.add("hidden"); // Add hidden class
            });

            // Add 'active' to the clicked tab and show corresponding content
            this.classList.add("active");
            const contentToShow = document.getElementById(this.getAttribute("data-id"));
            if (contentToShow) {
                contentToShow.classList.add("active");
                contentToShow.classList.remove("hidden"); // Remove hidden class
                uncommentCode(contentToShow);
            }
        });
    });
    function uncommentCode(element) {
        element.childNodes.forEach(node => {
            if (node.nodeType === Node.COMMENT_NODE) {
                const uncommented = document.createElement("div");
                uncommented.innerHTML = node.nodeValue; // Convert comment into HTML
                node.replaceWith(...uncommented.childNodes);
            }
        });
    }
});
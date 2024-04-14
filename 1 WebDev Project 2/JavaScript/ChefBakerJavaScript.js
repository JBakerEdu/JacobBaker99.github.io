document.addEventListener("DOMContentLoaded", function() {
    const toggleModeButton = document.getElementById("toggleMode");
    const toggleMenuButton = document.getElementById("toggleMenu");
    const body = document.body;
    const navMenu = document.querySelector("nav ul.menu");
    const footer = document.querySelector("footer");

    // Toggle dark mode
    toggleModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");
        // Save dark mode preference to local storage
        localStorage.setItem("darkModeEnabled", body.classList.contains("dark-mode"));
    });

    // Toggle menu
    toggleMenuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && event.target !== toggleMenuButton) {
            navMenu.classList.remove("show-menu");
        }
    });

    // Retrieve dark mode preference from local storage
    const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    if (darkModeEnabled) {
        body.classList.add("dark-mode");
        footer.classList.add("dark-mode");
    }

    // Handle recipe section dropdown change
    document.getElementById("recipe-section").addEventListener("change", function() {
        console.log("Dropdown menu selection changed"); // Check if the event listener is triggered

        var selectedSection = this.value;
        var sections = document.querySelectorAll(".recipe-section");

        sections.forEach(function(section) {
            if (selectedSection === "all" || section.id === selectedSection + "-recipes") {
                section.style.display = "block"; // Show selected section or show all sections
            } else {
                section.style.display = "none"; // Hide other sections
            }
        });
    });
});

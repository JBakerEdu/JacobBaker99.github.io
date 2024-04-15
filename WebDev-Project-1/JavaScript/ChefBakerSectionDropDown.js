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
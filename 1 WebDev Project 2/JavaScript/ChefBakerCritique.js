// Function to handle form submission
        document.getElementById("critique-form").addEventListener("submit", function(event) {
            event.preventDefault();

            // Get form values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var comment = document.getElementById("comment").value;

            // Create critique object
            var critique = {
                name: name,
                email: email,
                comment: comment
            };

            // Store critique in local storage
            localStorage.setItem("critique_" + Date.now(), JSON.stringify(critique));

            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("comment").value = "";

            // Display critique
            displayCritiques();
        });

        // Function to display critiques
        function displayCritiques() {
            var critiques = document.getElementById("critique-list");
            critiques.innerHTML = "";

            for (var key in localStorage) {
                if (key.startsWith("critique_")) {
                    var critique = JSON.parse(localStorage.getItem(key));

                    var li = document.createElement("li");
                    li.textContent = critique.name + " (" + critique.email + "): " + critique.comment;
                    critiques.appendChild(li);
                }
            }
        }

        // Display critiques on page load
        displayCritiques();
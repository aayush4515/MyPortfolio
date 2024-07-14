document.addEventListener('DOMContentLoaded', function() {
    // Check if the page is being loaded from GitHub Pages root
    if (window.location.pathname === "/MyPortfolio/") {
        // Set the default clicked button to Home
        document.getElementById('home').querySelector('.nav-button').classList.add('clicked');
        localStorage.setItem('clickedButton', 'home'); // Update localStorage with Home button
    } else {
        // Retrieve clickedButton from localStorage and set clicked state
        const clickedButton = localStorage.getItem('clickedButton');
        if (clickedButton) {
            document.getElementById(clickedButton).querySelector('.nav-button').classList.add('clicked');
        }
    }

    // Add click event listeners to button links
    document.querySelectorAll('.button-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const buttonId = this.getAttribute('id');

            // Remove clicked class from all buttons
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.classList.remove('clicked');
            });

            // Add clicked class to the current button
            this.querySelector('.nav-button').classList.add('clicked');

            // Store clickedButton in localStorage
            localStorage.setItem('clickedButton', buttonId);

            // Navigate to the href location after a short delay
            const url = this.getAttribute('href');
            setTimeout(() => {
                window.location.href = url;
            }, 100); // Adjust the delay as needed
        });
    });
});



/*document.addEventListener('DOMContentLoaded', function() {
    const clickedButton = localStorage.getItem('clickedButton');
    if (clickedButton) {
        document.getElementById(clickedButton).querySelector('.nav-button').classList.add('clicked');
    }

    document.querySelectorAll('.button-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.classList.remove('clicked');
            });
            const buttonId = this.getAttribute('id');
            this.querySelector('.nav-button').classList.add('clicked');
            localStorage.setItem('clickedButton', buttonId);

            // Navigate to the href location after a short delay
            const url = this.getAttribute('href');
            setTimeout(() => {
                window.location.href = url;
            }, 100); // Adjust the delay as needed
        });
    });
});
*/
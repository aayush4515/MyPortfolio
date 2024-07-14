document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.pathname; // Get current page URL
    const homeButton = document.getElementById('home');
    const buttons = document.querySelectorAll('.button-link');

    // Function to mark the correct button as clicked
    function markClickedButton() {
        const clickedButton = localStorage.getItem('clickedButton');

        // Remove 'clicked' class from all buttons
        buttons.forEach(button => {
            button.querySelector('.nav-button').classList.remove('clicked');
        });

        // Default to 'Home' button if no specific button found
        let buttonToClick = homeButton;

        // Check if there's a corresponding button for the current URL
        buttons.forEach(button => {
            const href = button.getAttribute('href');
            if (currentUrl === href || currentUrl.includes(href)) {
                buttonToClick = button;
            }
        });

        // Mark the button as clicked
        buttonToClick.querySelector('.nav-button').classList.add('clicked');
        localStorage.setItem('clickedButton', buttonToClick.id);
    }

    // Initial marking of clicked button based on current page
    markClickedButton();

    // Click event listeners for navigation buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            markClickedButton();

            // Navigate to the href location after a short delay
            const url = this.getAttribute('href');
            setTimeout(() => {
                window.location.href = url;
            }, 100); // Adjust the delay as needed
        });
    });

    // Clear localStorage on window unload
    window.addEventListener('beforeunload', function() {
        localStorage.removeItem('clickedButton');
    });
});


/*
document.addEventListener('DOMContentLoaded', function() {
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
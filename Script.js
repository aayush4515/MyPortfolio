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
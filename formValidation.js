document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from the fields
    const name = document.querySelector('input[name="fullname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    // Check for empty fields and email format
    if (!name) {
        alert('Please enter your full name.');
        document.querySelector('input[name="fullname"]').style.borderColor = 'red'; // Change the border color to red for empty fields
        return;
    }

    if (!email) {
        alert('Please enter your email address.');
        document.querySelector('input[name="email"]').style.borderColor = 'red'; // Change the border color to red for empty fields
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        document.querySelector('input[name="email"]').style.borderColor = 'red'; // Change the border color to red for invalid email
        return;
    }

    if (!message) {
        alert('Please enter your message.');
        document.querySelector('textarea[name="message"]').style.borderColor = 'red'; // Change the border color to red for empty message
        return;
    }

    // Hide the form and display the thank-you message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    // Change the background color of the thank-you message
    document.getElementById('thankYouMessage').style.backgroundColor = '#5fcac3'; // Change to a color you like

    // Optionally change the color of the text in the thank-you message
    document.getElementById('thankYouMessage').style.color = 'white';

    // Submit the form
    this.submit(); // Let Netlify handle the form submission

    // Reload the page after 5 seconds (optional)
    setTimeout(function() {
        if (document.getElementById('thankYouMessage').style.display === 'block') {
            location.reload();
        }
    }, 5000);
});

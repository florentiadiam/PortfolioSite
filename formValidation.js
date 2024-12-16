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
        return;
    }

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!message) {
        alert('Please enter your message.');
        return;
    }
    
    //Validation message if the user is sure he wants to send it

    const confirmation = `
        Are you sure you want to send this message?
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `;

    if (confirm(confirmation)) {
        this.submit();
    } else {
        alert('The submission was cancelled.');
    }
    
});
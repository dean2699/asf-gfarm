// Mobile Menu Toggle
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('nav::before'); // The hamburger icon

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Form Submission for Appointment Confirmation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Check for empty fields
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
            input.classList.add('is-invalid'); // Add invalid class for visual feedback
        } else {
            input.classList.remove('is-invalid'); // Remove invalid class if filled
        }
    });

    if (!allFilled) {
        alert("Please fill in all required fields.");
        return; // Prevent form submission if any required field is empty
    }

    event.preventDefault(); // Prevent default form submission
    
    var form = event.target; // Get the form element
    var formData = new FormData(form); // Create FormData object

    // Send the form data to your server for processing
    fetch('/confirm-appointment', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json' // Specify that we expect a JSON response
        }
    }).then(response => {
        if (response.ok) {
            const userEmail = form.querySelector('input[name="_replyto"]').value; // Get the user's email
            // Send a confirmation email to the user's email
            fetch('/send-confirmation-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userEmail })
            }).then(response => {
                if (response.ok) {
                    alert("Thank you for your message and appointment request! Please check your email for confirmation.");
                    form.reset(); // Clear the form inputs
                    window.location.reload(); // Refresh the page
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Oops! There was a problem submitting your form");
                        }
                    });
                }
            }).catch(error => {
                alert("Oops! There was a problem submitting your form");
            });
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert("Oops! There was a problem submitting your form");
                }
            });
        }
    }).catch(error => {
        alert("Oops! There was a problem submitting your form");
    });
});
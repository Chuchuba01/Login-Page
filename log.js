// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and its fields
    const loginForm = document.querySelector('.login');
    const usernameInput = document.querySelector('.login__input[type="text"]');
    const passwordInput = document.querySelector('.login__input[type="password"]');
    const loginButton = document.querySelector('.login__submit');

    // Add an event listener to the login button
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Clear any previous error messages
        clearErrors();

        // Validate the form
        if (validateForm()) {
            // Form is valid, you can proceed with the login
            // Here you can add your form submission logic (e.g., send a request to the server)
            alert('Form submitted successfully');
        }
    });

    // Function to validate the form
    function validateForm() {
        let isValid = true;

        // Check if username is empty
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            isValid = false;
        }

        // Check if password is empty
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password is required');
            isValid = false;
        }

        return isValid;
    }

    // Function to show an error message
    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
    }

    // Function to clear all error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (error) {
            error.remove();
        });
    }
});

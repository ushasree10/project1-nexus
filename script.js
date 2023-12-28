document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("loginContainer");
    const signupContainer = document.getElementById("signupContainer");
    const loginLink = document.getElementById("loginLink");
    const signupLink = document.getElementById("signupLink");

    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
    });

    signupLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
    });

    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateSignUpForm();
    });

    function validateSignUpForm() {
        const newUsername = document.getElementById("newUsername").value;
        const newEmail = document.getElementById("newEmail").value;
        const newContact = document.getElementById("newContact").value;
        const newPassword = document.getElementById("newPassword").value;
        const errorElement = document.getElementById("signupError");

        // Reset previous error messages
        errorElement.innerHTML = "";

        // Check if username, email, contact, and password meet criteria
        if (newUsername.length < 4) {
            showError("Username must be at least 4 characters long.");
            return;
        }

        if (!validateEmail(newEmail)) {
            showError("Invalid email address.");
            return;
        }

        if (!validateContact(newContact)) {
            showError("Invalid contact number.");
            return;
        }

        if (newPassword.length < 6) {
            showError("Password must be at least 6 characters long.");
            return;
        }

        // Simulate a successful signup (You can replace this with your actual signup logic)
        alert("Signup Successful!");

        // Redirect to login page after signup
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
    }

    function showError(message) {
        const errorElement = document.getElementById("signupError");
        errorElement.innerHTML = message;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateContact(contact) {
        // For simplicity, this function checks if the contact is a valid 10-digit number
        const contactRegex = /^\d{10}$/;
        return contactRegex.test(contact);
    }

    const showLoginPasswordToggle = document.getElementById("show-login-password");
    const showSignupPasswordToggle = document.getElementById("show-signup-password");

    showLoginPasswordToggle.addEventListener("click", function () {
        togglePasswordVisibility("pass");
    });

    showSignupPasswordToggle.addEventListener("click", function () {
        togglePasswordVisibility("newPassword");
    });

    function togglePasswordVisibility(passwordFieldId) {
        const passwordInput = document.getElementById(passwordFieldId);
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }
});

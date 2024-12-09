// Function to show error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = 'block';
    errorElement.innerText = message;
}

// Function to clear error messages
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = 'none';
    errorElement.innerText = '';
}

// Individual real-time validation feedback
// for each input field

//Username validation
document.getElementById('username').addEventListener('input', function () {
    const username = this.value.trim();
    if (username.length < 4) {
        showError('username-error', 'Username must be at least 4 characters long.');
    } else {
        clearError('username-error');
    }
});

//Email validation
document.getElementById('email').addEventListener('input', function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value.trim())) {
        showError('email-error', 'Please enter a valid email address.');
    } else {
        clearError('email-error');
    }
});

//Password validation
document.getElementById('password').addEventListener('input', function () {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(this.value)) {
        showError(
            'password-error',
            'Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, and one number.'
        );
    } else {
        clearError('password-error');
    }
});

//Confirm Password Validation
document.getElementById('confirmPassword').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    if (this.value !== password) {
        showError('confirmPassword-error', 'Passwords do not match.');
    } else {
        clearError('confirmPassword-error');
    }
});

//DOB Validation
document.getElementById('dob').addEventListener('blur', function () {
    if (this.value) {
        const birthDate = new Date(this.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        const adjustedAge =
            monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0) ? age : age - 1;

        if (adjustedAge < 18) {
            showError('dob-error', 'You must be at least 18 years old.');
        } else {
            clearError('dob-error');
        }
    }
});

//Country validation
document.getElementById('country').addEventListener('change', function () {
    if (this.value === "") {
        showError('country-error', 'Please select your country.');
    } else {
        clearError('country-error');
    }
});

//Terms and Conditions Validation
document.getElementById('terms').addEventListener('change', function () {
    if (!this.checked) {
        showError('terms-error', 'You must agree to the Terms and Conditions.');
    } else {
        clearError('terms-error');
    }
});

// Final validation on form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

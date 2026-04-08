const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("registrationForm");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// Validate Name
function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Validate Email
function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    } else if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email address";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Validate Password
function validatePassword() {
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        return false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

// Enable/Disable Button
function checkFormValidity() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}

// Real-time Validation
nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
passwordInput.addEventListener("input", checkFormValidity);

// Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateName() && validateEmail() && validatePassword()) {
        successMessage.textContent = "Registration Successful!";
        form.reset();
        submitBtn.disabled = true;
    }
});

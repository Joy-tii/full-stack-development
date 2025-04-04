const storageKey = "authTimestamp"; // Key to store authentication time
const passwordKey = "userPassword"; // Key to store user password
const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Function to check if authentication is still valid
function isAuthenticated() {
    const storedTime = localStorage.getItem(storageKey);
    if (!storedTime) return false;

    const currentTime = new Date().getTime();
    return currentTime - parseInt(storedTime) < expirationTime;
}

// Function to check the password
function checkPassword() {
    const input = document.getElementById("password-input").value;
    const error = document.getElementById("password-error");
    const savedPassword = localStorage.getItem(passwordKey);

    if (savedPassword && input === savedPassword) {
        localStorage.setItem(storageKey, new Date().getTime()); // Save authentication time
        showContent();
    } else {
        error.style.display = "block"; // Show error message
    }
}

// Function to set a new password
function setPassword() {
    const newPassword = document.getElementById("new-password-input").value;
    if (newPassword) {
        localStorage.setItem(passwordKey, newPassword);
        alert("Password set successfully! Use this password to log in.");
        document.getElementById("set-password-screen").style.display = "none";
        document.getElementById("password-screen").style.display = "flex";
    }
}

// Function to toggle password visibility
function togglePassword(inputId, eyeButton) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeButton.textContent = "🙈"; // Closed-eye emoji
    } else {
        passwordInput.type = "password";
        eyeButton.textContent = "👁"; // Open-eye emoji
    }
}

// Function to reset password
function resetPassword() {
    localStorage.removeItem(passwordKey);
    localStorage.removeItem(storageKey);
    alert("Password reset! Please set a new password.");
    location.reload();
}

// Function to show content after authentication
function showContent() {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// Check authentication status on page load
window.onload = function () {
    const savedPassword = localStorage.getItem(passwordKey);
    
    if (isAuthenticated()) {
        showContent();
    } else if (!savedPassword) {
        document.getElementById("set-password-screen").style.display = "flex"; // Show set password screen
    } else {
        document.getElementById("password-screen").style.display = "flex"; // Show login screen
    }
};

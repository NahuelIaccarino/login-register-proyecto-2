document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginToggle = document.getElementById("loginToggle");
    const registerToggle = document.getElementById("registerToggle");
    const loginError = document.getElementById("loginError");
    const registerSuccess = document.getElementById("registerSuccess");

    loginToggle.addEventListener("click", function() {
        loginForm.classList.add("active-form");
        registerForm.classList.remove("active-form");
    });

    registerToggle.addEventListener("click", function() {
        registerForm.classList.add("active-form");
        loginForm.classList.remove("active-form");
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;

        if (loginUsername.trim() === "" || loginPassword.trim() === "") {
            loginError.textContent = "Username and password are required";
        } else {
            window.location.href = "welcome-page.html";
        }
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const registerUsername = document.getElementById("registerUsername").value;
        const registerPassword = document.getElementById("registerPassword").value;

        if (registerUsername.trim() === "" || registerPassword.trim() === "") {
            registerSuccess.textContent = "";
            loginError.textContent = "Username and password are required for registration.";
        } else {
            registerSuccess.textContent = "Successful registration. Now you can login.";
            loginError.textContent = "";
        }
    });
});
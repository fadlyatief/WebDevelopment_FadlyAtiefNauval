const usernameInput = document.getElementById("username-register-input");
const emailInput = document.getElementById("email-register-input");
const passwordInput = document.getElementById("password-register-input");
const confirmPasswordInput = document.getElementById("confirmpassword-register-input");
const registerButton = document.getElementById("register-button");
const confirmPasswordAlert = document.getElementById("confirmpassword-alert");
const form = document.getElementById("register-form");
// kondisi awalnya
registerButton.disabled = true;
registerButton.style.opacity = "0.5";
registerButton.style.cursor = "not-allowed";

function validateForm() {
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    // cek smua hrs ada isinya
    if (
        username !== "" &&
        email !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        password === confirmPassword
    ) {
        confirmPasswordInput.style.outline = "none";
        registerButton.disabled = false;
        registerButton.style.opacity = "1";
        registerButton.style.cursor = "pointer";
        confirmPasswordAlert.style.display = "none";
    } else {
        if (confirmPassword !== "" && password !== confirmPassword) {
            confirmPasswordInput.style.outline = "2px solid red";
            confirmPasswordAlert.style.display = "block";

        } else {
            confirmPasswordInput.style.outline = "none";
            confirmPasswordAlert.style.display = "none";
        }

        registerButton.disabled = true;
        registerButton.style.opacity = "0.5";
        registerButton.style.cursor = "not-allowed";
    }
}

// mantau input
usernameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);

form.addEventListener("submit", (e) => {
    // cek validasi HTML (email format, required, dll)
    if (!form.checkValidity()) {
        form.reportValidity(); // munculin pesan browser
        return;
    }
    const username = encodeURIComponent(usernameInput.value.trim());
    form.action = 'index.html?username=' + username;
});
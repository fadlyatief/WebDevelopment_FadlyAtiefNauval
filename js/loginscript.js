const params = new URLSearchParams(window.location.search);
const usernameparam = params.get("username");
const username = document.getElementById("username-login-input");
const password = document.getElementById("password-login-input");
const form = document.getElementById("login-form");
const loginButton = document.getElementById("submit-login-button");

loginButton.disabled = true;
loginButton.style.opacity = "0.5";

if (usernameparam) {
    username.value = usernameparam;
}
function validateForm() {
    if (username.value.trim() !== "" && password.value.trim() !== "") {
        loginButton.disabled = false;
        loginButton.style.opacity = "1";
    }
}
username.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
form.addEventListener("submit", (e) => {
    // cek validasi HTML (email format, required, dll)
    if (!form.checkValidity()) {
        form.reportValidity(); // munculin pesan browser
        return;
    }
    const usernamelogin = encodeURIComponent(username.value.trim());
    form.action = "form.html?username=" + usernamelogin;
});
// Formcard component

const pillColors = [
  "linear-gradient(180deg, #a78bfa 0%, #60a5fa 100%)",
  "linear-gradient(180deg, #f87171 0%, #fb923c 100%)",
  "linear-gradient(180deg, #818cf8 0%, #a78bfa 100%)",
  "linear-gradient(180deg, #34d399 0%, #60a5fa 100%)",
];

let _formCardIndex = 0;

function renderFormCard({ id = "", name = "Untitled Form", lastUpdated = "-", totalResponses = 0 } = {}) {
  const pill = pillColors[_formCardIndex % pillColors.length];
  _formCardIndex++;
  return `
    <button class="form-card-row" onclick="window.location.href='form-preview.html?username=${username}&id=${id}'">
      <div class="form-card-left">
        <span class="form-card-pill" style="background: ${pill};"></span>
        <span>${name}</span>
      </div>
      <div class="form-card-right">
        Last Updated : ${lastUpdated} | Total Responses : ${totalResponses}
      </div>
    </button>
  `;
}

// Input component
function renderInput({ label = "", id = "", type = "text", placeholder = "", required = false } = {}) {
  const requiredAttr = required ? "required" : "";
  return `
    <label for="${id}">${label}</label>
    <input
      type="${type}"
      class="input-lightgray"
      id="${id}"
      placeholder="${placeholder}"
      ${requiredAttr}
    >
  `;
}

// btn component
function renderButton({ label = "Click", variant = "solid", type = "button", id = "", style = "" } = {}) {
  const cssClass = variant === "transparent" ? "transparent-button" : "solid-button-purple";
  const idAttr = id ? `id="${id}"` : "";
  const styleAttr = style ? `style="${style}"` : "";
  return `<button class="${cssClass}" type="${type}" ${idAttr} ${styleAttr}>${label}</button>`;
}

// navbar component
function renderNavbar({ variant = "login", username = "Profile" } = {}) {
  const root = document.getElementById("navbar-root");
  if (!root) {
    console.warn('Navbar: No element with id="navbar-root" found.');
    return;
  }

  let actionHTML = "";

  if (variant === "dashboard") {
    actionHTML = `
      <button class="transparent-button" style="margin: 0 10px;" id="username-profile">
        ${username}
      </button>`;
  } else if (variant === "register") {
    actionHTML = `
      <a href="index.html" style="margin: 0 10px; display: inline-flex;">
        ${renderButton({ label: "Log In" })}
      </a>`;
  } else {
    actionHTML = `
      <a href="register.html" style="margin: 0 10px; display: inline-flex;">
        ${renderButton({ label: "Register" })}
      </a>`;
  }

  root.innerHTML = `
    <div class="navbar">
      <div class="navbar-brand">
        <p class="brand-title"><Strong>DUMMY</Strong>Form</p>
      </div>
      ${actionHTML}
    </div>
  `;
}

renderNavbar({ variant: "dashboard", username: "Who tf is this" });

const params = new URLSearchParams(window.location.search);
const username = params.get("username");
const profileNameButton = document.getElementById("username-profile")
if (username) {
    profileNameButton.textContent = "Welcome, " + username;
}


// dummy data
const forms = [
    { id: 1, name: "Form 1", lastUpdated: "2h ago", totalResponses: 0, username: username },
    { id: 2, name: "Form 2", lastUpdated: "4h ago", totalResponses: 3, username: username },
    { id: 3, name: "Form 3", lastUpdated: "1d ago", totalResponses: 15, username: username },
    { id: 4, name: "Form 4", lastUpdated: "3d ago", totalResponses: 32, username: username },
];
_formCardIndex = 0;
document.getElementById("form-cards-root").innerHTML = forms
    .map(form => renderFormCard(form))
    .join("");
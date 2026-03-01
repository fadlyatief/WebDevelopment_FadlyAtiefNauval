renderNavbar({ variant: "dashboard", username: "Fadly" });

// cari id formnya
const params = new URLSearchParams(window.location.search);
const username = params.get("username");
const formId = params.get("id");
const profileNameButton = document.getElementById("username-profile")
if (username) {
    profileNameButton.textContent = "Welcome, " + username;
}
// buat back linknya
document.getElementById("back-link").href = `form.html?username=${username}`;
const placeholderForms = {
    1: { name: "Form 1", lastUpdated: "2h ago", totalResponses: 0, questions: ["Pertanyaan 1", "Pertanyaan 2"] },
    2: { name: "Form 2", lastUpdated: "4h ago", totalResponses: 3, questions: ["Pertanyaan 3", "Pertanyaan 4"] },
    3: { name: "Form 3", lastUpdated: "1d ago", totalResponses: 15, questions: ["Pertanyaan 5", "Pertanyaan 6"] },
    4: { name: "Form 4", lastUpdated: "3d ago", totalResponses: 32, questions: ["Pertanyaan 7", "Pertanyaan 8"] },
};

// Buat ngeload form
function loadForm(data) {
    document.title = `RistekForm | ${data.name}`;
    document.getElementById("preview-title").textContent = data.name;
    document.getElementById("preview-meta").textContent =
        `Last Updated: ${data.lastUpdated}  ·  Total Responses: ${data.totalResponses}`;

    // render dummy questions
    document.getElementById("preview-questions").innerHTML = data.questions
        .map((q, i) => `
                    <div class="preview-question">
                        <label class="preview-question-label">${i + 1}. ${q}</label>
                        <input type="text" class="input-lightgray" placeholder="Your answer" disabled>
                    </div>
                `).join("");

    document.getElementById("preview-loading").style.display = "none";
    document.getElementById("preview-content").style.display = "block";
}

// cri form by id
const formData = placeholderForms[formId];
if (formData) {
    loadForm(formData);
} else {
    document.getElementById("preview-loading").style.display = "none";
    document.getElementById("preview-error").style.display = "block";
}
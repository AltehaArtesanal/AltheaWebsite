// Reserved for future interactive or dynamic features
console.log("Website loaded successfully");
function toggleInfo(id) {
    const section = document.getElementById(id);

    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

document.querySelectorAll(".info-btn").forEach(button => {
    button.addEventListener("click", () => {
        modalTitle.textContent = button.dataset.title;
        modalBody.innerHTML = button.dataset.content;
        modal.classList.add("active");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", e => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});




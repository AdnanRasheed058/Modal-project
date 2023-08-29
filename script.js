let openModal = document.querySelector(".open-modal-btn");
let closeModal = document.querySelector(".cross-btn");
let modelBox = document.querySelector(".modal-wrapper");

openModal.addEventListener("click", () => {
    console.log('test');
    modelBox.classList.add("model-open");
});

closeModal.addEventListener("click", () => {
    modelBox.classList.remove("model-open");
});

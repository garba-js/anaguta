
    // MODAL
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalYear = document.getElementById("modalYear");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.getElementById("closeModal");

    const openButtons = document.querySelectorAll(".open-modal");

    openButtons.forEach(button => {
      button.addEventListener("click", () => {

        modalTitle.textContent = button.dataset.title;
        modalYear.textContent = button.dataset.year;
        modalImage.src = button.dataset.image;
        modalDescription.textContent = button.dataset.description;

        modal.classList.add("active");
      });
    });

    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });


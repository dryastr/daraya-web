document.querySelectorAll("[id^='openModal']").forEach(function(el) {
    el.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah perilaku default dari tautan
        var modalId = this.getAttribute("data-modal-id"); // Ambil ID modal dari atribut data-modal-id
        var modalContainer = document.getElementById(modalId); // Temukan elemen modal yang sesuai
        if (modalContainer) {
            modalContainer.classList.add("two");
            document.body.classList.add("modal-active");
        }
    });
});

document.querySelectorAll(".modal-background, .modal-close").forEach(function(el) {
    el.addEventListener("click", function(event) {
        if (event.target === this || event.target.closest(".modal-close")) { // Memeriksa apakah tombol close atau elemen terdekat dari tombol close yang ditekan
            var modalId = this.parentElement.getAttribute("id");
            document.getElementById(modalId).classList.remove("two");
            document.body.classList.remove("modal-active");
        }
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") { // Memeriksa apakah tombol yang ditekan adalah "Escape"
        var openModals = document.querySelectorAll(".modal-container.two"); // Mengambil semua modal yang terbuka
        if (openModals.length > 0) { // Memeriksa apakah ada modal yang terbuka
            openModals.forEach(function(modal) {
                modal.classList.remove("two");
            });
            document.body.classList.remove("modal-active");
        }
    }
});
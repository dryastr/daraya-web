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

document.querySelectorAll(".modal-background").forEach(function(el) {
    el.addEventListener("click", function(event) {
        if (event.target === this) {
            var modalId = this.parentElement.getAttribute("id");
            document.getElementById(modalId).classList.remove("two");
            document.body.classList.remove("modal-active");
        }
    });
});

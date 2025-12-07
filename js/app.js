document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav button").forEach(btn => {
        btn.addEventListener("click", () => {
            const page = btn.dataset.page;
            router.loadPage(page);
        });
    });
});

const router = {
    loadPage: async function(page) {
        const content = document.getElementById("content");

        // Cargar JSON según el botón
        const url = `data/${page}.json`;
        const resp = await fetch(url);
        const data = await resp.json();

        render.list(page, data);
    }
};

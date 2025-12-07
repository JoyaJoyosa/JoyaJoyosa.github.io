const render = {
    list: function(title, data) {
        const content = document.getElementById("content");

        let html = `<h2>${title}</h2><table border="1" cellpadding="6">`;

        // Encabezados automáticos
        const keys = Object.keys(data[0]);
        html += "<tr>" + keys.map(k => `<th>${k}</th>`).join("") + "</tr>";

        // Filas
        for (const entry of data) {
            html += "<tr>" + keys.map(k => `<td>${entry[k]}</td>`).join("") + "</tr>";
        }

        html += "</table>";

        content.innerHTML = html;
    }
};

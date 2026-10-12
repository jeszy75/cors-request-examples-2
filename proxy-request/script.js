const tbody = document.getElementById("country-data");
fetch("https://proxy.cors.dev/https://country.io/names.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status} ${response.statusText}`
            );
        }
        return response.json();
    })
    .then(data => {
        Object.entries(data).forEach(([code, name]) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${code}</td>
                <td>${name}</td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Failed to load countries:", error);
    });
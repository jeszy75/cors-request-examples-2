const cityElement = document.getElementById("city");
fetch("https://api.country.is/?fields=city")
    .then(response => {
        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status} ${response.statusText}`
            );
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        cityElement.textContent = data.city;
    })
    .catch(error => {
        console.error("Failed to load city:", error);
    });
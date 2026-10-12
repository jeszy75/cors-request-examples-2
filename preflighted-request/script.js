const calculatorForm = document.getElementById("calculator");
const expressionInput = document.getElementById("expression");
const resultOutput = document.getElementById("result");

calculatorForm.addEventListener("submit", event => {
    event.preventDefault();
    const expression = expressionInput.value;
    fetch("http://api.mathjs.org/v4/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // requires a preflight request
        },
        body: JSON.stringify({ expr: expression })
    })
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
            resultOutput.textContent = data.result;
        })
        .catch(error => {
            console.error(error);
            resultOutput.textContent = "Error";
        });
});
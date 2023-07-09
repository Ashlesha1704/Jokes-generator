var btnEl = document.getElementById("btn");
var jokeEl = document.getElementById("joke");

const apiKey = "5QYvfLBZpu8Dmc6CJoFFbQ==4clwym4uEEpschGD";
const options = {
    method: "GET",
    headers: {
        "X-Api_Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerText = data;
    } catch (error) {
        jokeEl.innerText = "An error occurred";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }
}

btnEl.addEventListener("click", getJoke);

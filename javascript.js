document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "0f152bd4d805219063b126d1127a261b"; // Replace with your OpenWeatherMap API key

    const getWeatherButton = document.getElementById("getWeather");
    const cityInput = document.getElementById("city");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    getWeatherButton.addEventListener("click", () => {
        const city = cityInput.value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("City not found.");
                }
                return response.json();
            })
            .then((data) => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                temperatureElement.textContent = `Temperature: ${temperature}°C`;
                descriptionElement.textContent = `Description: ${description}`;
                errorMessage.textContent = "";
            })
            .catch((error) => {
                console.error(error);
                errorMessage.textContent = "An error occurred. Please try again.";
                temperatureElement.textContent = "";
                descriptionElement.textContent = "";
            });
    });
});

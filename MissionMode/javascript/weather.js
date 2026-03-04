const url = "https://api.open-meteo.com/v1/forecast?latitude=17.3850&longitude=78.4867&current_weather=true";

const fetchWeather = async () => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const weather = data.current_weather;

        console.log(`Weather Report`);
        console.log(`Temperature: ${weather.temperature}`);
        console.log(`Wind Speed: ${weather.windspeed} km/h`);
        console.log(`Time: ${weather.time}`);

    } catch (error) {
        console.error(`Error while fetching weather data: ${error.message}`);
    }
};

fetchWeather();
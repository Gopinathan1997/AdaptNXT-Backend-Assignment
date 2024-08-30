const express = require("express");
const readline = require("readline");

const app = express();
const apiKey = "bd38bbce467ef6a82af55ceed090145d";

// Create an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const initializeServer = async (city) => {
  const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.error) {
      console.error("Invalid city name");
      process.exit(1);
    }

    const Data = {
      City: result.request.query,
      localTime: result.location.localtime,
      temperature: `${result.current.temperature}°C`,
      description: result.current.weather_descriptions.join(" "),
      humidity: `${result.current.humidity}%`,
      windSpeed: `${result.current.wind_speed} km/hr`,
    };

    console.log(Data);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }

  app.listen(3001, () => {});
};

// Prompt the user for the city name
rl.question("Enter City Name: ", (city) => {
  initializeServer(city);
  rl.close(); // Close the readline interface after the input is received
});

module.exports = app;

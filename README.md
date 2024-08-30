# Weather Data Fetcher

This is a simple Node.js application that fetches current weather data for a specified city using the Weatherstack API. The city is provided by the user via command-line input, and the weather data is served through an Express endpoint.

## Features

- Fetches real-time weather data for any city using the Weatherstack API.
- Accepts city name input via the command line.
- Logs the weather data to the console.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12.x or later)
- A Weatherstack API key (You can sign up for a free API key at [Weatherstack](https://weatherstack.com/))

## Installation
Install dependencies:

    npm install

Usage

Run the application:

After installing the dependencies and setting up your API key, start the application:

bash

    node app.js

Enter the city name:

When prompted, enter the name of the city for which you want to fetch the weather data:

    Enter City Name: London


Error Handling

    If an invalid city name is entered, the application will log an error message and return a 400 status with an appropriate message.

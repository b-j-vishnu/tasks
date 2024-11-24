import React from "react";
import "../assets/css/Weather.css";
import search_Icon from "../assets/images/magnifying-glass.png";
import suncloud_icon from "../assets/images/sun&cloud.png";
import humidity_icon from "../assets/images/humidity.png";
import wind_icon from "../assets/images/wind.png";
import rain_icon from "../assets/images/rain.png";
import snow_icon from "../assets/images/snow.png";
import drizzle_icon from "../assets/images/drizzle.png";
import clear_icon from "../assets/images/clear.png";
import { useState } from "react";
const WeatherApp = () => {
  let api_key = "8d15193d75533ccb8f30b4ab4dd27b7a";
  const [wIcon, setWIcon] = useState(suncloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityname");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("percentage");
    const wind = document.getElementsByClassName("km");
    const temprature = document.getElementsByClassName("degree");
    const location = document.getElementsByClassName("city");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "Km/h";
    temprature[0].innerHTML = data.main.temp + "°c";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWIcon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWIcon(suncloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWIcon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWIcon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWIcon(snow_icon);
    } else {
      setWIcon(clear_icon);
    }
  };
  return (
    <div className="h-[92vh] w-full flex text-white justify-center items-center">
      <section className="  rounded-lg py-7 bg-gradient-to-b from-red-600 to-green-600">
        <header className="flex mx-3 items-center justify-around">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent mx-3 cityname border px-2 py-1 rounded-md focus:outline-0 "
          />
          <img
            onClick={() => {
              search();
            }}
            src={search_Icon}
            className="w-7 h-7 hover:cursor-pointer "
          />
        </header>
        <main className="flex flex-col items-center my-7">
          <img className="w-1/4 h-20 hover:scale-125" src={wIcon}></img>
          <p className="text-xl my-2 degree">24°c</p>
          <p className="text-2xl my-2 city">London</p>
        </main>
        <footer className="flex justify-around">
          <div className="flex flex-col items-center">
            <img className="humidity w-9" src={humidity_icon}></img>

            <p className="percentage">64%</p>
            <p className="humi">Humidity</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="wind w-9" src={wind_icon}></img>
            <p className="km">18 Km/h</p>
            <p className="windspeed">Wind Speed</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default WeatherApp;

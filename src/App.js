import React from "react";
import "./App.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
  const allWeatherData = weatherData.map((ele, index) => {
    return (
      <WeatherForecast img={ele.img} condition={ele.condition} time={ele.time} key={index}/>
    )
  })
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {allWeatherData}
      </section>
    </div>
  );
}

import React from "react";
import WeatherData from "./WeatherData";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="Weather">
      <WeatherIcon img={props.img}/>
      <WeatherData condition={props.condition} time={props.time}/>
    </div>
  )
}
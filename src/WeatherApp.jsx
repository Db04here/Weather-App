import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
import "./WeatherApp.css"
import "@fontsource/roboto/500.css"

export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo]= useState({
    city: "Hyderabad",
    feelslike:35.01,
    temp: 37.23,
    tempMin:37.23,
    tempMax: 38.73,
    humidity :16,
    weather :"few clouds",  
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  };


  return(
    <div className="WeatherApp">
      <h2>
        <b>Weather App</b>
      </h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
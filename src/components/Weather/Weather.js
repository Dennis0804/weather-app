import React from "react";
import "./Weather.css";
import Forecast from "./components/Forecast/Forecast";

class Weather extends React.Component {
  render() {
    const {
      city,
      country,
      date,
      temperature,
      id,
      wind,
      description,
      icon,
      error,
      forecastOneDay,
      forecastTwoDay,
      forecastThreeDay,
      forecastFourDay,
      forecastFiveDay,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
    } = this.props;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

    return (
      <div className="weather__details">
        {city && country && (
          <div>
            Location: {city}, {country}
          </div>
        )}
        {date && <div> Date: {date}</div>}
        {temperature && <div>Temperature: {temperature}°C</div>}
        {id && <div>ID: {id}</div>}
        {wind && <div>Wind: {wind}</div>}
        {description && <div>Weather: {description}</div>}
        {icon && (
          <img
            className="current-condition"
            src={iconUrl}
            alt={description}
          ></img>
        )}
        {error && <p>{error}</p>}
        <Forecast
          forecastOneDay={forecastOneDay}
          forecastTwoDay={forecastTwoDay}
          forecastThreeDay={forecastThreeDay}
          forecastFourDay={forecastFourDay}
          forecastFiveDay={forecastFiveDay}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
          icon5={icon5}
        />
      </div>
    );
  }
}

export default Weather;

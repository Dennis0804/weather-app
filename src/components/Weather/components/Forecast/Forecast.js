import React from "react";
import "./Forecast.css";

class Forecast extends React.Component {
  render() {
    const {
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
    const forecastIconUrl = [
      `http://openweathermap.org/img/wn/${icon1}.png`,
      `http://openweathermap.org/img/wn/${icon2}.png`,
      `http://openweathermap.org/img/wn/${icon3}.png`,
      `http://openweathermap.org/img/wn/${icon4}.png`,
      `http://openweathermap.org/img/wn/${icon5}.png`,
    ];

    return (
      <div className="forecast__container">
        <div className="forecast__temperature">
          {forecastOneDay && <div>OneDay: {forecastOneDay}°C</div>}
          {forecastTwoDay && <div>TwoDays: {forecastTwoDay}°C</div>}
          {forecastThreeDay && <div>ThreeDays: {forecastThreeDay}°C</div>}
          {forecastFourDay && <div>FourDays: {forecastFourDay}°C</div>}
          {forecastFiveDay && <div>FiveDays: {forecastFiveDay}°C</div>}
        </div>
        <div className="forecast__condition--icon">
          {icon1 && <img src={forecastIconUrl[0]} alt="天气图片"></img>}
          {icon2 && <img src={forecastIconUrl[1]} alt="天气图片"></img>}
          {icon3 && <img src={forecastIconUrl[2]} alt="天气图片"></img>}
          {icon4 && <img src={forecastIconUrl[3]} alt="天气图片"></img>}
          {icon5 && <img src={forecastIconUrl[4]} alt="天气图片"></img>}
        </div>
      </div>
    );
  }
}

export default Forecast;

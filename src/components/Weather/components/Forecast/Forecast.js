import React from "react";
import "./Forecast.css";

class Forecast extends React.Component {
  render() {
    const forecastIconUrl = [
      `http://openweathermap.org/img/wn/${this.props.icon1}.png`,
      `http://openweathermap.org/img/wn/${this.props.icon2}.png`,
      `http://openweathermap.org/img/wn/${this.props.icon3}.png`,
      `http://openweathermap.org/img/wn/${this.props.icon4}.png`,
      `http://openweathermap.org/img/wn/${this.props.icon5}.png`,
    ]
    return (
      <div className="forecast__container"> 
        <div className="forecast__temperature">     
          {this.props.forecastOneDay && <div>OneDay: { this.props.forecastOneDay }°C</div>}
          {this.props.forecastTwoDay && <div>TwoDays: { this.props.forecastTwoDay }°C</div>}
          {this.props.forecastThreeDay && <div>ThreeDays: { this.props.forecastThreeDay }°C</div>}
          {this.props.forecastFourDay && <div>FourDays: { this.props.forecastFourDay }°C</div>}
          {this.props.forecastFiveDay && <div>FiveDays: { this.props.forecastFiveDay }°C</div>}
        </div>  
        <div className="forecast__condition--icon">
          {this.props.icon1 && <img src={forecastIconUrl[0]} alt='天气图片'></img>}
          {this.props.icon2 && <img src={forecastIconUrl[1]} alt='天气图片'></img>}
          {this.props.icon3 && <img src={forecastIconUrl[2]} alt='天气图片'></img>}
          {this.props.icon4 && <img src={forecastIconUrl[3]} alt='天气图片'></img>}
          {this.props.icon5 && <img src={forecastIconUrl[4]} alt='天气图片'></img>}
        </div>
      </div>
    )
  }
}

export default Forecast; 
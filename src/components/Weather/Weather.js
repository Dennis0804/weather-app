import React from "react";
import "./Weather.css";
import Forecast from "./components/Forecast/Forecast";

class Weather extends React.Component {
  render() {
    const iconUrl = `http://openweathermap.org/img/wn/${this.props.icon}.png`;

    return (
      <div className="weather__details">
        {this.props.city && this.props.country && (
          <div>
            Location: {this.props.city}, {this.props.country}
          </div>
        )}
        {this.props.date && <div>Date: {this.props.date}</div>}
        {this.props.temperature && (
          <div>Temperature: {this.props.temperature}°C</div>
        )}
        {this.props.id && <div>ID: {this.props.id}</div>}
        {this.props.wind && <div>Wind: {this.props.wind}</div>}
        {this.props.description && <div>Weather: {this.props.description}</div>}
        {this.props.icon && <img className="current-condition" src={iconUrl} alt={this.props.description}></img>}
        {this.props.error && <p>{this.props.error}</p>}
        <Forecast
          forecastOneDay={this.props.forecastOneDay}
          forecastTwoDay={this.props.forecastTwoDay}
          forecastThreeDay={this.props.forecastThreeDay}
          forecastFourDay={this.props.forecastFourDay}
          forecastFiveDay={this.props.forecastFiveDay}
          icon1={this.props.icon1}
          icon2={this.props.icon2}
          icon3={this.props.icon3}
          icon4={this.props.icon4}
          icon5={this.props.icon5}
        />
      </div>
    );
  }
}

export default Weather;

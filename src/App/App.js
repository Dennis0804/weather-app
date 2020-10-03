import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Weather from "../components/Weather/Weather";
import "./App.css";

const API_KEY = "3fc44ed29eca0efe94b7e522e87c179e";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      date: undefined,
      id: undefined,
      wind: undefined,
      description: undefined,
      icon: undefined,
      error: undefined,
      forecastOneDay: undefined,
      forecastTwoDay: undefined,
      forecastThreeDay: undefined,
      forecastFourDay: undefined,
      forecastFiveDay: undefined,
      icon1: undefined,
      icon2: undefined,
      icon3: undefined,
      icon4: undefined,
      icon5: undefined,
    };
  }

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    if (city && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&unit=metric`
      );
      const result = await api_call.json();

      console.log(result);
      
      this.setState({
        temperature: Math.round(result.list[0].main.temp - 273.15),
        city: result.city.name,
        country: result.city.country,
        date: result.list[0].dt_txt.substring(0, 10),
        id: result.city.id,
        wind: result.list[0].wind.speed,
        description: result.list[0].weather[0].description,
        icon: result.list[0].weather[0].icon,
        error: "",
        forecastOneDay: Math.round(result.list[4].main.temp - 273.15),
        forecastTwoDay: Math.round(result.list[12].main.temp - 273.15),
        forecastThreeDay: Math.round(result.list[20].main.temp - 273.15),
        forecastFourDay: Math.round(result.list[28].main.temp - 273.15),
        forecastFiveDay: Math.round(result.list[36].main.temp - 273.15),
        icon1: result.list[4].weather[0].icon,
        icon2: result.list[12].weather[0].icon,
        icon3: result.list[20].weather[0].icon,
        icon4: result.list[28].weather[0].icon,
        icon5: result.list[36].weather[0].icon,
      });
    } else {
      this.setState({
        error: "Please enter a city and country",
      });
    }
  };

  render() {
    return (
      <div className="weather__container">
        <Header />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          date={this.state.date}
          id={this.state.id}
          wind={this.state.speed}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}
          forecastOneDay={this.state.forecastOneDay}
          forecastTwoDay={this.state.forecastTwoDay}
          forecastThreeDay={this.state.forecastThreeDay}
          forecastFourDay={this.state.forecastFourDay}
          forecastFiveDay={this.state.forecastFiveDay}
          icon1={this.state.icon1}
          icon2={this.state.icon2}
          icon3={this.state.icon3}
          icon4={this.state.icon4}
          icon5={this.state.icon5}
        />
      </div>
    );
  }
}

export default App;

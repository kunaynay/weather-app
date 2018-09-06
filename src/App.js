import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import axios from 'axios';

const API_KEY = "b89ff671aeb5aecc5a6bf6a44fb08262";
const CORS = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await axios.get(`${CORS}https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);

    const data = await api_call;
    if (city && country) {
      this.setState({
        temperature: data.data.main.temp,
        city: data.data.name,
        country: data.data.sys.country,
        humidity: data.data.main.humidity,
        description: data.data.weather[0].description
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        error: 'Please enter a city and country'
      })
      }
  }

  render() {
    const {temperature, city, country, humidity, description, error} = this.state;
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                  temperature={temperature}
                  city={city}
                  counrty={country}
                  humidity={humidity}
                  description={description}
                  error={error}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;




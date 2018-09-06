import React, { Component } from 'react'

class Weather extends Component{
  render() {
    const {temperature, city, country, humidity, description, error} = this.props;
    return (
      <div className="weather--info">
        { temperature && <p className="weather__key">Temperature: <span className="weather__value">{temperature} °C</span> </p>}
        { humidity && <p className="weather__key">Humidity: <span className="weather__value">{humidity}</span>%</p>}
        { city && <p className="weather__key">Location: <span className="weather__value">{city}</span> </p> }
        { country && <p className="weather__key">Location: <span className="weather__value">{country}</span> </p> }
        { description && <p className="weather__key">Description: <span className="weather__value">{description}</span></p>}
        { error && <p className="weather__key">Error: {error}</p>}
      </div>
    )
  }
};

export default Weather;
import React, { Component } from 'react';
import './App.css';

import Text from '../SideText';
import Site from '../Site';
import Weather from '../Weather';


const API_KEY = '5b6e2ea387d6bc208427c65ed96cd662'
const ICONS = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
}

class LoadWeather extends Component{
    constructor(props){
        super(props);
        this.state={
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            pressure: undefined,
            error: undefined,
            icon: undefined,
            clouds: undefined
        }
    }
    loadWeather = (event) => {
            event.preventDefault();
            const city = event.target.elements.city.value;
            const country = event.target.elements.country.value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`)
                .then(response => {
                        if(response.ok){
                            return response.json();

                        } else {
                            console.log(response)
                        }
                    }
                )
                .then(data =>{
                    if(city && country){
                        this.setState({
                            city: data.name,
                            country: data.sys.country,
                            temperature: data.main.temp,
                            humidity: data.main.humidity,
                            pressure: data.main.pressure,
                            description: data.weather[0].description,
                            icon: ICONS[data.weather[0].icon],
                            clouds: data.clouds.all,
                            error: ''
                        })
                    }else {
                        this.setState({
                            temperature: undefined,
                            city: undefined,
                            country: undefined,
                            humidity: undefined,
                            description: undefined,
                            pressure: undefined,
                            clouds: undefined,
                            error: 'Please enter the values.'
                        })
                    }
            })
        }

    loadGps=()=>{
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords.latitude)
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`)
                        .then(response => {
                                if(response.ok){
                                    return response.json();

                                } else {
                                    console.log(response)
                                }
                            }
                        )
                        .then(data => {
                            if (position) {
                                this.setState({
                                    city: data.name,
                                    country: data.sys.country,
                                    temperature: data.main.temp,
                                    humidity: data.main.humidity,
                                    pressure: data.main.pressure,
                                    description: data.weather[0].description,
                                    icon: ICONS[data.weather[0].icon],
                                    clouds: data.clouds.all,
                                    error: ''
                                })
                            } else {
                                this.setState({
                                    temperature: undefined,
                                    city: undefined,
                                    country: undefined,
                                    humidity: undefined,
                                    description: undefined,
                                    pressure: undefined,
                                    clouds: undefined,
                                    error: 'Please enter the values.'
                                })
                            }
                        })
                },
                (error) => console.log("error localization", error),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
        }

    render() {
        const {city, country, temperature, humidity, description, icon, clouds, pressure, error} = this.state
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                            <div className="row">
                                <div className="title-container">
                                    <Text/>
                                </div>
                                <div className="form-container">
                                <Site loadWeather={this.loadWeather} loadGps={this.loadGps}/>
                                <Weather temperature={temperature}
                                  icon={icon}
                                  humidity={humidity}
                                  city={city}
                                  country={country}
                                  description={description}
                                  pressure={pressure}
                                  clouds={clouds}
                                  error={error}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div>
        <LoadWeather/>
      </div>
    );
  }
}

export default App;

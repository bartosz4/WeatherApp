import React from "react";
import AnimatedWeather from './AnimatedWeather'

const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country && <p className="weather__key"> Location:
                <span className="weather__value"> {props.city}, {props.country}</span>
            </p>
        }
        {
            props.temperature && <p className="weather__key"> Temperature:
                <span className="weather__value"> <AnimatedWeather icon={props.icon}/>{props.temperature} <sup>o</sup>C</span>
            </p>
        }
        {
            props.humidity && <p className="weather__key"> Humidity:
                <span className="weather__value"> {props.humidity} %</span>
            </p>
        }
        {
            props.description && <p className="weather__key"> Conditions:
                <span className="weather__value"> {props.description} </span>
            </p>
        }
        {
            props.clouds && <p className="weather__key"> Clouds:
                <span className="weather__value"> {props.clouds} %</span>
            </p>
        }
        {
            props.pressure && <p className="weather__key"> Pressure:
                <span className="weather__value"> {props.pressure} hpa</span>
            </p>
        }
        {
            props.error && <p className="weather__error">{props.error}</p>
        }

    </div>
);

export default Weather;
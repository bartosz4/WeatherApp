import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Form = props => (
    <div className='form' >
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get Weather</button>
        </form>
        <button className='gps' onClick={props.loadGps}><FontAwesomeIcon icon={faMapMarkerAlt}/></button>
    </div>

);

export default Form;
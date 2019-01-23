import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 50,
    animate: true
};

const AnimatedWeather = (props) => (
    <ReactAnimatedWeather
        icon={props.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
    />
);

export default AnimatedWeather;
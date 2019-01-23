import React, { Component } from 'react';


class GeolocationExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    render() {
        return (
            <div style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <h1>Latitude: {this.state.latitude}</h1>
                <h1>Longitude: {this.state.longitude}</h1>
                {this.state.error ? <h2>Error: {this.state.error}</h2> : null}
            </div>
        );
    }
}

export default GeolocationExample;
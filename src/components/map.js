import React from 'react';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

const myIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png',
    iconSize:     [25, 41], // size of the icon
    iconAnchor:   [12.5, 41], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -41] // point from which the popup should open relative to the iconAnchor
});

class MapWithinGreatM extends React.Component{
    state = {
        location:{
            lat: 51.505,
            lng: 0,
        },
        zoom: 13,
    }
    componentDidMount() {
         navigator.geolocation.getCurrentPosition((position) =>{
        this.setState({
            location: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        })
        })
    }

    render() {
        const position = [this.state.location.lat, this.state.location.lng]
        return (
                <div className={this.props.shouldRender ? 'map' : 'hidden'}>
                    <button className='onMap' onClick={this.props.closeMap}>Close</button>
                    <Map className='map' center={position} zoom={this.state.zoom}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}
                            icon={myIcon}>
                            <Popup>
                                You are here<br />
                            </Popup>
                        </Marker>
                    </Map>
                </div>
        )
    }
}

export default MapWithinGreatM;
import React, { Component } from 'react';
import './App.css';

class LoadWeather extends Component{
    constructor(props){
        super(props);
        this.state={
            lokData: null
        }
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=5b6e2ea387d6bc208427c65ed96cd662')
            .then(response => {
                    if(response.ok){
                        console.log(response)
                        console.log('ok')
                        return response.json();
                    } else {
                        console.log(response)
                    }
                }
            ).then(data =>{
                this.setState({
                 lokData: data
             })
         } )
    }
    render() {
        const {lokData} = this.state
        if(!lokData){
            return <div>Loading ...</div>
        }
        let myDate = new Date(1548174752 *1000);
        console.log(myDate.toGMTString()+"</br>"+myDate.toLocaleString());
        return (
            <div>
            <header className='appHeader'>
                <nav className='container'>

                    WEATHER simple
                </nav>
            </header>
            <div className='container'>
                <h1>Weather for {lokData.name}</h1>
                <h2>Temperatura: {lokData.main.temp} <sup>o</sup>C</h2>
                <h2>{lokData.weather.map(el => {
                  return <h3>{el.description} <img src={`https://openweathermap.org/img/w/${el.icon}.png`} alt="" /></h3>
                })}</h2>
                <h2>Sunrise: {lokData.sys.sunrise}</h2>
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

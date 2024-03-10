import React from 'react'
import './Weather.css'
import drizzle from '../Assets/drizzle.png'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import search from '../Assets/search.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'


const WeatherApp = () => {
  return (
    <div className='Container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Search City'/>
            <div className="search-icon">
                <img src={search} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud} alt="" />
        </div>
    </div>
  )
}

export default WeatherApp
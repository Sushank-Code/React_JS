import React, { useEffect, useState } from 'react'
import { getWeather } from '../services/GetServices'
import Search from './Search'

const WeatherData = () => {
    const [search, setsearch] = useState('')
    const [weather, setweather] = useState(null)
    const [error, seterror] = useState(null)

    const fetchWeather = (search) => {
        getWeather(search)
            .then((response) => {
                setweather(response.data)
                console.log(response.data)
                seterror(null)
            })
            .catch((error) => {
                seterror("City Not Found")
                setweather(null)
            })
    }

    const handleSearch = () => {
        fetchWeather(search)
    }
    useEffect(() => {
        fetchWeather('kathmandu')    // this load weather of kathmandu when page load
    }, [])


    return (
        <div>

            <Search
                search={search}
                setsearch={setsearch}
                handleSearch={handleSearch}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weather ? (
                <div>
                    <p>City: {weather.name}</p>
                    <p>Country: {weather.sys.country}</p>
                    <p>Temperature: {weather.main.temp}</p>
                    <p>Humidity: {weather.main.humidity}</p>
                </div>
            ) : (
                !error && <p>No city entered</p>
            )}
        </div>

    )
}

export default WeatherData
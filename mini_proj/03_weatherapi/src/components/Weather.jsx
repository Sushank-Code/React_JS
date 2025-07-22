import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = () => {
    const [weather, setweather] = useState('')
    const api = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=cc64dbe318e2de25a5d5d14ab5185ff5"

    const getWeatherData = async () => {
        try {
            const res = await axios.get(api)
            setweather(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getWeatherData()
    }, [])

    return (
        <div>
            {weather ? (
                <div>
                    <p>City: {weather.name}</p>
                    <p>Country: {weather.sys.country}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    )
}

export default Weather
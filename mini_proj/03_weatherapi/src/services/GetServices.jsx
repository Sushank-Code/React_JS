import axios from "axios";

const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather`
})

export const getWeather = (weather) => {
    const apikey = `cc64dbe318e2de25a5d5d14ab5185ff5`;
    return api.get(`?q=${weather}&appid=${apikey}`)
}
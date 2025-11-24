import React, { useEffect, useState } from "react";
import { ENDPOINT_WEATHER_DATA, ENDPOINT_WEATHER_ICON } from "../utils/constants";

const WeatherApp = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState('Bengaluru')
    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        fetchWeather()
    }, [])

    const fetchWeather = async () => {
        setLoading(true)
        setWeatherData({})
        const WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
        const resp = await fetch(`${ENDPOINT_WEATHER_DATA}${city}&appid=${WEATHER_API_KEY}&units=metric`)

        if (resp.ok) {
            const data = await resp.json()
            setError(false)
            setWeatherData(data)
            console.log(data)
        } else {
            setError(true)
        }
        setLoading(false)
    }

    return (
        <div className="WeatherApp w-7/12 m-auto">
            {loading
                ? <p className="text-4xl mt-24"> Loading weather data.... </p>
                : <>
                    <div className="flex">
                        <input
                            className="border rounded p-2 text-md m-2 min-w-11/12"
                            placeholder="Enter your city"
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button
                            className="w-full cursor-pointer"
                            id='search'
                            onClick={() => fetchWeather()}
                        >
                            Search 🔎
                        </button>
                    </div>
                    {error
                        ? <p className="text-4xl mt-12"> Oops!! <br /> Please choose another City. </p>
                        : <WeatherCard
                            city={city}
                            weatherData={weatherData}
                        />
                    }
                </>
            }
        </div>
    )
}


const convertTimeStampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    // time in 10:30 format
    const formattedTime = hours + ':' + minutes.substr(-2)
    return formattedTime
}


const WeatherCard = (props) => {
    const { name, main = {}, weather = [], visibility, wind, coord, sys } = props.weatherData
    return (
        <div className="card rounded-lg shadow-2xl p-12 mt-10 ">
            <p className="text-2xl">
                Hello
                <span className="font-semibold text-[#4a6fa1] ml-2 text-4xl">
                    {name}!
                </span>
                {' '}
                Currently weather is:
            </p>
            <div className="flex justify-around mt-6">
                <div className="">
                    <div className="flex items-center">
                        <img
                            src={`${ENDPOINT_WEATHER_ICON}${weather[0]?.icon}@2x.png`}
                            alt="ico"
                        />
                        <p className="text-4xl">
                            {main?.temp} <span className="text-2xl"> °C </span>
                        </p>
                    </div>
                    <p className="mt-4">
                        {weather[0]?.description}
                    </p>
                    <p className="my-2 text-left">
                        🌀 feels like:
                        <span className="font-semibold text-[#4a6fa1] ml-2">
                            {main?.feels_like} °C
                        </span>
                    </p>
                </div>
                <div className="">
                    <p className="my-2 text-left">
                        💧 humidity:
                        <span className="font-semibold text-[#4a6fa1] ml-2">
                            {main?.humidity} %
                        </span>
                    </p>
                    <p className="my-2 text-left">
                        💨 wind speed:
                        <span className="font-semibold text-[#4a6fa1] ml-2">
                            {wind?.speed} kph
                        </span>
                    </p>
                    <p className="my-2 text-left">
                        🌬️ pressure:
                        <span className="font-semibold text-[#4a6fa1] ml-2">
                            {main?.pressure} hPa
                        </span>
                    </p>
                    <p className="my-2 text-left">
                        🔽 min temp today:
                        <span className="font-semibold text-[#4a6fa1] ml-2">
                            {main?.temp_min} °C
                        </span>
                    </p>
                    <p className="my-2 text-left">
                        🔼 max temp today:
                        <span className="font-semibold text-[#4a6fa1] ml-2">
                            {main?.temp_max} °C
                        </span>
                    </p>
                    <p className="my-2 text-left">
                        🌄 sunrise:
                        <span className="font-semibold text-[#4a6fa1] ml-2">
                            {convertTimeStampToTime(sys?.sunrise)} AM
                        </span>
                    </p>
                    <p className="my-2 text-left">
                        🌅 sunset:
                        <span className="font-semibold text-[#4a6fa1] ml-2">
                            {convertTimeStampToTime(sys?.sunset)} PM
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default WeatherApp
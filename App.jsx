import React from "react"
import HistorySection from "./HistorySection"
import ForecastSection from "./ForecastSection"
import CurrentWeatherSection from "./CurrentWeatherSection"
import HistoryDetails from "./HistoryDetails"
import ForecastDetails from "./ForecastDetails"
const API_KEY = import.meta.env.VITE_API_KEY

export default function App() {

    const [forecastWeatherData, setForecastWeatherData] = React.useState(null)

    const [historyWeatherData, setHistoryWeatherData] = React.useState(null)

    const [searchCity, setSearchCity] = React.useState("London")

    const [forecastDetails, setForecastDetails] = React.useState(false)

    const [historyDetails, setHistoryDetails] = React.useState(false)

    let content

    if(forecastWeatherData && historyWeatherData) {
        if(!forecastDetails && !historyDetails){content = <>
            <HistorySection onClick={setHistoryDetails} historyWeatherData={historyWeatherData}/>
            <CurrentWeatherSection onSearch={setSearchCity} forecastWeatherData={forecastWeatherData}/>
            <ForecastSection onClick={setForecastDetails} forecastWeatherData={forecastWeatherData}/>  
        </>}else if(!forecastDetails && historyDetails){
            content = <HistoryDetails historyWeatherData={historyWeatherData} onClick={setHistoryDetails}/>
        }else if(forecastDetails && !historyDetails){
            content = <ForecastDetails forecastWeatherData={forecastWeatherData} onClick={setForecastDetails}/>
        }
    }else {
        content = <h1>Loading...</h1>
    }

    React.useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchCity}&days=3&aqi=no&alerts=no`)
            .then (res => res.json())
            .then(data => setForecastWeatherData(data))
    }, [searchCity])

    React.useEffect(() => {
        const today = new Date();
        const startDate = new Date(today); 
        startDate.setDate(today.getDate() - 3);
        const dt = startDate.toISOString().split('T')[0];
        const endDate = new Date(today);
        endDate.setDate(today.getDate() - 1);
        const end_dt = endDate.toISOString().split('T')[0];
        fetch(`http://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${searchCity}&dt=${dt}&end_dt=${end_dt}`)
            .then(res => res.json())
            .then(data => setHistoryWeatherData(data))
    }, [searchCity])

    return(
        <div className="weather-app">
            {content}
        </div>
    )
}
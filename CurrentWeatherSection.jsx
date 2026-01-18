import WeatherDetail from "./WeatherDetail";

export default function CurrentWeatherSection({forecastWeatherData, onSearch}) {

    function searchWeatherForCity(formData) {
        const newCity = formData.get("city-input")
        onSearch(newCity)
    }

    console.log(forecastWeatherData)

    return(
        <div className="current-weather-section">
            <form action={searchWeatherForCity} className="search-section">
                <input type="text" placeholder="Enter city name" name="city-input"/>
                <button>Search</button>
            </form>
            <div className="weather-card">
                <div className="main-info">
                    <div className="location-container">
                        <img src={forecastWeatherData.current.condition.icon}/>
                        <p>{forecastWeatherData.location.name}</p>
                    </div>
                    <h1 className="temperature">{Math.round(forecastWeatherData.current.temp_c)}°C</h1>
                    <p className="weather-condition">{forecastWeatherData.current.condition.text}</p>
                </div>
                <div className="details-row">
                    <WeatherDetail className="feels-like" label="Feels like" value={Math.round(forecastWeatherData.current.feelslike_c)} unit="°C"/>
                    <WeatherDetail className="wind" label="Wind" value={Math.round(forecastWeatherData.current.wind_kph)} unit="km/h"/>
                    <WeatherDetail className="humidity" label="Humidity" value={forecastWeatherData.current.humidity} unit="%"/>
                </div>
            </div>
        </div>
    )
}
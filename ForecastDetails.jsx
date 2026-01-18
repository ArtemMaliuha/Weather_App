import DailyWeatherDetails from "./DailyWeatherDetails"

export default function ForecastDetails({forecastWeatherData, onClick}) {
    
    const dailyWeatherElement = forecastWeatherData.forecast.forecastday.map(day => {
                return <DailyWeatherDetails day={new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} 
                                    hourlyData={day.hour}
                                    key={day.date}/>
            })

    return(
        <div className="details-container">
            <button onClick={() => onClick(prevDetails => !prevDetails)} className="return-button">⬅Back</button>
            <h1 className="details-header">3-Days Forecast</h1>
            {dailyWeatherElement}
        </div>
    )
}
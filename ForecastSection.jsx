import DailyWeather from "./DailyWeather";

export default function ForecastSection({forecastWeatherData, onClick}) {
    const dailyWeatherElement = forecastWeatherData.forecast.forecastday.map(day => {
        return <DailyWeather day={new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })} 
                            imageSrc={day.day.condition.icon}
                            temperature={`${Math.round(day.day.maxtemp_c)}°C/${Math.round(day.day.mintemp_c)}°C`} 
                            condition={day.day.condition.text}
                            key={day.date}/>
    })

    return(
        <div className="forecast-section">
            <h2 className="section-title-forecast">Next 3 Days</h2>
            <p className="section-subtitle">(inc. Today)</p>
                {dailyWeatherElement}
            <button onClick={() => onClick(prevDetails=> !prevDetails)} className="see-more">See More</button>
        </div>
        
    )
}
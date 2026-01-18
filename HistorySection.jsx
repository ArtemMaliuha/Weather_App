import DailyWeather from "./DailyWeather";

export default function HistorySection({historyWeatherData, onClick}) {
    console.log(historyWeatherData)

    const dailyWeatherElement = historyWeatherData.forecast.forecastday.map(day => {
            return <DailyWeather day={new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })} 
                                imageSrc={day.day.condition.icon}
                                temperature={`${Math.round(day.day.maxtemp_c)}°C/${Math.round(day.day.mintemp_c)}°C`} 
                                condition={day.day.condition.text}
                                key={day.date}/>
        })

    return (
        <div className="history-section">
            <h2 className="section-title-history">Past 3 Days</h2>
                {dailyWeatherElement}
            <button onClick={() => onClick(prevDetails => !prevDetails)} className="see-more">See More</button>
        </div>
    )
}
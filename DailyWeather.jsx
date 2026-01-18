export default function DailyWeather({day, imageSrc, temperature, condition}) {
    return (
        <div className="daily-weather">
            <div className="dw-date-icon">
                <p className="day-name">{day}</p>
                <img className="day-icon" src={imageSrc}/>
            </div>
            <div className="dw-details">
                <p className="temperature">{temperature}</p>
                <p className="condition">{condition}</p>
            </div>
        </div>
    )
}
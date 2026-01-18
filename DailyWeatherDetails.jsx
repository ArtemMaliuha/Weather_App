export default function DailyWeatherDetails({day, hourlyData}) {
    return(
        <details className="day-accordion">
            <summary>{day}</summary>
            <table className="accordion-table">
                <tbody>
                    <tr>
                        <th>Time</th>
                        {hourlyData.map((hour) => 
                            <td key={`time-${hour.time_epoch}`}>{hour.time.split(' ')[1]}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Temperature (°C)</th>
                        {hourlyData.map((hour) => 
                            <td key={`temp-${hour.time_epoch}`}>{Math.round(hour.temp_c)}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Feels Like (°C)</th>
                        {hourlyData.map((hour) => 
                            <td key={`feels-${hour.time_epoch}`}>{Math.round(hour.feelslike_c)}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Chance of Rain (%)</th>
                        {hourlyData.map((hour) => 
                            <td key={`chance-${hour.time_epoch}`}>{hour.chance_of_rain}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Precipitation (mm)</th>
                        {hourlyData.map((hour) => 
                            <td key={`precip-${hour.time_epoch}`}>{hour.precip_mm}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Wind Speed (km/h)</th>
                        {hourlyData.map((hour) => 
                            <td key={`wind-${hour.time_epoch}`}>{hour.wind_kph}</td>
                        )}
                    </tr>
                </tbody>
            </table>
        </details>
    )
}
export default function WeatherDetail({className, label, value, unit}) {
    return (
        <div className={className}>
            <p className="detail-label">{label}</p>
            <p className="detail-value">{value}{unit}</p>
        </div>
    )
}
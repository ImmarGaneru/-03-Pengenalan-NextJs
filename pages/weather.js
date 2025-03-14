import { useState, useEffect} from "react";

const WeatherForecast = () => {
    const [weathers, setWeathers] = useState([]);

    useEffect(() => {
        const fetchWeathers = async () => {
            const response = await fetch("/api/weather");
            const weathers = await response.json();

            const weatherData = weathers.data[0].cuaca;
            const flattenedWeathers = weatherData.flat();
            setWeathers(flattenedWeathers);
        };

        fetchWeathers();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Perkiraan Cuaca Kecamatan Lowokwaru 3 hari kedepan
            </h1>
            <h2 className="text-gray-600">Sumber: BMKG</h2>
            <ul className="space-y-4">
                {weathers.map((weather) => (
                    <li key={weather.datetime} className="p-4 border rounded-lg bg-gray-100 shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-lg text-black font-semibold">{weather.local_datetime}</p>
                            <p className="text-gray-600">{weather.weather_desc}</p>
                        </div>
                        <span className="text-xl font-bold text-blue-600">{weather.t}°C</span>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherForecast;
/* eslint-disable react/prop-types */
import { image } from "./image";
const Weather = ({ data }) => {
  return (
    <>
      <div>
        <h1 className='text-4xl'>{data.location.country}</h1>
        <p>Humidity: {data.forecast.forecastday[0].day.avghumidity} %</p>
        <p>Condition: {data.forecast.forecastday[0].day.condition.text}</p>
        <p>Wind: {data.forecast.forecastday[0].day.maxwind_kph} KM/h</p>
      </div>
      <div className='flex flex-row gap-3'>
        <div className='flex flex-col'>
          <span className='text-2xl'>{data.forecast.forecastday[0].day.avgtemp_c} °c</span>
          <span className='text-sm'>
            {new Date(data.forecast.forecastday[0].date).toLocaleString("en-us", { weekday: "long" })}
          </span>
        </div>
        <img
          width='100'
          height='100'
          src={image(data.forecast.forecastday[0].day.condition.text)}
          alt={data.forecast.forecastday[0].day.condition.text}
        />
      </div>
    </>
  );
};

export default Weather;

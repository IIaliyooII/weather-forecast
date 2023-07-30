import { image } from "./image";
/* eslint-disable react/prop-types */
const Forecast = ({ condition, temp, timeZone }) => {
  return (
    <div className='text-center'>
      <img width='50' height='50' src={image(condition)} alt={condition} />
      <div className='flex flex-col font-extralight'>
        <span className='text-lg'>{Math.round(temp)}°c</span>
        <span className='text-sm'>{new Date(timeZone).toLocaleString("en-us", { weekday: "long" })}</span>
      </div>
    </div>
  );
};

export default Forecast;

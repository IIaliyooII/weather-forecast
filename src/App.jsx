import Forecast from "./components/Forecast";
import Weather from "./components/Weather";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const searchCityHandle = (city) => {
    setCity(city);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: city || "Tehran",
        days: "3",
      },
      headers: {
        "X-RapidAPI-Key": "a8a86b884emshad2df76e87a0bb3p16b6e9jsn7dda148be6ee",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    async function fetchDeta() {
      try {
        const res = await axios.request(options);
        setWeather(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDeta();
  }, [city]);
  return (
    <main className='h-screen grid place-items-center items-center  gap-10 p-3 bg-gradient-to-b from-velvet-rose to-creamy-nile'>
      <div className='mb-8 h-fit rounded-lg shadow-xl'>
        <Search onSearch={searchCityHandle} />
      </div>
      <div className='w-full md:w-4/12 lg:w-3/12 lg:h-fit h-fit rounded-lg shadow-xl grid grid-rows-1 self-start'>
        {!weather ? (
          "NO Weather Forecast"
        ) : (
          <>
            <div className='w-full flex flex-row px-2 py-1 items-center justify-between bg-transparent shadow-xl font-extralight text-black'>
              <Weather data={weather} />
            </div>
            <div className='w-full flex items-center justify-evenly px-3 py-1 bg-white rounded-b-lg '>
              {weather.forecast.forecastday.map((item, index) => (
                <Forecast
                  key={index}
                  condition={item.day.condition.text}
                  temp={item.day.avgtemp_c}
                  timeZone={item.date}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default App;

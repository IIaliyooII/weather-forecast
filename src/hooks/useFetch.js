// import axios from "axios";
// import { useEffect, useState } from "react";

// const rapidApiKey = "a8a86b884emshad2df76e87a0bb3p16b6e9jsn7dda148be6ee";
// const rapidApiHost = "weatherapi-com.p.rapidapi.com";

// export const useFetch = (props) => {
// setData([
//   {
//     country: res.data.location.country,
//     feelsLike_C: res.data.forecast.forecastday[0].day.avgtemp_c,
//     condition: res.data.forecast.forecastday[0].day.condition.text,
//     conditionImg: imgage(res.data.forecast.forecastday[0].day.condition.text),
//     humidity: res.data.forecast.forecastday[0].day.avghumidity,
//     wind: res.data.forecast.forecastday[0].day.maxwind_kph,
//     localTime: new Date(res.data.forecast.forecastday[0].date).toLocaleString("en-us", { weekday: "long" }),
//   },
//   {
//     feelsLike_C: res.data.forecast.forecastday[1].day.avgtemp_c,
//     condition: res.data.forecast.forecastday[1].day.condition.text,
//     conditionImg: imgage(res.data.forecast.forecastday[1].day.condition.text),
//     localTime: new Date(res.data.forecast.forecastday[1].date).toLocaleString("en-us", { weekday: "long" }),
//   },
//   {
//     feelsLike_C: res.data.forecast.forecastday[2].day.avgtemp_c,
//     condition: res.data.forecast.forecastday[2].day.condition.text,
//     conditionImg: imgage(res.data.forecast.forecastday[2].day.condition.text),
//     localTime: new Date(res.data.forecast.forecastday[2].date).toLocaleString("en-us", { weekday: "long" }),
//   },
// ]);
// console.log(res.data.forecast.forecastday[2].day.condition.text);

// const [data, setData] = useState([]);

//   useEffect(() => {
//     const defaultCity = !city ? "Tehran" : city;
//     const options = {
//       method: "GET",
//       url: `https://api.tomorrow.io/v4/weather/forecast?location=${defaultCity}%20york&apikey=${apiKey}`,

//       headers: { accept: "application/json" },
//     };
//     async function fetchDeta() {
//       try {
//         const res = await axios.request(options);
//         setData(res.data);
//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchDeta();
//   }, [city]);

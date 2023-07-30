export const image = (condition) => {
  if (condition === "Sunny") {
    const imgSrc = "https://img.icons8.com/wired/100/sun.png";
    return imgSrc;
  }
  if (condition === "Cloudy") {
    const imgSrc = "https://img.icons8.com/wired/100/clouds.png";
    return imgSrc;
  }
  if (condition === "Windy") {
    const imgSrc = "https://img.icons8.com/wired/100/windy-weather.png";
    return imgSrc;
  }
  if (condition === "Partly cloudy") {
    const imgSrc = "https://img.icons8.com/wired/100/partly-cloudy-day.png";
    return imgSrc;
  }
  if (condition === "Rainy") {
    const imgSrc = "https://img.icons8.com/wired/100/rain.png";
    return imgSrc;
  }
  if (condition === "Snowy") {
    const imgSrc = "https://img.icons8.com/wired/100/snow.png";
    return imgSrc;
  }
  if (condition === "Stormy") {
    const imgSrc = "https://img.icons8.com/wired/100/storm.png";
    return imgSrc;
  } else {
    const imgSrc = "https://img.icons8.com/wired/100/sun.png";
    return imgSrc;
  }
};

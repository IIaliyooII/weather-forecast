const Weather = () => {
  return (
    <div className='w-full flex flex-row px-2 py-1 items-center justify-between bg-transparent shadow-xl'>
      <div className='font-extralight text-white'>
        <h1>9 kyoto</h1>
        <p>Perscription 80%</p>
        <p>Wind 18km/h</p>
      </div>
      <img width='100' height='100' src='https://img.icons8.com/nolan/100/cloud.png' alt='cloud' />
    </div>
  );
};

export default Weather;

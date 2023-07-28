const Forecast = () => {
  return (
    <div className='w-full flex items-center justify-between px-3 py-1 bg-white rounded-b-lg '>
      <div className='text-center'>
        <img width='64' height='64' src='https://img.icons8.com/nolan/64/clouds.png' alt='clouds' />
        <div className='flex flex-col font-extralight'>
          <span>9 4</span>
          <span>FRI</span>
        </div>
      </div>
      <div className='text-center'>
        <img
          width='64'
          height='64'
          src='https://img.icons8.com/nolan/64/partly-cloudy-day.png'
          alt='partly-cloudy-day'
        />
        <div className='flex flex-col font-extralight'>
          <span>9 4</span>
          <span>FRI</span>
        </div>
      </div>
      <div className='text-center'>
        <img width='64' height='64' src='https://img.icons8.com/nolan/64/snow.png' alt='snow' />
        <div className='flex flex-col font-extralight'>
          <span>9 4</span>
          <span>FRI</span>
        </div>
      </div>
      <div className='text-center'>
        <img width='64' height='64' src='https://img.icons8.com/nolan/64/wind.png' alt='wind' />
        <div className='flex flex-col font-extralight'>
          <span>9 4</span>
          <span>FRI</span>
        </div>
      </div>
    </div>
  );
};

export default Forecast;

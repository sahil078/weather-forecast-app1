import { useState } from 'react';
import './App.css';
import search from './assets/icons/search.svg';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard } from './Components';

function App() {
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, place, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput('');
  };

  return (
    <div className='w-full min-h-screen text-white px-4 sm:px-8'>
      <nav className='w-full p-3 flex flex-col sm:flex-row justify-between items-center'>
        <h1 className='font-bold tracking-wide text-2xl sm:text-3xl'>Weather App</h1>
        <div className='bg-white w-full sm:w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 mt-4 sm:mt-0 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }}
            type="text"
            placeholder='Search city'
            className='focus:outline-none w-full text-[#212121] text-lg'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className='w-full flex flex-wrap gap-8 py-4 px-4 sm:px-[10%] items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className='flex justify-center gap-4 flex-wrap w-full sm:w-[60%]'>
          {values?.slice(1, 7).map((curr) => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

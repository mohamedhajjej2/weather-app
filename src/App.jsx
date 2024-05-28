import { useState } from 'react'

import './App.css';
import search from './assets/react.svg';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard } from './components';
function App() {
 const [input, setInput] = useState('')
 const { weather, thisLocation, values, place, setPlace} = useStateContext()
// console.log(weather);

const submitCity =() => {
  setPlace(input)
  setInput('')
}
  return (
   <div className='w-full h-screen text-white px-8'>
<nav className='w-full p-3 flex justify-between items-center'>
  <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
  <div className='bg-white w-[15rem] overflow-hidden shadow-2*l rounded flex items-center p-2 grap-2' value={input} onChange={ e => setInput(e.target.value)}>
    <img src={search} alt='search' className='w-[1.5rem] h-[1.5rem]'></img>
    <input onKeyUp={(e) => {
      if(e.key === 'Enter') {
        // sumit the form
        submitCity
      }
    }} type='text' placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg'/>
  </div>
</nav>
<BackgroundLayout/>
<main className='w-full flex flex-wrap grap-8 py-4 px-[10%] items-center justify-center'>
<WeatherCard
place={thisLocation}
windspeed={weather.wspd}
humidity={weather.humidity}
temperature={weather.temp}
heatIndex={weather.heatindex}
iconString={weather.conditions}
conditions={weather.conditions}
/>
<div className='flex justify-center grap-8 flex-wrap w-[60%]'>
  {
    values?.slice(1,7).map(curr => {
    return (
      <MiniCard
      key={curr.datetime}
      time={curr.datetime}
      temp={curr.temp}
      iconString={curr.conditions}
      />
    )
    })
  }
</div>
</main>
   </div>
  )
}

export default App

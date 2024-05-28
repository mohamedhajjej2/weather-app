import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import Fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import strom from '../assets/icons/strom.png'
import wind from '../assets/icons/windy.png'




function MiniCard({time, temp, iconString}) {
  const [icon, setIcon] = useState()

  useEffect(() => {
    if(iconString) {
      if(iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      }else if(iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      }else if(iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      }else if(iconString.toLowerCase().includes('thunder')) {
        setIcon(strom)
      }else if(iconString.toLowerCase().includes('fog')) {
        setIcon(Fog)
      }else if(iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      }else if(iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  },[iconString])
  return (
    <div className='glassCard w-[10rem h-[10rem] flex flex-col]'>
<p className='text-center'>
  {new Date(time).toLocaleTimeString('en',{weekday: "long"}).split("")[0]}
</p>
<hr/>
<div className='w-full flex justify-center items-center flex-1'>
  <img src={icon} alt='weatheer' className='w-[4rem] h-[4rem]'/>
</div>
<p className='text-center font-bold'>{temp}&deg;<C></C></p>
    </div>
  )
}

export default MiniCard
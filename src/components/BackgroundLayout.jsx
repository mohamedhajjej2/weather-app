import React, { useEffect } from 'react'
import { useStateContext } from '../Context'


import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stromy from '../assets/images/Stromy.jpg'
import Sunny from '../assets/images/Sunny.jpg'
function BackgroundLayout() {

  const { weather} = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if(weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowrCase().includes('clear')) {
        setImage(Clear)

      }else if(imageString.toLowrCase().includes('cloud')){
        setImage(Cloudy)
      }else if(imageString.toLowrCase().includes('rain') || imageString.toLowrCase().includes('shower')){
        setImage(Rainy)
      }else if(imageString.toLowrCase().includes('snow')){
        setImage(Snow)
      }else if(imageString.toLowrCase().includes('fog')){
        setImage(Fog)
      }else if(imageString.toLowrCase().includes('thunder') || imageString.toLowrCase().includes('strom')){
        setImage(Stromy)
      }
    }
  },[weather])



  return (
    <img src={image} alt='weather_image' className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackgroundLayout
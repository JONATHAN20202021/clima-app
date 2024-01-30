import React, { useRef, useState } from 'react';
import './styles/weatherCard.css';
const WeatherCard = ({weather, temp, setTextImput, hasError}) => {
  const [isCelsius, setisCelsius] = useState(true);
  const handleChange =()=>{
    setisCelsius(!isCelsius);
  }
  
  const city = useRef()
  const handleform = event =>{
    event.preventDefault();
    setTextImput(city.current.value.toLowerCase().trim());
  }

  
    return (
    <section className='weather'>
        <h1 className='wseather__title'>Weather App</h1>
        <form className='weather__form' onSubmit={handleform}>
          <input type="text" ref={city}/>
          <button className='form__btn'>Seach</button>
        </form>
        {
          hasError?
          <>
          <h2>That city not fond</h2>
          <h3>Please, try again</h3>
          </>
          :
          <>
          <h2 className='weather__city' >{weather?.name}/{weather?.sys.country}</h2>
      <article className='weather__container1' >
        <figure className='weather__fig'>
            <img className='weather__img' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="icono" />
        </figure>
        <div>
            <h3 className='weather__clouds'>{weather?.weather[0].description}</h3>
            <ul className='weather__info' >
                <li><span>Wind speed:</span>
                <span> {weather?.wind.speed} m/s</span></li>
                <li><span>Clouds:</span>
                <span> {weather?.clouds.all} %</span></li>
                <li><span>Presure:</span>
                <span> {weather?.main.pressure} hPa</span></li>
                <li><span>Humidity:</span>
                <span> {weather?.main.humidity} %</span></li>
                

            </ul>
        </div>
      </article>
      <div className='weather__container2'>
        <h3 className='weather__temp' >{
        isCelsius?
        temp?.celsius+ '°C'
      : temp?.fahrenheit+ '°F'
      }</h3>
        <button className='weather__btn' onClick={handleChange}>Change to{isCelsius?'°F':'°C'} </button>
        </div>
          </>
        }
        
    </section>
  )
}

export default WeatherCard;
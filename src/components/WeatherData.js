import React from 'react'

export const WeatherData = () => {

  return (
    <>
      <header>
        <div>
          <img 
          src={require(`../images/clock.png`)} 
          alt='time icon'
          />
          <h5>5:43 PM</h5>
        </div>
        <h5>Tuesday, January 13</h5>
      </header>
      <main>
        <div className='weather-main'>
          <img 
          src={`http://openweathermap.org/img/wn/10d@2x.png`} alt='weather icon'
          className='weather-icon'/>
          <div>
            <h2>Athens, GR</h2>
            <h3 className='description'>Light Rain</h3>
          </div>
        </div>
        <div className='temp-main'>
          <h5>Feels like 9°</h5>
          <h1 className='temperature'>12°</h1>
          <div className='hi-lo'>
            <h5>H 16°</h5>
            <h5>L 7°</h5>
          </div>
        </div>
      </main>
      <footer>
        <div className='weather-prop'>
          <img src={require('../images/wind.png')} alt=''/>
          <h4>SE 2.3 KPH</h4>
        </div>
        <div className='weather-prop'>
          <img src={require('../images/drop.png')} alt=''/>
          <h4>72 %</h4>
        </div>
      </footer>
    </>
  );
}
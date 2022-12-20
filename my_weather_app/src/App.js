import hotBg from './assets/sunny.jpeg';
import coldBg from './assets/cold.jpg';
import Description from './components/Descriptions.jsx';
import { useEffect } from 'react';
import { getWeatherData } from "./weather.js";

function App() {
useEffect (() => {
  const fetchWeatherData = async () => {
    const data = await getWeatherData('nairobi');
    console.log(data)

  };
  fetchWeatherData();
  

}, [])

  return (
    <div className='app' style={{background: `url(${coldBg})`}}>
    <div className='overlay'>
      <div className='container'> 
        <div className='section section__inputs'>
          <input type='text' name='city' placeholder='Enter City..'
          />
          <button>F</button>
          
            </div>
            <div className='section section__temperature'>
              <div className='icon'>
                <h3>Kenya, Nairobi</h3>
                <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weatherIcon" />
                <h3>Cloudy</h3>
              </div>
              <div className='temperature'>
                <h1>34 C</h1>

              </div>

            </div>
            <Description />
      </div>
    </div>
    </div>
 
  );
}

export default App;

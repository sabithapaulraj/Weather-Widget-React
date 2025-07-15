import './App.css'
import PropTypes from 'prop-types';


function WeatherWidget({city, temperature}){
  return(
    <div className = "weather-widget">
      <h2>Current Temperature in {city} is {temperature}</h2>
    </div>
  );
}

WeatherWidget.propTypes = {
  city : PropTypes.string.isRequired,
  temperature : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

function App() {
  return (
    <>
      <div>
        <h2> Weather Widget</h2>
        <WeatherWidget
        city = "Chennai"
        temperature="30°C"
        />
      </div>
      <footer className="footer">
        <p>By Sabitha</p>
        <p>Reg No: 212222040137</p>
      </footer>
    </>
  )
}
export default App

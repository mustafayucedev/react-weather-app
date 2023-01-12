import { useState , useEffect } from 'react';
import axios from 'axios';
import Header from 'components/Header/Header';
import Form from 'components/Form/Form';
import City from 'components/City/City';

function App() {

  const apiKey = "0e06c06963e55a329ab8a07f8964b669";
  const [city, setCity] = useState();
  const [input, setInput] = useState("");
  
  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getWeather();
  }, [input]);

  return (
    <div className="container">
      <Header />
      <Form setInput={setInput} />
      {city && <City city={city} />}
    </div>
  );
}

export default App;

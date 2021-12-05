import { useEffect, useState } from 'react';
import './App.css';
import * as axios from 'axios';
import { Button, Navbar, Container, Form, FormControl, Nav, ButtonGroup } from 'react-bootstrap';
import Weather from './Weather';
import OnLoadingWeatherData from './HOCWeather';



function App() {


  const [city, setCity] = useState('Minsk');
  const [weather, setWeather] = useState({ loading: false, weatherInfo: null });


  const WeatherLoading = OnLoadingWeatherData(Weather)

  const search = (city) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6fc29aa4391a51029a5d252f128f27a9&units=metric`)
      .then(response => {
        const weatherData = response.data;
        setWeather({
          loading: false,
          weatherInfo: [weatherData]
        });
      }
      )
  }

  const hook = () => {
    setWeather({ loading: true })
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6fc29aa4391a51029a5d252f128f27a9&units=metric`)

      .then(response => {
        const weatherData = response.data;
        setWeather({
          loading: false,
          weatherInfo: [weatherData]
        });
      }
      )



  }
  useEffect(hook, [setWeather])
console.log(city)
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className='box header'>
        <Container fluid>
          <Navbar.Brand href="#">Forecast from Outcst</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <FormControl
                onChange={(e) => setCity(() => e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" onClick={() => search(city)}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ButtonGroup vertical className='box sidebar'>
        <Button onClick={() => search('Минск')}>Минск</Button>
        <Button onClick={() => search('Брест')}>Брест</Button>
        <Button onClick={() => search('Гомель')}>Гомель</Button>
        <Button onClick={() => search('Гродно')}>Гродно</Button>
        <Button onClick={() => search('Витебск')}>Витебск</Button>
        <Button onClick={() => search('Могилёв')}>Могилёв</Button>
      </ButtonGroup>
      <WeatherLoading isLoading={weather.loading} info={weather.weatherInfo}/>
    </div>
  );
}

export default App;

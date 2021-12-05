import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Weather = ({...props}) => {
    const {info} = props;
    
    if (!info || info.length === 0) return <p>Подождите, данные грузятся</p>
    console.log(info)
        return (
            <>
            {info.map((i) =>             
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${i.weather[0].icon}.png`}/>
                <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                    <Card.Text> Температура: {Math.round(i.main.temp)} °C </Card.Text>
                    <Card.Text>  Ощущается как: {Math.round(i.main.feels_like)} °C </Card.Text>
                    
                </Card.Body>
            </Card> )}


        </>
        )
    }

export default Weather;

import axios from 'axios';

export function fetchCurrentWeather(lat: number, long: number) {
    axios
        .get(
            `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&units=metric&APPID=8f90758f04cf3ea25f956af3a763918c`
        )
        .then((response) => {
            console.log('service', response.data);
        })
        .catch((err) => console.log(err));
}

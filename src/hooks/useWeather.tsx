import React, { useEffect } from 'react';
import { fetchCurrentWeather } from '../services';
import * as Location from 'expo-location';

interface IWeatherCurrent {
    currentWeather?: any;
}

export default function useWeather(): IWeatherCurrent {
    const [currentWeather, setCurrentWeather] = React.useState([]);
    const [lat, setLat] = React.useState(0);
    const [long, setLong] = React.useState(0);

    useEffect(() => {
        (async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('2 seconds');
                }, 2000);
                getWeather();
            });

            console.log('1');
        })();
    }, []);

    async function getPosition() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setLong(location.coords.longitude);
        setLat(location.coords.latitude);
        // eslint-disable-next-line no-extra-boolean-cast
    }
    // let text = 'Waiting..';
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location);
    // }

    async function getWeather() {
        const weatherResponseAPI = await fetchCurrentWeather(lat, long);
        console.log('Result', weatherResponseAPI);
        setCurrentWeather(weatherResponseAPI);
    }

    return {
        currentWeather,
        // getWeather,
    };
}

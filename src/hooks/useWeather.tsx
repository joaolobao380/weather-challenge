import React, { useEffect } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';

interface IWeatherCurrent {
    currentWeather?: any;
}

export default function useWeather(): IWeatherCurrent {
    const [currentWeather, setCurrentWeather] = React.useState([]);

    useEffect(() => {
        getCurrentWeather();
    }, []);

    async function getCurrentWeather() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});

        axios
            .get(
                `http://api.openweathermap.org/data/2.5/find?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&APPID=8f90758f04cf3ea25f956af3a763918c`
            )
            .then((response) => {
                setCurrentWeather(response.data);
            })
            .catch((err) => console.log(err));
    }

    return {
        currentWeather,
    };
}

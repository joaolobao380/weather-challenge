import React, { useEffect } from 'react';
import * as Location from 'expo-location';

import { IWeatherCurrent } from '../types';

import axios from 'axios';
import { api_key_openweaher } from '../security';

export default function useWeatherAndLocation(): IWeatherCurrent {
    const [currentWeather, setCurrentWeather] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    useEffect(() => {
        getCurrentWeather();
    }, []);

    async function getCurrentWeather() {
        setIsLoading(true);
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            setIsLoading(false);
            return;
        }

        const location = await Location.getCurrentPositionAsync({});

        axios
            .get(
                `http://api.openweathermap.org/data/2.5/find?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&APPID=${api_key_openweaher}`
            )
            .then((response) => {
                setIsLoading(false);
                setCurrentWeather(response.data);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    }

    return {
        currentWeather,
        getCurrentWeather,
        isLoading,
    };
}

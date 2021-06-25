import React from 'react';
import { fetchCurrentWeather } from '../services';
import * as Location from 'expo-location';
import useLocationCurrent from './useLocationCurrent';
import GetLocation from 'react-native-get-location';

import Geolocation from '@react-native-community/geolocation';

interface IWeatherCurrent {
    currentWeather?: any | null;
    getWeather(): any;
    getPosition(): any;
}

export default function useWeather(): IWeatherCurrent {
    const [currentWeather, setCurrentWeather] = React.useState([]);
    const [lat, setLat] = React.useState(-1);
    const [long, setLong] = React.useState(-1);

    React.useEffect(() => {
        getPosition();
        console.log('2');
    }, []);

    React.useEffect(() => {
        getWeather();
    }, [getWeather]);

    function getPosition() {
        Geolocation.getCurrentPosition(
            (position) => {
                // const initialPosition = JSON.stringify(position);
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                console.log('1', position.coords.latitude);
            },
            (error) => alert('Error', JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 }
        );
    }

    async function getWeather() {
        const weatherResponseAPI = await fetchCurrentWeather(lat, long);

        setCurrentWeather(weatherResponseAPI);
    }

    return {
        currentWeather,
        getWeather,
        getPosition,
    };
}

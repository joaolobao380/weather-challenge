import React from 'react';
import useTimeOfDay from '../../hooks/useTimeOfDay';
import useWeatherAndLocation from '../../hooks/useWeatherAndLocation';
import * as S from './styles';

export function Temperature() {
    const { currentWeather } = useWeatherAndLocation();
    const { isLight } = useTimeOfDay();

    return (
        <S.Container>
            <S.TemperatureNumber isLight={isLight}>
                {currentWeather.length !== 0
                    ? `${currentWeather.list[0].main.temp.toFixed()}º`
                    : '00º'}
            </S.TemperatureNumber>
            <S.TemperatureDescription isLight={isLight}>
                {currentWeather.length !== 0
                    ? `${currentWeather.list[0].weather[0].main}`
                    : 'Sunny'}
            </S.TemperatureDescription>
        </S.Container>
    );
}

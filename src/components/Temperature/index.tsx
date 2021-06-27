import React from 'react';
import useWeather from '../../hooks/useWeather';
import * as S from './styles';

export function Temperature() {
    const { getLocation, currentWeather } = useWeather();
    React.useEffect(() => {}, []);
    console.log(currentWeather);
    return (
        <S.Container>
            <S.TemperatureNumber>36º</S.TemperatureNumber>
            <S.TemperatureDescription>Cloudy</S.TemperatureDescription>
        </S.Container>
    );
}

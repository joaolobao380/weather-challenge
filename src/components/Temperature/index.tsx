import React from 'react';
import useWeather from '../../hooks/useWeather';
import * as S from './styles';

export function Temperature() {
    const { currentWeather } = useWeather();

    return (
        <S.Container>
            <S.TemperatureNumber>
                {currentWeather.length !== 0
                    ? `${currentWeather.list[0].main.temp.toFixed()}º`
                    : '00º'}
            </S.TemperatureNumber>
            <S.TemperatureDescription>
                {currentWeather.length !== 0
                    ? `${currentWeather.list[0].weather[0].main}`
                    : 'Clou'}
            </S.TemperatureDescription>
        </S.Container>
    );
}

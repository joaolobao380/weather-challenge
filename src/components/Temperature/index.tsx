import React from 'react';
import useWeather from '../../hooks/useWeather';
import * as S from './styles';

export function Temperature() {
    const { currentWeather } = useWeather();
    console.log('CurrentWeather', currentWeather);
    // console.log(
    //     currentWeather !== undefined ? currentWeather.list[0].main.temp : null
    // );
    return (
        <S.Container>
            <S.TemperatureNumber>
                {/* eslint-disable-next-line no-extra-boolean-cast */}
                {!!currentWeather ? currentWeather : '00'}
            </S.TemperatureNumber>
            <S.TemperatureDescription>Cloudy</S.TemperatureDescription>
        </S.Container>
    );
}

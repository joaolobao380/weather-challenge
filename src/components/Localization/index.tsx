import React from 'react';
import useWeatherAndLocation from '../../hooks/useWeatherAndLocation';
import * as S from './styles';

export function Localization() {
    const { currentWeather } = useWeatherAndLocation();

    return (
        <S.Container>
            <S.LocalizationIcon
                source={require('../../assets/LocalizationIcon.png')}
            />
            <S.LocalizationText>
                {currentWeather.length !== 0
                    ? `${currentWeather.list[0].name}`
                    : 'City'}
            </S.LocalizationText>
        </S.Container>
    );
}

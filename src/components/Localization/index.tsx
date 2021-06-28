import React from 'react';

import useTimeOfDay from '../../hooks/useTimeOfDay';
import useWeatherAndLocation from '../../hooks/useWeatherAndLocation';

import * as S from './styles';

export function Localization() {
    const { currentWeather } = useWeatherAndLocation();
    const { isLight } = useTimeOfDay();

    return (
        <S.Container>
            <S.LocalizationIcon
                source={
                    !isLight
                        ? require('../../assets/LocalizationIcon.png')
                        : require('../../assets/LocalizationIconLight.png')
                }
            />
            <S.LocalizationText isLight={isLight}>
                {currentWeather.length !== 0
                    ? `${currentWeather.list[0].name}`
                    : 'City'}
            </S.LocalizationText>
        </S.Container>
    );
}

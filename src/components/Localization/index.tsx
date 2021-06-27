import React from 'react';
import useWeather from '../../hooks/useWeather';
import * as S from './styles';

export function Localization() {
    const { currentWeather } = useWeather();
    console.log(currentWeather);
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

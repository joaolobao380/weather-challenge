import React from 'react';

import useTimeOfDay from '../../hooks/useTimeOfDay';
import useWeatherAndLocation from '../../hooks/useWeatherAndLocation';

import * as S from './styles';

export function BodyMoreInformation() {
    const { currentWeather } = useWeatherAndLocation();
    const { isLight } = useTimeOfDay();

    return (
        <S.Container>
            <S.ContainerHumidity>
                <S.ContentHumidity>
                    <S.HumidityImage
                        source={
                            !isLight
                                ? require('../../assets/humidityIcon.png')
                                : require('../../assets/humidityIconDark.png')
                        }
                    />
                    <S.HumidityText isLight={isLight}>Humidity</S.HumidityText>
                </S.ContentHumidity>
                <S.HumidityNumber isLight={isLight}>
                    {currentWeather.length !== 0
                        ? `${currentWeather.list[0].main.humidity}%`
                        : '00%'}
                </S.HumidityNumber>
            </S.ContainerHumidity>
            <S.ContainerFeelsLike>
                <S.ContentFeelsLike>
                    <S.FeelsLikeImage
                        source={
                            !isLight
                                ? require('../../assets/TemperatureIcon.png')
                                : require('../../assets/TemperatureIconDark.png')
                        }
                    />
                    <S.FeelsLikeText isLight={isLight}>
                        Feels like
                    </S.FeelsLikeText>
                </S.ContentFeelsLike>
                <S.FeelsLikeNumber isLight={isLight}>
                    {currentWeather.length !== 0
                        ? `${currentWeather.list[0].main.feels_like.toFixed()}º`
                        : '00º'}
                </S.FeelsLikeNumber>
            </S.ContainerFeelsLike>
            <S.ContainerVelocity>
                <S.ContentVelocity>
                    <S.VelocityImage
                        source={
                            !isLight
                                ? require('../../assets/VelocityIcon.png')
                                : require('../../assets/VelocityIconDark.png')
                        }
                    />
                    <S.VelocityText isLight={isLight}>Speed(ms)</S.VelocityText>
                </S.ContentVelocity>
                <S.VelocityNumber isLight={isLight}>
                    {currentWeather.length !== 0
                        ? `${currentWeather.list[0].wind.speed.toFixed()}`
                        : '00'}
                </S.VelocityNumber>
            </S.ContainerVelocity>
        </S.Container>
    );
}

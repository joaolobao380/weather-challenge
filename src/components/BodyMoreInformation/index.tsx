import React from 'react';
import useWeather from '../../hooks/useWeather';
import * as S from './styles';

export function BodyMoreInformation() {
    const { currentWeather } = useWeather();
    return (
        <S.Container>
            <S.ContainerHumidity>
                <S.ContentHumidity>
                    <S.HumidityImage
                        source={require('../../assets/humidityIcon.png')}
                    />
                    <S.HumidityText>Humidity</S.HumidityText>
                </S.ContentHumidity>
                <S.HumidityNumber>
                    {currentWeather.length !== 0
                        ? `${currentWeather.list[0].main.humidity}%`
                        : '00%'}
                </S.HumidityNumber>
            </S.ContainerHumidity>
            <S.ContainerFeelsLike>
                <S.ContentFeelsLike>
                    <S.FeelsLikeImage
                        source={require('../../assets/TemperatureIcon.png')}
                    />
                    <S.FeelsLikeText>Feels like</S.FeelsLikeText>
                </S.ContentFeelsLike>
                <S.FeelsLikeNumber>
                    {currentWeather.length !== 0
                        ? `${currentWeather.list[0].main.feels_like.toFixed()}º`
                        : '00º'}
                </S.FeelsLikeNumber>
            </S.ContainerFeelsLike>
            <S.ContainerVelocity>
                <S.ContentVelocity>
                    <S.VelocityImage
                        source={require('../../assets/VelocityIcon.png')}
                    />
                    <S.VelocityText>Speed(ms)</S.VelocityText>
                </S.ContentVelocity>
                <S.VelocityNumber>
                    {currentWeather.length !== 0
                        ? `${currentWeather.list[0].wind.speed.toFixed()}`
                        : '00'}
                </S.VelocityNumber>
            </S.ContainerVelocity>
        </S.Container>
    );
}

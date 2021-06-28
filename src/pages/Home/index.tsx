import React from 'react';
import { DataAndTime } from '../../components/DataAndTime';
import { Header } from '../../components/Header';
import { Localization } from '../../components/Localization';
import { MoreInformation } from '../../components/MoreInformation';
import { Temperature } from '../../components/Temperature';
import useTimeOfDay from '../../hooks/useTimeOfDay';
import useWeatherAndLocation from '../../hooks/useWeatherAndLocation';
import * as S from './styles';

export default function Home() {
    const { currentWeather } = useWeatherAndLocation();
    const { isLight } = useTimeOfDay();

    function decidedImageWeather() {
        if (currentWeather.length !== 0) {
            if (currentWeather.list[0].weather[0].main === 'Clouds') {
                return (
                    <S.ImageWeather
                        resizeMode="contain"
                        source={
                            !isLight
                                ? require('../../assets/WeatherCloudySunImage.png')
                                : require('../../assets/WeatherCloudyMoonImage.png')
                        }
                    />
                );
            } else if (currentWeather.list[0].weather[0].main === 'Rainy') {
                return (
                    <S.ImageWeather
                        resizeMode="contain"
                        source={
                            !isLight
                                ? require('../../assets/WeatherCloudyRainyImage.png')
                                : require('../../assets/WeatherCloudyRainyMoonImage.png')
                        }
                    />
                );
            } else if (currentWeather.list[0].weather[0].main === 'Clear Sky') {
                return (
                    <S.ImageWeather
                        resizeMode="contain"
                        source={
                            !isLight
                                ? require('../../assets/WeatherCloudyClearSkyImage.png')
                                : require('../../assets/WeatherCloudyClearSkyMoonImage.png')
                        }
                    />
                );
            } else if (currentWeather.list[0].weather[0].main === 'Snowing') {
                return (
                    <S.ImageWeather
                        resizeMode="contain"
                        source={
                            !isLight
                                ? require('../../assets/WeatherCloudySnowingImage.png')
                                : require('../../assets/WeatherCloudySnowingMoonImage.png')
                        }
                    />
                );
            } else if (currentWeather.list[0].weather[0].main === 'Extreme') {
                return (
                    <S.ImageWeather
                        resizeMode="contain"
                        source={
                            !isLight
                                ? require('../../assets/WeatherCloudyExtremeImage.png')
                                : require('../../assets/WeatherCloudyExtremeMoonImage.png')
                        }
                    />
                );
            } else if (currentWeather.list[0].weather[0].main === 'Mist') {
                return (
                    <S.ImageWeather
                        resizeMode="contain"
                        source={
                            !isLight
                                ? require('../../assets/WeatherCloudyMistImage.png')
                                : require('../../assets/WeatherCloudyMistMoonImage.png')
                        }
                    />
                );
            } else {
                return (
                    <S.ImageWeather
                        resizeMode="contain"
                        source={
                            !isLight
                                ? require('../../assets/WeatherCloudyMistImage.png')
                                : require('../../assets/WeatherCloudyMistMoonImage.png')
                        }
                    />
                );
            }
        } else {
            return (
                <S.ImageWeather
                    resizeMode="contain"
                    source={
                        !isLight
                            ? require('../../assets/WeatherCloudyMistImage.png')
                            : require('../../assets/WeatherCloudyMistMoonImage.png')
                    }
                />
            );
        }
    }

    return (
        <S.Container isLight={isLight}>
            <Header />
            <Localization />
            {decidedImageWeather()}
            <Temperature />
            <DataAndTime />
            <S.ContainerMoreInformation>
                <MoreInformation />
            </S.ContainerMoreInformation>
        </S.Container>
    );
}

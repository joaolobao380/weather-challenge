import React from 'react';
import { DataAndTime } from '../../components/DataAndTime';
import { Header } from '../../components/Header';
import { Localization } from '../../components/Localization';
import { MoreInformation } from '../../components/MoreInformation';
import { Temperature } from '../../components/Temperature';
import useTimeOfDay from '../../hooks/useTimeOfDay';
import * as S from './styles';

export default function Home() {
    const { isLight } = useTimeOfDay();

    return (
        <S.Container isLight={isLight}>
            <Header />
            <Localization />
            <S.ImageWeather
                source={
                    !isLight
                        ? require('../../assets/WeatherCloudySunImage.png')
                        : require('../../assets/WeatherCloudyMoonImage.png')
                }
            />
            <Temperature />
            <DataAndTime />
            <S.ContainerMoreInformation>
                <MoreInformation />
            </S.ContainerMoreInformation>
        </S.Container>
    );
}

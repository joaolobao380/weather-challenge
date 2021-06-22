import React from 'react';
import { DataAndTime } from '../../components/DataAndTime';
import { Header } from '../../components/Header';
import { Localization } from '../../components/Localization';
import { MoreInformation } from '../../components/MoreInformation';
import { Temperature } from '../../components/Temperature';
import * as S from './styles';

export default function Home() {
    return (
        <S.Container>
            <Header />
            <Localization />
            <S.ImageWeather
                source={require('../../assets/WeatherCloudySunImage.png')}
            />
            <Temperature />
            <DataAndTime />
            <S.ContainerMoreInformation>
                <MoreInformation />
            </S.ContainerMoreInformation>
        </S.Container>
    );
}

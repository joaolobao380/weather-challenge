import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { format } from 'date-fns';
import useWeatherAndLocation from '../../hooks/useWeatherAndLocation';

import * as S from './styles';

export function Header() {
    const { getCurrentWeather, isLoading } = useWeatherAndLocation();

    return (
        <S.Container>
            <S.ContainerLogoUpdate>
                <S.ContainerLogo>
                    <S.Logo source={require('../../assets/Logo.png')} />
                    <S.Day>{format(new Date(), 'cccc')}</S.Day>
                </S.ContainerLogo>
                {!isLoading ? (
                    <TouchableOpacity onPress={() => getCurrentWeather()}>
                        <S.IconUpdate
                            source={require('../../assets/updateIcon.png')}
                        />
                    </TouchableOpacity>
                ) : (
                    <ActivityIndicator size="small" color="#00B4D2" />
                )}
            </S.ContainerLogoUpdate>
        </S.Container>
    );
}

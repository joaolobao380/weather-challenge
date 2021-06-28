import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { format } from 'date-fns';

import useWeatherAndLocation from '../../hooks/useWeatherAndLocation';
import useTimeOfDay from '../../hooks/useTimeOfDay';

import * as S from './styles';

export function Header() {
    const { getCurrentWeather, isLoading } = useWeatherAndLocation();
    const { isLight } = useTimeOfDay();

    return (
        <S.Container>
            <S.ContainerLogoUpdate>
                <S.ContainerLogo>
                    <S.Logo
                        source={
                            !isLight
                                ? require('../../assets/Logo.png')
                                : require('../../assets/LogoLight.png')
                        }
                    />
                    <S.Day isLight={isLight}>
                        {format(new Date(), 'cccc')}
                    </S.Day>
                </S.ContainerLogo>
                {!isLoading ? (
                    <TouchableOpacity onPress={() => getCurrentWeather()}>
                        <S.IconUpdate
                            source={
                                !isLight
                                    ? require('../../assets/updateIcon.png')
                                    : require('../../assets/updateIconLight.png')
                            }
                        />
                    </TouchableOpacity>
                ) : (
                    <ActivityIndicator
                        size="small"
                        color={!isLight ? '#00B4D2' : 'white'}
                    />
                )}
            </S.ContainerLogoUpdate>
        </S.Container>
    );
}

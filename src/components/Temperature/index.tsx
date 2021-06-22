import React from 'react';
import * as S from './styles';

export function Temperature() {
    return (
        <S.Container>
            <S.TemperatureNumber>36º</S.TemperatureNumber>
            <S.TemperatureDescription>Cloudy</S.TemperatureDescription>
        </S.Container>
    );
}

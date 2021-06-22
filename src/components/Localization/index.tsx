import React from 'react';
import * as S from './styles';

export function Localization() {
    return (
        <S.Container>
            <S.LocalizationIcon
                source={require('../../assets/LocalizationIcon.png')}
            />
            <S.LocalizationText>Recife - PE</S.LocalizationText>
        </S.Container>
    );
}

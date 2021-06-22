import React from 'react';
import * as S from './styles';

export function Header() {
    return (
        <S.Container>
            <S.ContainerLogoUpdate>
                <S.ContainerLogo>
                    <S.Logo source={require('../../assets/Logo.png')} />
                    <S.Day>Monday</S.Day>
                </S.ContainerLogo>
                <S.IconUpdate source={require('../../assets/updateIcon.png')} />
            </S.ContainerLogoUpdate>
        </S.Container>
    );
}

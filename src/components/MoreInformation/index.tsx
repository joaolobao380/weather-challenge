import React from 'react';
import useTimeOfDay from '../../hooks/useTimeOfDay';
import { BodyMoreInformation } from '../BodyMoreInformation';
import * as S from './styles';

export function MoreInformation() {
    const { isLight } = useTimeOfDay();

    return (
        <S.Container isLight={isLight}>
            <S.LabelMoreInformation isLight={isLight}>
                More information
            </S.LabelMoreInformation>
            <BodyMoreInformation />
        </S.Container>
    );
}

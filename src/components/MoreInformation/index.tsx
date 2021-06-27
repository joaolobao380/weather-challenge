import React from 'react';
import { BodyMoreInformation } from '../BodyMoreInformation';
import * as S from './styles';

export function MoreInformation() {
    return (
        <S.Container>
            <S.LabelMoreInformation>More information</S.LabelMoreInformation>
            <BodyMoreInformation />
        </S.Container>
    );
}

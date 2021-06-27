import React from 'react';
import * as S from './styles';
import { format } from 'date-fns';

export function DataAndTime() {
    return (
        <S.Container>
            <S.DateText>{format(new Date(), 'PP')}</S.DateText>
        </S.Container>
    );
}

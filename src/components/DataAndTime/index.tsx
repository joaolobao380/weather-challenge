import React from 'react';

import useTimeOfDay from '../../hooks/useTimeOfDay';
import { format } from 'date-fns';

import * as S from './styles';

export function DataAndTime() {
    const { isLight } = useTimeOfDay();

    return (
        <S.Container>
            <S.DateText isLight={isLight}>
                {format(new Date(), 'PP')}
            </S.DateText>
        </S.Container>
    );
}

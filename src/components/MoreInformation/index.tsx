import React from 'react';
import * as S from './styles';

interface Props {
    change: boolean;
}

export function MoreInformation({ change }: Props) {
    return <S.Container change={change} />;
}

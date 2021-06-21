import React from 'react';
import { MoreInformation } from '../../components/MoreInformation';
import * as S from './styles';

export default function Home() {
    return (
        <S.Container>
            <S.ContainerMoreInformation>
                <MoreInformation change={false} />
            </S.ContainerMoreInformation>
        </S.Container>
    );
}

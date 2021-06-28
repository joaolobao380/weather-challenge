import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

import { ITimeOfDay } from '../../types';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TemperatureNumber = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.blueDefault : theme.colors.white};
    font-size: ${scale(72)}px;
`;

export const TemperatureDescription = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.blueDefault : theme.colors.white};
    font-size: ${scale(16)}px;
`;

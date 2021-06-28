import styled from 'styled-components/native';
import { verticalScale } from 'react-native-size-matters';
import { ITimeOfDay } from '../../types';

export const Container = styled.View`
    flex-direction: row;
`;

export const DateText = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(16)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.blueDefault : theme.colors.white};
`;

export const TimeText = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(16)}px;

    color: ${({ theme }) => theme.colors.blueDefault};
`;

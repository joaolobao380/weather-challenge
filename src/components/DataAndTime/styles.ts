import styled from 'styled-components/native';
import { verticalScale } from 'react-native-size-matters';

export const Container = styled.View`
    flex-direction: row;
`;

export const DateText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(16)}px;

    color: ${({ theme }) => theme.colors.blueDefault};
`;

export const TimeText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(16)}px;

    color: ${({ theme }) => theme.colors.blueDefault};
`;

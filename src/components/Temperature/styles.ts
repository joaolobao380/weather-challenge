import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TemperatureNumber = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.blueDefault};
    font-size: ${scale(72)}px;
`;

export const TemperatureDescription = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.blueDefault};
    font-size: ${scale(16)}px;
`;

import styled from 'styled-components/native';
import { verticalScale } from 'react-native-size-matters';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerMoreInformation = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const ImageWeather = styled.Image`
    width: ${verticalScale(224)}px;
    height: ${verticalScale(150)}px;
    margin-top: ${verticalScale(44)}px;
`;

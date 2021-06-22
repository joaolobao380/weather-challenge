import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';

const height = Dimensions.get('window').height / 4;
const width = Dimensions.get('window').width;

export const Container = styled.View`
    align-items: center;
    height: ${height}px;
    width: ${width}px;
    border-top-right-radius: ${scale(80)}px;

    background-color: ${({ theme }) => theme.colors.blueDefault};
`;

export const LabelMoreInformation = styled.Text`
    font-size: ${verticalScale(24)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-top: ${verticalScale(16)}px;

    color: ${({ theme }) => theme.colors.white};
`;

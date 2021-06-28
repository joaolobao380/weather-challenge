import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';
import { ITimeOfDay } from '../../types';

const height = Dimensions.get('window').height / 4;
const width = Dimensions.get('window').width;

export const Container = styled.View<ITimeOfDay>`
    align-items: center;
    height: ${height}px;
    width: ${width}px;
    border-top-right-radius: ${scale(80)}px;

    background-color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.blueDefault : theme.colors.white};
`;

export const LabelMoreInformation = styled.Text<ITimeOfDay>`
    font-size: ${verticalScale(24)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-top: ${verticalScale(16)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.white : theme.colors.pupleDefault};
`;

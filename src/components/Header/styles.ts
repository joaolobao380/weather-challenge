import styled from 'styled-components/native';
import { verticalScale } from 'react-native-size-matters';

import { ITimeOfDay } from '../../types';

export const Container = styled.View`
    margin-top: ${verticalScale(40)}px;
    height: ${verticalScale(54)}px;
    width: 80%;
`;

export const ContainerLogoUpdate = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerLogo = styled.View``;

export const Logo = styled.Image``;

export const IconUpdate = styled.Image``;

export const Day = styled.Text<ITimeOfDay>`
    font-size: ${verticalScale(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.blueDefault : theme.colors.white};
`;

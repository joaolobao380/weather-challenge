import styled from 'styled-components/native';
import { verticalScale } from 'react-native-size-matters';

import { ITimeOfDay } from '../../types';

export const Container = styled.View`
    margin-top: ${verticalScale(48)}px;
    flex-direction: row;
`;

export const LocalizationIcon = styled.Image``;

export const LocalizationText = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(16)}px;
    margin-left: ${verticalScale(4)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.blueDefault : theme.colors.white};
`;

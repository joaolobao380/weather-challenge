import styled from 'styled-components/native';
import { verticalScale } from 'react-native-size-matters';
import { ITimeOfDay } from '../../types';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: ${verticalScale(16)}px;
    width: 100%;
    padding-right: ${verticalScale(8)}px;
    padding-left: ${verticalScale(8)}px;
`;

export const ContainerHumidity = styled.View`
    align-items: center;
`;
export const ContentHumidity = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const HumidityImage = styled.Image``;

export const HumidityText = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(16)}px;
    margin-left: ${verticalScale(4)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.white : theme.colors.pupleDefault};
`;

export const HumidityNumber = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(32)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.white : theme.colors.pupleDefault};
`;

export const ContainerFeelsLike = styled.View`
    align-items: center;
`;
export const ContentFeelsLike = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const FeelsLikeImage = styled.Image``;

export const FeelsLikeText = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(16)}px;
    margin-left: ${verticalScale(4)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.white : theme.colors.pupleDefault};
`;

export const FeelsLikeNumber = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(32)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.white : theme.colors.pupleDefault};
`;

export const ContainerVelocity = styled.View`
    align-items: center;
`;
export const ContentVelocity = styled.View`
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
`;
export const VelocityImage = styled.Image``;

export const VelocityText = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(16)}px;
    margin-left: ${verticalScale(4)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.white : theme.colors.pupleDefault};
`;

export const VelocityNumber = styled.Text<ITimeOfDay>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${verticalScale(32)}px;

    color: ${({ theme, isLight }) =>
        !isLight ? theme.colors.white : theme.colors.pupleDefault};
`;

export const ContainerLastUpdate = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: ${verticalScale(8)}px;
`;

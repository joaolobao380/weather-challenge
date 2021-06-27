import React from 'react';
import * as S from './styles';

export function BodyMoreInformation() {
    return (
        <>
            <S.Container>
                <S.ContainerHumidity>
                    <S.ContentHumidity>
                        <S.HumidityImage
                            source={require('../../assets/humidityIcon.png')}
                        />
                        <S.HumidityText>Humidity</S.HumidityText>
                    </S.ContentHumidity>
                    <S.HumidityNumber>94%</S.HumidityNumber>
                </S.ContainerHumidity>
                <S.ContainerFeelsLike>
                    <S.ContentFeelsLike>
                        <S.FeelsLikeImage
                            source={require('../../assets/TemperatureIcon.png')}
                        />
                        <S.FeelsLikeText>Feels like</S.FeelsLikeText>
                    </S.ContentFeelsLike>
                    <S.FeelsLikeNumber>25º</S.FeelsLikeNumber>
                </S.ContainerFeelsLike>
                <S.ContainerVelocity>
                    <S.ContentVelocity>
                        <S.VelocityImage
                            source={require('../../assets/VelocityIcon.png')}
                        />
                        <S.VelocityText>Velocity(ms)</S.VelocityText>
                    </S.ContentVelocity>
                    <S.VelocityNumber>100</S.VelocityNumber>
                </S.ContainerVelocity>
            </S.Container>
            <S.ContainerLastUpdate>
                <S.LastUpdateText>Last update:</S.LastUpdateText>
                <S.LastUpdated>09:12:45</S.LastUpdated>
            </S.ContainerLastUpdate>
        </>
    );
}

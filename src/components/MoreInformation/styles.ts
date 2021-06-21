import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

const height = Dimensions.get('window').height / 2.5;
const width = Dimensions.get('window').width;

interface Props {
    change: boolean;
}

export const Container = styled.View<Props>`
    height: ${height}px;
    width: ${width}px;
    border-top-right-radius: ${scale(80)}px;

    background-color: ${({ theme, change }) =>
        change ? theme.colors.blueDefault : theme.colors.pupleDefault};
`;

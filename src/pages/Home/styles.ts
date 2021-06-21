import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;

    background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerMoreInformation = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

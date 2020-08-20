import styled from 'styled-components/native';

export const Container = styled.View`
    height: 60px;
    background-color: #222;
    border-top-color: #000;
    border-width: 2px;
`;

export const SubContainer = styled.View`
    height: 70px;
    flex-direction: row;
`;

export const GroupAction = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const ActionName = styled.Text`
    color: #fff;
    font-size: 10px;
    padding: 3px;
`;
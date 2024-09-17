import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    padding: 0;
    margin: 0;
    list-style-type: none;
    text-decoration: none;
`

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;
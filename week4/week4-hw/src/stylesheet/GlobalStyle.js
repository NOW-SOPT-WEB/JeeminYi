import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

body {
    background-color: ${({theme}) => theme.colors.lightGreen};
    font-family: 'Pretendard-Regular';
}

button {
    font-family: 'Pretendard-Regular';
    cursor: pointer;
}
`;

export default GlobalStyle;
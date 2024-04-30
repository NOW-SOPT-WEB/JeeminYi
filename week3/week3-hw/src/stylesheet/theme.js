const colors = {
  white: "#FFFFFF",
  black: "#000000",
  skyBlue: "#C7F5FE",
  lightPink: "#FCC8F8",
  lightPurple: "#EAB4F8",
  purple: "#9900F0",
  lightYellow: "#F3F798",
  toasterOrange: "#FF5530",
  toasterLightOrange: "#FFEEEB",
  toasterDarkOrange: "#F05A39",
};

const fonts = {
  xl: "2rem",
  lg: "1.5rem",
  md: "1.2rem",
  sm: "1rem",
};
const fontFaces = `
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;

const theme = {
  colors,
  fonts,
  fontFaces,
};

export default theme;

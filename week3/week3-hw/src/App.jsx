import "./App.css";
import theme from "./stylesheet/theme"; // eslint-disable-line no-unused-vars
import { createGlobalStyle } from "styled-components"; // eslint-disable-line no-unused-vars
import Header from "./components/header/header"; // eslint-disable-line no-unused-vars
import HeaderSection from "./components/header/header-style";
import ButtonSection from "./components/button/button-style";
import Button from "./components/button/button"; // eslint-disable-line no-unused-vars
import CardContainer from "./components/card/cardContainer";

const GlobalStyle = createGlobalStyle`
  ${theme.fontFaces}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection>
        <Header />
      </HeaderSection>
      <ButtonSection>
        <Button />
      </ButtonSection>
      <CardContainer />
    </>
  );
}

export default App;

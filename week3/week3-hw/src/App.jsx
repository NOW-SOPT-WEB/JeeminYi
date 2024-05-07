import "./App.css";
import theme from "./stylesheet/theme"; // eslint-disable-line no-unused-vars
import { createGlobalStyle } from "styled-components"; // eslint-disable-line no-unused-vars
import Header from "./components/header/header"; // eslint-disable-line no-unused-vars
import HeaderSection from "./components/header/header-style";
import ButtonSection from "./components/button/button-style";
import Button from "./components/button/button"; // eslint-disable-line no-unused-vars
import CardContainer from "./components/card/cardContainer";
import useCards from "./components/card/useCards";

const GlobalStyle = createGlobalStyle`
  ${theme.fontFaces}
`;

function App() {
  const { cards, shuffleCards, flipCard } = useCards();
  return (
    <>
      <GlobalStyle />
      <HeaderSection>
        <Header shuffleCards={shuffleCards} />
      </HeaderSection>
      <ButtonSection>
        <Button />
      </ButtonSection>
      <CardContainer
        cards={cards}
        shuffleCards={shuffleCards}
        flipCard={flipCard}
      />
    </>
  );
}

export default App;

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./stylesheet/GlobalStyle";
import theme from "./stylesheet/theme";


function App() {


  return (
    <>
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <AppWrapper>
      </AppWrapper>
    </ThemeProvider>
    </>
  );
}

export default App

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.black};
`;
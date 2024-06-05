import GlobalStyle from "./styles/globalStyle";
import { DefaultHeader } from "./components/header";
import { MainWrapper } from "./components/mainWrapper";

function App() {
  return (
    <>
      <GlobalStyle />
      <DefaultHeader />
      <MainWrapper />
    </>
  );
}

export default App;

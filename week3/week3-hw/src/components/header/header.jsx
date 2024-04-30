import { useShuffleCards } from "../card/card";
import HeaderSection from "./header-style";
function Header() {
  const shuffleCards = useShuffleCards();

  return (
    <HeaderSection>
      <section>
        <h1 className="HeaderTitle">팀 링마인드 맞추기</h1>
        <div className="HeaderScore">0 / 5</div>
      </section>
      <sectionButton>
        <button onClick={shuffleCards} className="ResetButton">
          reset
        </button>
      </sectionButton>
    </HeaderSection>
  );
}

export default Header;
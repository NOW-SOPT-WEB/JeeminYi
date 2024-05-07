import HeaderSection from "./header-style";
function Header({ shuffleCards }) {
  const handleClick = () => {
    shuffleCards(); // shuffleCards 함수 호출
    console.log("click");
  };

  return (
    <HeaderSection>
      <section>
        <h1 className="HeaderTitle">팀 링마인드 맞추기</h1>
        <div className="HeaderScore">0 / 5</div>
      </section>
      <button onClick={handleClick} className="ResetButton">
        reset
      </button>
    </HeaderSection>
  );
}

export default Header;

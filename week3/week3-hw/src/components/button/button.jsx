import ButtonSection from "./button-style";
function Button() {
  return (
    <ButtonSection>
      <button className="button easy">easy</button>
      <button className="button normal">normal</button>
      <button className="button hard">hard</button>
    </ButtonSection>
  );
}

export default Button;

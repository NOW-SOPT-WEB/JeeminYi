import cover from "../../assets/cover.png";
import { BackImg, FrontImg, CardSection, CardWrapper } from "./card-style";

const CardContainer = ({ cards, shuffleCards, flipCard }) => {
  return (
    <CardSection>
      {cards.map((card, index) => (
        <CardWrapper key={card.id} onClick={() => flipCard(index)}>
          <FrontImg src={card.src} alt="cardFront"></FrontImg>
          <BackImg
            className={card.isOpen ? "hidden" : ""}
            src={cover}
            alt="cardBack"
          ></BackImg>
        </CardWrapper>
      ))}
    </CardSection>
  );
};

export default CardContainer;

// import { useEffect } from "react";
import { useShuffleCards } from "./card";
import cover from "../../assets/cover.png";
import { BackImg, FrontImg, CardSection } from "./card-style";

const CardContainer = () => {
  const { cards } = useShuffleCards();

  return (
    <CardSection>
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <BackImg src={cover} alt="cardBack"></BackImg>
            <FrontImg src={card.src} alt="cardFront"></FrontImg>
          </div>
        </div>
      ))}
    </CardSection>
  );
};

export default CardContainer;

import { useShuffleCards } from "./card";
import { CARD_LIST } from "../../constants/constants";

const CardContainer = () => {
  const { cards } = useShuffleCards();

  return (
    <div className="cardContainer">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <img
              className="backImg"
              src="/assets/cover.png"
              alt="cardBack"
            ></img>
            <img className="frontImg" src={CARD_LIST.src} alt="cardFront"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;

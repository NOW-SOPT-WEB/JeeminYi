import { CARD_LIST } from "../../constants/constants";
import { useState } from "react";

export const useShuffleCards = () => {
  const [cards, setCards] = useState([]);

  //카드 두개로 만들기 + 배열로 가져오기 + 순서 섞기
  const shuffleCards = () => {
    const shuffledCards = [...CARD_LIST, ...CARD_LIST]
      .sort(() => Math.random() - 0.5) //음수면 순서 안바뀌고 양수면 순서 바뀜
      .map((card) => ({ ...card, id: Math.random() })); //카드에 랜덤한 아이디 값 줌
    setCards(shuffledCards);
  };
  return { cards, shuffleCards };
  //     <div className="cardContainer">
  //       {card.map((card) => (
  //         <div className="card" key={card.id}>
  //           <div>
  //             <img className="backImg" src={coverImg} alt="cardBack"></img>
  //             <img className="backImg" src={CARD_LIST.src} alt="cardBack"></img>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
};

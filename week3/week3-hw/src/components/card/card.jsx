import { CARD_LIST } from "../../constants/constants";
import { useState } from "react";
import { useEffect } from "react";

export const useShuffleCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    shuffleCards();
  }, []);

  //카드 두개로 만들기 + 배열로 가져오기 + 순서 섞기
  const shuffleCards = () => {
    const shuffledCards = [...CARD_LIST, ...CARD_LIST]
      .sort(() => Math.random() - 0.5) //음수면 순서 안바뀌고 양수면 순서 바뀜
      .map((card) => ({ ...card, id: Math.random() })); //카드에 랜덤한 아이디 값 줌
    setCards(shuffledCards);
  };

  return { cards, shuffleCards, useShuffleCards };
};

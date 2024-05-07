import { CARD_LIST } from "../../constants/constants";
import { useState, useEffect } from "react";

const useCards = () => {
  const [cards, setCards] = useState([]);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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

  const handleChoice = () => {
    //카드 선택 데이터 입력받기
    const handleChoice = (card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    return { choiceOne, choiceTwo, handleChoice };
  };

  const flipCard = (index) => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], isOpen: true };

    setCards(newCards);
  };

  return { cards, shuffleCards, handleChoice, flipCard };
};

export default useCards;

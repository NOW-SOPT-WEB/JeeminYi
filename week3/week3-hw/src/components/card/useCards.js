import { CARD_LIST } from "../../constants/constants";
import { useState, useEffect } from "react";

const useCards = () => {
  const [cards, setCards] = useState([]);

  // const [choiceOne, setChoiceOne] = useState({});
  // const [choiceTwo, setChoiceTwo] = useState({});

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

  const flipCard = (index) => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], isOpen: true };

    setCards(newCards);
    // if (Object.keys(choiceOne).length === 0) {
    //   //첫번째로 뒤집은 카드 존재하지 않음
    //   setChoiceOne({ index });
    // } else {
    //   //두번째 카드임
    //   setChoiceTwo({ index });
    // }
  };

  //두 카드를 비교
  // if (setChoiceOne.index === setChoiceTwo.index) {
  //   setChoiceOne({});
  //   setChoiceTwo({});
  //   //서로 다른 카드인 경우도 비워
  // } else {
  //   setChoiceOne({});
  //   setChoiceTwo({});
  // }

  return { cards, shuffleCards, flipCard };
};

export default useCards;

import { CARD_LIST } from "../../constants/constants";
import { useState, useEffect } from "react";

const useCards = ({ ref }) => {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState({});
  const [choiceTwo, setChoiceTwo] = useState({});
  const [score, setScore] = useState(0);

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
    if (Object.keys(choiceTwo).length !== 0 || cards[index].isOpen === true) {
      return;
    }

    const newCards = [...cards];
    newCards[index] = { ...newCards[index], isOpen: true };
    const selectCard = newCards[index];

    setCards(newCards);
    if (Object.keys(choiceOne).length === 0) {
      //첫번째로 뒤집은 카드 존재하지 않음
      setChoiceOne(selectCard);
    } else {
      //두번째 카드임

      // 두 카드를 비교
      if (choiceOne.name === selectCard.name) {
        setScore((prev) => prev + 1);
        setChoiceOne({});
        setChoiceTwo({});
        //서로 다른 카드인 경우도 비워
      } else {
        setChoiceTwo(selectCard);
      }
    }
  };

  useEffect(() => {
    if (
      Object.keys(choiceOne).length !== 0 &&
      Object.keys(choiceTwo).length !== 0 &&
      choiceOne.name !== choiceTwo.name
    ) {
      setTimeout(() => {
        const tempCards = [...cards];
        tempCards[tempCards.indexOf(choiceOne)] = {
          ...choiceOne,
          isOpen: false,
        };
        tempCards[tempCards.indexOf(choiceTwo)] = {
          ...choiceTwo,
          isOpen: false,
        };
        setCards(tempCards);
        setChoiceOne({});
        setChoiceTwo({});
      }, 1000);
    }
  }, [choiceOne, choiceTwo, cards]);

  useEffect(() => {
    if (score === 5) {
      ref.current.showModal();
      setChoiceOne({});
      setChoiceTwo({});
      setScore(0);
    }
  }, [score]);

  return { cards, shuffleCards, flipCard, score };
};

export default useCards;

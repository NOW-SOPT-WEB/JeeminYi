import styled from "styled-components";
import { FoodData } from "../constants/FoodData";

const SixthRound = ({ setStep }) => {
  //useState 써서 이전 단계 필터링 후 랜덤 돌려서 렌더링하기
  function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const randomFood = getRandomValue(FoodData);
  return (
    <PageWrapper>
      <TitleWrapper>오늘의 점메추는 바로바로</TitleWrapper>
      <ResultWrapper>
        <FoodImg src={randomFood.img} alt="random food img" />
        <FoodName>{randomFood.name}</FoodName>
      </ResultWrapper>
      <RetryBtn
        onClick={() => {
          setStep("secondRecom");
        }}
      >
        다시하기
      </RetryBtn>
    </PageWrapper>
  );
};

export default SixthRound;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const TitleWrapper = styled.span`
  justify-content: center;
  width: 45rem;
  height: 5rem;
  background-color: white;
  color: black;
  font-size: large;
  font-weight: 600;
  text-align: center;
  align-content: center;
  border-radius: 1rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FoodImg = styled.img`
  height: 25rem;
  width: auto;
  border-radius: 1.5rem;
`;

const FoodName = styled.p`
  color: black;
  font-size: large;
  font-weight: 600;
  margin-top: 1.7rem;
`;

const RetryBtn = styled.button`
  width: 8.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: black;
  font-size: medium;
  font-weight: 400;
  margin-top: 1.5rem;
  color: white;
  &:hover {
    background-color: #ffd438;
    color: black;
  }
`;

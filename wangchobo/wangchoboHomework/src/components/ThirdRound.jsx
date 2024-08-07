import styled from "styled-components";
// import { FoodData } from "../constants/FoodData";

const ThirdRound = ({ setStep, isClicked, setIsClicked }) => {
  //   const filterFood = (nation) => {
  //     const filterFoodArray = FoodData.filter((value) => value.includes(nation));
  //     setFoodArray(filterFoodArray);
  //   };
  //setStep, setFoodArray, isSelected, setIsSelected

  return (
    <PageWrapper>
      <TitleWrapper>오늘의 무드는 뭐야?</TitleWrapper>
      <H4>1 / 3</H4>
      <MoodWrapper>
        <Thirdbox
          className={`korea ${isClicked === "korea" && "clicked"}`}
          onClick={() => {
            // filterFood("korea");
            setIsClicked("korea");
          }}
        >
          한식
        </Thirdbox>
        <Thirdbox
          className={`japan ${isClicked === "japan" && "clicked"}`}
          onClick={() => {
            // filterFood("japan");
            setIsClicked("japan");
          }}
        >
          일식
        </Thirdbox>
        <Thirdbox
          className={`china ${isClicked === "china" && "clicked"}`}
          onClick={() => {
            // filterFood("china");
            setIsClicked("china");
          }}
        >
          중식
        </Thirdbox>
      </MoodWrapper>
      <BtnWrapper>
        <PrevBtn
          onClick={() => {
            setStep("secondRecom");
          }}
        >
          이전으로
        </PrevBtn>
        <NextBtn
          className={`nextbutton ${
            (isClicked === "korea" ||
              isClicked === "japan" ||
              isClicked === "china") &&
            "abled"
          }`}
          onClick={() => {
            setStep("fourth");
          }}
          disabled={
            isClicked !== "korea" &&
            isClicked !== "japan" &&
            isClicked !== "china"
          }
        >
          다음으로
        </NextBtn>
      </BtnWrapper>
    </PageWrapper>
  );
};

export default ThirdRound;

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
  margin-top: 2rem;
  background-color: white;
  color: black;
  font-size: large;
  font-weight: 600;
  text-align: center;
  align-content: center;
  border-radius: 1rem;
`;

const H4 = styled.p`
  padding-top: 2rem;
  width: 45rem;
  padding-right: 1rem;
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
`;

const MoodWrapper = styled.div`
  display: flex;
  margin-top: 6rem;
  gap: 2rem;
`;

const Thirdbox = styled.div`
  width: 13rem;
  height: 13rem;
  background-color: white;
  border-radius: 2rem;
  text-align: center;
  align-content: center;
  font-size: large;
  font-weight: 600;
  border: 1.5px solid;
  border-color: lightgray;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    border-color: black;
  }
  &.clicked {
    background-color: black;
    color: white;
    border: none;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 8rem;
`;

const PrevBtn = styled.button`
  width: 8.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: black;
  font-size: medium;
  font-weight: 400;
  color: white;
  &:hover {
    background-color: #ffd438;
    color: black;
  }
`;

const NextBtn = styled.button`
  width: 8.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: lightgray;
  font-size: medium;
  font-weight: 400;
  color: #383838;
  &:hover {
    border-color: black;
    border: 1px solid;
  }
  &.abled {
    background-color: #ffd438;
    color: black;
  }
`;

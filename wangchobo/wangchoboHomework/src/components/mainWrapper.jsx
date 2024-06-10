import styled from "styled-components";
import { FirstRound } from "./firstRound";
import { useState } from "react";
import SecondRoundRecomm from "./SecondRoundRecomm";
import SecondRoundRandom from "./SecondRoundRandom";
import ThirdRound from "./ThirdRound";
import FourthRound from "./FourthRound";
import FifthRound from "./FifthRound";
import SixthRound from "./SixthRound";
import RandomResult from "./RandomResult";

export const MainWrapper = ({ step, setStep }) => {
  //음식 데이터 filter 관리
  const [foodArray, setFoodArray] = useState([]);
  //Next 버튼 비활성화 (선택 여부 확인)
  const [isSelected, setIsSelected] = useState(false);
  // 음식 선택 시 스타일 적용
  const [isClicked, setIsClicked] = useState(null);
  return (
    <PageWrapper>
      <BoxWrapper>
        {step === "first" && <FirstRound setStep={setStep} />}
        {step === "secondOne" && <SecondRoundRecomm setStep={setStep} />}
        {step === "secondTwo" && <SecondRoundRandom setStep={setStep} />}
        {step === "third" && (
          <ThirdRound
            setStep={setStep}
            foodArray={foodArray}
            setFoodArray={setFoodArray}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        )}
        {step === "fourth" && (
          <FourthRound
            setStep={setStep}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        )}
        {step === "fifth" && (
          <FifthRound
            setStep={setStep}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        )}
        {step === "sixth" && <SixthRound setStep={setStep} />}
        {step === "randomResult" && <RandomResult setStep={setStep} />}
      </BoxWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
  width: 100rem;
  height: 50rem;
  background-color: #ededed;
  border-radius: 2rem;
  box-shadow: 1px 1px 20px lightgray;
`;

import styled from "styled-components";

const FifthRound = ({ setStep, isClicked, setIsClicked }) => {
  return (
    <PageWrapper>
      <TitleWrapper>마지막으로 골라봐!</TitleWrapper>
      <H4>3 / 3</H4>
      <MoodWrapper>
        <Fifthbox
          className={`noneSoup ${isClicked === "noneSoup" && "clicked"}`}
          onClick={() => {
            setIsClicked("noneSoup");
          }}
        >
          국물 X
        </Fifthbox>
        <Fifthbox
          className={`soup ${isClicked === "soup" && "clicked"}`}
          onClick={() => {
            setIsClicked("soup");
          }}
        >
          국물 O
        </Fifthbox>
      </MoodWrapper>
      <BtnWrapper>
        <PrevBtn
          onClick={() => {
            setStep("fourth");
          }}
        >
          이전으로
        </PrevBtn>
        <NextBtn
          className={`nextbutton ${
            (isClicked === "noneSoup" || isClicked === "soup") && "abled"
          }`}
          onClick={() => {
            setStep("sixth");
          }}
          disabled={isClicked !== "noneSoup" && isClicked !== "soup"}
        >
          결과보기
        </NextBtn>
      </BtnWrapper>
    </PageWrapper>
  );
};

export default FifthRound;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const TitleWrapper = styled.div`
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

const H4 = styled.h4`
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

const Fifthbox = styled.div`
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

import styled from "styled-components";

const SecondRoundRandom = ({ setStep }) => {
  return (
    <PageWrapper>
      <TitleWrapper>원하는 추천 방식을 골라봐~</TitleWrapper>
      <SecondWrapper>
        랜덤
        <br />
        추천
      </SecondWrapper>
      <StartBtn
        onClick={() => {
          setStep("third");
        }}
      >
        Start!
      </StartBtn>
    </PageWrapper>
  );
};

export default SecondRoundRandom;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
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

const SecondWrapper = styled.div`
  width: 45rem;
  height: 25rem;
  background-color: white;
  border-radius: 2rem;
  white-space: pre-wrap;
  text-align: center;
  align-content: center;
  line-height: 5rem;
  font-size: xx-large;
  font-weight: 800;
  border: 1.5px solid black;
  border-radius: 1rem;
`;

const StartBtn = styled.button`
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

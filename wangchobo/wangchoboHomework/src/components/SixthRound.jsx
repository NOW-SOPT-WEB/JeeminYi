import styled from "styled-components";

const SixthRound = ({ setStep }) => {
  return (
    <PageWrapper>
      <TitleWrapper>오늘의 점메추는 바로바로</TitleWrapper>
      <RetryBtn
        onClick={() => {
          setStep("secondOne");
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
  gap: 6rem;
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
`;

const RetryBtn = styled.button`
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

import styled from "styled-components";

const SecondRoundRecomm = () => {
  return (
    <PageWrapper>
      <TitleWrapper>원하는 추천 방식을 골라봐~</TitleWrapper>
      <SecondWrapper>
        취향대로
        <br />
        추천
      </SecondWrapper>
    </PageWrapper>
  );
};

export default SecondRoundRecomm;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
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
  height: 30rem;
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

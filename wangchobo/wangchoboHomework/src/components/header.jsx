import styled from "styled-components";

export const DefaultHeader = ({ isBtnClick, setStep }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>🎧 음~ 나 오늘 뭐 먹지? 🎧</HeaderTitle>
      {isBtnClick && (
        <HeaderBtn
          onClick={() => {
            setStep("first");
          }}
        >
          처음으로
        </HeaderBtn>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 6.5rem;
  display: flex;
  background-color: black;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  color: white;
  font-size: x-large;
  font-weight: bold;
  align-content: center;
`;

const HeaderBtn = styled.button`
  position: absolute;
  width: 8.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: white;
  font-size: medium;
  font-weight: 400;
  margin-top: 1.7rem;
  //align-content: center;해도 세로축 가운데 정렬이 안되는 이유가 뭘까요?
  right: 3%;
`;

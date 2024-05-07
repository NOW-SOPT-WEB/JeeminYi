import styled from "styled-components";

export const CardSection = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const CardImage = styled.img`
  border-radius: 10px;
  display: block;
  position: relative;
`;

export const BackImg = styled(CardImage)`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`;

export const FrontImg = styled(CardImage)`
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  position: relative;

  & .hidden {
    display: none;
  }
`;

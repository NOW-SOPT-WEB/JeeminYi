import styled from "styled-components";

export const CardSection = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardImage = styled.img`
  border-radius: 10px;
  display: block;
  margin: 4rem;
`;

export const BackImg = styled(CardImage)`
  cursor: pointer;
`;
export const FrontImg = styled(CardImage)`
  cursor: pointer;
`;

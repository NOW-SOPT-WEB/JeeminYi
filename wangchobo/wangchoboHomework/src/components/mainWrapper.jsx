import styled from "styled-components";

export const MainWrapper = () => {
  return <BoxWrapper></BoxWrapper>;
};

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center;
  align-self: center;
  align-content: center; */
  margin-top: 20rem;
  width: 100rem;
  height: 50rem;
  background-color: #f7f7f7;
  border-radius: 2rem;
  box-shadow: 1px 1px 20px lightgray;
`;

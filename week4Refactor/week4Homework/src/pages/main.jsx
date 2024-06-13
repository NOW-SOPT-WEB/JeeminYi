import styled from "styled-components";
import Video from "../assets/week4Video.mp4";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Main = () => {
  const navigate = useNavigate();
  const [memberId, setMemberId] = useState("");

  useEffect(() => {
    const storedMemberId = localStorage.getItem("memberId");
    if (storedMemberId) {
      setMemberId(storedMemberId);
    }
  }, []);
  return (
    <MainPageWrapper>
      <HeaderSection>팟짱님 생일 축하합니달라~💸</HeaderSection>
      <video src={Video} controls autoPlay height="500rem"></video>
      <BtnSection>
        <Btn onClick={() => navigate(`/My/${memberId}`)}>내 정보</Btn>
        <Btn onClick={() => navigate("/Join")}>회원가입</Btn>
      </BtnSection>
    </MainPageWrapper>
  );
};

export default Main;

const MainPageWrapper = styled.div`
  background-color: #fffbe9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const HeaderSection = styled.header`
  position: fixed;
  width: 100%;
  height: 5rem;
  align-content: center;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  top: 0;
  z-index: 2;
`;

// const Img = styled.img`
//   width: 30rem;
//   margin-bottom: 3.5rem;
// `;

const BtnSection = styled.span`
  width: 20rem;
  gap: 3rem;
  display: flex;
  margin-top: 6rem;
`;

const Btn = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 0.8rem;
  background-color: black;
  color: white;
  align-items: center;
  align-content: center;
  font-size: 12px;
  font-weight: 400;
`;

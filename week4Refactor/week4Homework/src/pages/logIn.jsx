import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Jeemin from "../assets/Jeemin.svg";

const LogIn = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const postData = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/login`,
        {
          authenticationId: userId,
          password: password,
        }
      );

      const memberId = postData.headers.location;
      navigate(`My/${memberId}`);
      console.log(postData);
      alert("로그인 완룡!");
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LogInPageWrapper>
      <LogInBox>
        <Title>팬클럽 로그인하기</Title>
        <Img src={Jeemin} />
        <InputSection>
          <InputText>ID</InputText>
          <Input value={userId} onChange={(e) => setUserId(e.target.value)} />
        </InputSection>
        <InputSection>
          <InputText>비밀번호</InputText>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputSection>
        <BtnSection>
          <Btn onClick={() => navigate("/Join")}>회원가입</Btn>
          <Btn onClick={handleLogIn}>로그인</Btn>
        </BtnSection>
      </LogInBox>
    </LogInPageWrapper>
  );
};

export default LogIn;

const LogInPageWrapper = styled.div`
  background-color: #fffbe9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const LogInBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 2rem;
  box-shadow: 1px 1px 20px lightgray;
  width: 50rem;
  height: 60rem;
  gap: 2rem;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 15rem;
  margin-bottom: 3.5rem;
`;

const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  height: 3rem;
  align-items: center;
`;

const InputText = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 0.5rem;
  height: 3rem;
  width: 20rem;
  padding-left: 0.5rem;
`;

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

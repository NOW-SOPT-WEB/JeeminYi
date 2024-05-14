import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logInImg from "../assets/image/LogInImg.png";
// import { useForm } from 'react-hook-form';

const LogIn = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // const { handleSubmit } = useForm();

  const handleLogIn = async () => {
    try {
      const postData = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/login`,
        {
          authenticationId: userId,
          password: password,
        }
      );
      console.log(postData);
      //이동하는 로직
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LogInPageWrapper>
      <LogInSection>
        <Title>팬클럽 로그인하기</Title>
        <img className="LogInImg" src={logInImg} alt="logIn-Img" />
        <InputFormSection>
          <input
            type="text"
            title="ID"
            placeholder="ID를 입력해주세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="text"
            title="PW"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputFormSection>
        <ButtonSection>
          <LogInBtn type="button" onClick={handleLogIn}>
            로그인
          </LogInBtn>
          <SignUpBtn type="button" onClick={() => navigate("/SignUp")}>
            회원가입
          </SignUpBtn>
        </ButtonSection>
      </LogInSection>
    </LogInPageWrapper>
  );
};

export default LogIn;

const LogInPageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const LogInSection = styled.div`
  border-radius: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  justify-content: center;
  font-size: 2rem;
`;

const InputFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogInBtn = styled.button`
  width: 5rem;
  height: 1.8;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  margin-right: 1rem;
  margin-top: 1rem;
  justify-content: center;
  padding-top: 4px;
`;

const SignUpBtn = styled.button`
  width: 5rem;
  height: 1.8rem;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
  justify-content: center;
  padding-top: 4px;
`;

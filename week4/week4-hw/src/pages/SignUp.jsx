import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userNum, setUserNum] = useState("");

  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      const postData = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
        {
          authenticationId: userId,
          password: password,
          nickname: userName,
          phone: userNum,
        }
      );
      console.log(postData);
      alert("회원가입 완룡!");
      navigate("/LogIn");
    } catch (error) {
      console.error("회원가입 실패");
    }
  };
  return (
    <SignUpPageWrapper>
      <SignUpSection>
        <Title>팬클럽 회원가입하기</Title>
        <InputFormSection>
          <p>ID</p>
          <input
            placeholder="ID를 입력해주세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <p>PW</p>
          <input
            title="PW"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어야
            합니다
          </p>
          <p>닉네임</p>
          <input
            title="닉네임"
            placeholder="닉네임을 입력해주세요"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p>전화번호</p>
          <input
            title="전화번호"
            placeholder="전화번호를 입력해주세요"
            value={userNum}
            onChange={(e) => setUserNum(e.target.value)}
          />
          <p>전화번호 형식은 010-0000-0000입니다</p>
        </InputFormSection>
        <ButtonSection>
          <SignUpBtn onClick={submitForm}>회원가입</SignUpBtn>
          <GoBackBtn onClick={() => navigate(-1)}>뒤로가기</GoBackBtn>
        </ButtonSection>
      </SignUpSection>
    </SignUpPageWrapper>
  );
};

export default SignUp;

const SignUpPageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #ebebeb;
`;

const SignUpSection = styled.div`
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 35rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`;

const InputFormSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SignUpBtn = styled.button`
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

const GoBackBtn = styled.button`
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

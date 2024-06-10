import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Join = () => {
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
    <JoinPageWrapper>
      <JoinBox>
        <Title>🎧 이지민 팬클럽 가입하기 🎧</Title>
        <InputSection>
          <InputText>ID</InputText>
          <Input
            placeholder="ID를 입력해주세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </InputSection>
        <InputSection>
          <InputText>비밀번호</InputText>
          <InputWrapper>
            <Input
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <WarningText>
              비밀번호는 8자 이상으로 숫자, 특수 문자, 영문이 포함되어야 합니다.
            </WarningText>
          </InputWrapper>
        </InputSection>
        <InputSection>
          <InputText>닉네임</InputText>
          <Input
            placeholder="닉네임을 입력해주세요"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </InputSection>
        <InputSection>
          <InputText>전화번호</InputText>
          <InputWrapper>
            <Input
              placeholder="전화번호를 입력해주세요"
              value={userNum}
              onChange={(e) => setUserNum(e.target.value)}
            />
            <WarningText>전화번호 형식은 010-0000-0000입니다.</WarningText>
          </InputWrapper>
        </InputSection>
        <BtnSection>
          <Btn onClick={() => navigate(-1)}>뒤로가기</Btn>
          <Btn onClick={submitForm}>가입하기</Btn>
        </BtnSection>
      </JoinBox>
    </JoinPageWrapper>
  );
};

export default Join;

const JoinPageWrapper = styled.div`
  background-color: #fff4dc;
`;

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 2rem;
  box-shadow: 1px 1px 20px lightgray;
  width: 30rem;
  height: 40rem;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 800;
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputText = styled.p`
  font-size: 12px;
  font-weight: 600;
`;

const Input = styled.placeholder`
  background-color: white;
  border: 1px solid black;
  border-radius: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const WarningText = styled.p`
  font-size: 7px;
  font-weight: 200;
  color: gray;
`;

const BtnSection = styled.span`
  width: 20rem;
  gap: 5rem;
  display: flex;
`;

const Btn = styled.button`
  width: 8rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: black;
  color: white;
  align-items: center;
  align-content: center;
  font-size: 8px;
  font-weight: 400;
`;

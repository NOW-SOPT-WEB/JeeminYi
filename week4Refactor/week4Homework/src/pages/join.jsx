import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatPhoneNumber } from "../utils/utils";

const Join = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userNum, setUserNum] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChangePhoneNumber = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setUserNum(formattedNumber);
  };

  const submitForm = async () => {
    const newErrors = {};

    if (userId === "") {
      newErrors.userId = "id를 입력해주세요";
    }

    if (password === "") {
      newErrors.password = "비밀번호를 입력해주세요";
    }

    if (userName === "") {
      newErrors.userName = "닉네임을 입력해주세요";
    }

    if (userNum === "") {
      newErrors.userNum = "전화번호를 입력해주세요";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const postJoinData = await axios.post(
          `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
          {
            authenticationId: userId,
            password: password,
            nickname: userName,
            phone: userNum,
          }
        );
        console.log(postJoinData);
        alert("회원가입 완룡!");
        navigate("/LogIn");
      } catch (error) {
        alert(error.response?.data.message);
        console.error("회원가입 실패");
      }
    } else {
      const firstErrorAlert = Object.keys(newErrors)[0];
      alert(newErrors[firstErrorAlert]);
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
            className={`input-field ${errors.userId ? "error" : ""}`}
          />
        </InputSection>
        <InputSection>
          <InputText>비밀번호</InputText>
          <Input
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`input-field ${errors.password ? "error" : ""}`}
          />
        </InputSection>
        <WarningText>
          비밀번호는 8자 이상으로 숫자, 특수 문자, 영문이 포함되어야 합니다.
        </WarningText>
        <InputSection>
          <InputText>닉네임</InputText>
          <Input
            placeholder="닉네임을 입력해주세요"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={`input-field ${errors.userName ? "error" : ""}`}
          />
        </InputSection>
        <InputSection>
          <InputText>전화번호</InputText>
          <Input
            placeholder="전화번호를 입력해주세요"
            value={userNum}
            onChange={handleChangePhoneNumber}
            className={`input-field ${errors.userNum ? "error" : ""}`}
          />
        </InputSection>
        <WarningText>전화번호 형식은 010-0000-0000입니다.</WarningText>
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
  background-color: #fffbe9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const JoinBox = styled.div`
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
  margin-bottom: 5rem;
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
  &:invalid {
    border-color: gray;
  }

  &:focus:invalid {
    outline-color: #000000;
  }
  &.input-field.error {
    border-color: red;
  }
`;

const WarningText = styled.p`
  font-size: 7.3px;
  font-weight: 400;
  color: blue;
  width: 30rem;
  padding-left: 10rem;
  text-align: start;
`;

const BtnSection = styled.span`
  width: 20rem;
  gap: 3rem;
  display: flex;
  margin-top: 8rem;
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

import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { validatePassword } from "../utils/utils";

const My = () => {
  //페이지 이동
  const navigate = useNavigate();
  //memberId를 useParams로 받아오기
  const { memberId } = useParams();
  //member 정보 관리하는 state
  const [memberInfo, setMemberInfo] = useState({
    authenticationId: "",
    nickname: "",
    phone: "",
  });
  const { authenticationId, nickname, phone } = memberInfo;
  //비밀번호 토글 오픈 여부
  const [isOpenChangePw, setIsOpenChangePw] = useState(false);
  //비밀번호 input 관리
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerification, setNewPasswordVerification] = useState("");
  //비밀번호 변경 함수
  const handleChangepreviousPassword = (e) => {
    setPreviousPassword(e.target.value);
  };
  // 새 비밀번호 input 변경
  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  // 새 비밀번호 확인 input 변경
  const handleChangenewPasswordVerification = (e) => {
    setNewPasswordVerification(e.target.value);
  };
  // 비밀번호 변경 모달 토글
  const handleClickToggle = () => {
    setIsOpenChangePw((prev) => !prev);
  };
  //비밀번호 변경 버튼 클릭
  const handleClickChangePassword = async () => {
    if (!previousPassword || !newPassword || !newPasswordVerification) {
      alert("모든 항목을 입력해주세요!");
      return;
    }
    //새 비밀번호 & 새 비밀번호 확인이 일치하지 않을 경우
    if (!validatePassword(newPassword)) {
      alert("비밀번호가 일치하지 않습니다🥲");
      return;
    }
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_APP_BASE_URL}/member/password`,
        {
          previousPassword: previousPassword,
          newPassword: newPassword,
          newPasswordVerification: newPasswordVerification,
        },
        {
          headers: { memberId },
        }
      );
      console.log(response);
      alert("비밀번호 변경이 완료되었습니다.");
    } catch (error) {
      alert(error.response?.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const memberInfoData = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/member/info`,
          { headers: { memberId } }
        );
        console.log(memberInfoData);

        setMemberInfo(memberInfoData.data.data);
        console.log({ memberInfo });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [memberId]);

  return (
    <MyPageWrapper>
      <MyBox>
        <Title>🎧 마이페이지 🎧</Title>
        <InputSection>
          <InputText>ID</InputText>
          <UserData>{authenticationId}</UserData>
        </InputSection>
        <InputSection>
          <InputText>닉네임</InputText>
          <UserData>{nickname}</UserData>
        </InputSection>
        <InputSection>
          <InputText>전화번호</InputText>
          <UserData>{phone}</UserData>
        </InputSection>
        <ChangeSection>
          <Button onClick={handleClickToggle}>
            비밀번호 변경
            <span className="material-symbols-outlined">stat_1</span>
          </Button>
          {isOpenChangePw && (
            <ChangeInputSection>
              <Input
                placeholder="기존 비밀번호"
                value={previousPassword}
                onChange={handleChangepreviousPassword}
              />
              <Input
                placeholder="새로운 비밀번호"
                value={newPassword}
                onChange={handleChangeNewPassword}
              />
              <Input
                placeholder="새로운 비밀번호 확인"
                value={newPasswordVerification}
                onChange={handleChangenewPasswordVerification}
              />
              <Btn onClick={handleClickChangePassword}>비밀번호 변경</Btn>
            </ChangeInputSection>
          )}
        </ChangeSection>
        <Btn onClick={() => navigate("/Main")}>홈으로</Btn>
      </MyBox>
    </MyPageWrapper>
  );
};

export default My;

const MyPageWrapper = styled.div`
  background-color: #fffbe9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const MyBox = styled.div`
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

const UserData = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

//토글 영역
const ChangeSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangeInputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Button = styled.button`
  height: 5rem;
  color: black;
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 0.5rem;
  height: 3rem;
  width: 20rem;
  padding-left: 0.5rem;
`;

//하단 버튼 영역
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

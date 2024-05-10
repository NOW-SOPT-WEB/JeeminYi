import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpPageWrapper, SignUpSection, Title } from "./SignUpStyle";

function getInfo = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userNum, setUserNum] = useState("");

    const navigate = useNavigate();

    const submitForm = () => {
        try {
            const postData = await axios.post(
                `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
                {
                    "authenticationId" : userId,
                    "password" : password, 
                    "nickname" : userName,
                    "phone" : userNum,
                }
            );
            console.log(postData);
        }
    };
    return (
    <SignUpPageWrapper>
            <SignUpSection>
                <Title>팬클럽 회원가입하기</Title>
                <InputFormSection>
                    <Input
                        type="text"
                        title="ID"
                        placeholder="ID를 입력해주세요"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <Input
                        type="text"
                        title="PW"
                        placeholder="비밀번호를 입력해주세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        text="비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다"
                    />
                    <Input
                        type="text"
                        title="닉네임"
                        placeholder="닉네임을 입력해주세요"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="전화번호를 입력해주세요"
                        value={userNum}
                        onChange={(e) => setUserNum(e.target.value)}
                        text="전화번호 형식은 010-0000-0000입니다"
                    />
                </InputFormSection>
                <ButtonSection>
                    <SignUpBtn type="button" onClick={submitForm}>
                        회원가입
                    </SignUpBtn>
                    <GoBackBtn type="button" onClick={() => navigate(-1)}>
                        뒤로가기
                    </GoBackBtn>
                </ButtonSection>
            </SignUpSection>
        </SignUpPageWrapper>
    );
}

export default getInfo;


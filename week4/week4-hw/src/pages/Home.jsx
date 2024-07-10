import jeemin from "../assets/image/jeemin.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <HomePageWrapper>
      <ImgSection>
        <img className="jeemin" src={jeemin} alt="jeemin-Img" />
      </ImgSection>
      <ButtonSection>
        <MyInfoBtn type="button" onClick={() => navigate("/LogIn")}>
          내 정보
        </MyInfoBtn>
        <SignUpBtn type="button" onClick={() => navigate("/SignUp")}>
          회원가입
        </SignUpBtn>
      </ButtonSection>
    </HomePageWrapper>
  );
};

export default Home;

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgSection = styled.div`
  display: flex;
  margin: 0 auto;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MyInfoBtn = styled.button`
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

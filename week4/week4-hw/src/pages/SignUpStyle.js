import theme from "../stylesheet/theme";
import styled from "styled-components";

export const SignUpPageWrapper = styled.main`
    width: 100%;
    height: 100vh;
    background-color: black;
`;

export const SignUpSection = styled.div`
    border-radius: 2rem;
    color: ${({ theme }) => theme.colors.black};
    position: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    text-align: center;
    justify-content: center;
    font-size: 2rem;
`;


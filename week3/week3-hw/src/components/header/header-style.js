import styled from "styled-components";
import theme from "../../stylesheet/theme";

const HeaderSection = styled.header`
  width: 100%;
  height: 8rem;
  margin: 0;
  background-color: ${theme.colors.toasterDarkOrange};
  text-align: center;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  font-family: "Pretendard-Regular";
  .HeaderTitle {
    color: white;
    font-size: 1.7rem;
    font-weight: 800;
    margin-top: 2rem;
  }
  .HeaderScore {
    color: white;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  .ResetButton {
    position: absolute;
    top: 20%;
    right: 1rem;
  }
`;
export default HeaderSection;

import { DefaultHeader } from "../components/header";
import { MainWrapper } from "../components/mainWrapper";
import { useState } from "react";

export const DefaultPage = () => {
  //'처음으로' 버튼 렌더링
  const [isBtnClick, setIsBtnClick] = useState(false);
  //'시작하기' 버튼 클릭
  const onClickStartBtn = () => {
    setIsBtnClick(!isBtnClick);
  };
  return (
    <>
      <DefaultHeader isBtnClick={isBtnClick} />
      <MainWrapper onClickStartBtn={onClickStartBtn} />
    </>
  );
};

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
  //라운드 상태 관리
  const [step, setStep] = useState("first"); //fisrt: <FirstRound /> secondOne : <SecondRoundRecomm /> secondTwo : <SecondRoundRandom /> third : <ThirdRound />
  return (
    <>
      <DefaultHeader isBtnClick={isBtnClick} step={step} setStep={setStep} />
      <MainWrapper
        onClickStartBtn={onClickStartBtn}
        step={step}
        setStep={setStep}
      />
    </>
  );
};

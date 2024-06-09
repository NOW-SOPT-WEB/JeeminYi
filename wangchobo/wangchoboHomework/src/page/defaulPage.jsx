import { DefaultHeader } from "../components/header";
import { MainWrapper } from "../components/mainWrapper";
import { useState } from "react";

export const DefaultPage = () => {
  //라운드 상태 관리
  const [step, setStep] = useState("first");
  //fisrt: <FirstRound /> secondOne : <SecondRoundRecomm /> secondTwo : <SecondRoundRandom /> third : <ThirdRound />

  return (
    <>
      <DefaultHeader step={step} setStep={setStep} />
      <MainWrapper step={step} setStep={setStep} />
    </>
  );
};

import DefaultHeader from "../components/DefaultHeader";
import MainWrapper from "../components/MainWrapper";
import { useState } from "react";

export const DefaultPage = () => {
  //라운드 상태 관리
  const [step, setStep] = useState("first");
  //fisrt: <FirstRound /> secondRecom, : <SecondRoundRecomm /> secondRandom : <SecondRoundRandom /> third : <ThirdRound />

  // const handleStep = () => {
  //   setStep();
  // };

  return (
    <>
      <DefaultHeader step={step} setStep={setStep} />
      <MainWrapper step={step} setStep={setStep} />
    </>
  );
};

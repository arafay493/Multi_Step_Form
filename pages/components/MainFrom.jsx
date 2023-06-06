import React, { useState } from "react";
import MainFieldForm from "./Field_Form/MainFieldForm";
import MainDetailsForm from "./Details_Form/MainDetailsForm";

const MainFrom = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step < 3 ? (
        <MainFieldForm setStep={setStep} step={step} />
      ) : (
        <MainDetailsForm setStep={setStep} step={step} />
      )}
    </div>
  );
};

export default MainFrom;

import React from "react";
import Select_Field from "./Select_Field";
import Select_Location from "./Select_Location";

const MainFieldForm = ({step , setStep}) => {
  return (
    <div className="h-[120vh] p-5">
      {(step === 1) && <Select_Location setStep={setStep} step= {step}/>}
      {(step === 2) && <Select_Field setStep={setStep} step= {step}/>}
    </div>
  );
};

export default MainFieldForm;

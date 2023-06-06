import React from "react";

const DisplayData = ({ step, setStep }) => {
  return (
    <>
      <button onClick={() => setStep(step - 1)} className="underline font-medium text-lg text-blue-700 m-10">Go Back to Edit Your Form</button>
    </>
  );
};

export default DisplayData;

import React from 'react'
import Details1 from './Details1'
import Details2 from './Details2'
import Details3 from './Details3'
import DisplayData from './DisplayData'

const MainDetailsForm = ({step , setStep}) => {
  return (
    <div className={`${(step === 6)?"h-[100vh]":"h-[180vh]"} lg:h-[150vh] bg-cover bg-no-repeat bg-center`} style={{backgroundImage: "url('/images/ZIMOCAREERSLogo.png')", backgroundSize: "400px 200px"}}>
        {(step === 3) && <Details1 setStep={setStep} step={step}/>}
        {(step === 4) && <Details2 setStep={setStep} step={step}/>}
        {(step === 5) && <Details3 setStep={setStep} step={step}/>}
        {(step === 6) && <DisplayData setStep={setStep} step={step}/>}
    </div>
  )
}

export default MainDetailsForm
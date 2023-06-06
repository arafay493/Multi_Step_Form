import React, { useState, useEffect } from "react";
import Header2 from "../Header2";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { setDetails3 } from "@/store/slices/userDetails";
const Details3 = ({ step, setStep }) => {
  const [data, setData] = useState({
    qualification: "",
    year_completion: "",
    university: "",
    experience: "",
    employment_status: "",
  });
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.details);
  console.log(selector);
  useEffect(() => {
    if (selector) {
      console.log(selector);
      setData(selector);
    }
  }, [selector]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const {
      qualification,
      year_completion,
      university,
      experience,
      employment_status,
    } = data;
    e.preventDefault();
    setStep(step + 1);
    dispatch(
      setDetails3({
        qualification,
        year_completion,
        university,
        experience,
        employment_status,
      })
    );
  };
  return (
    <div
      className="flex flex-col justify-between h-full select-none backdrop-blur-sm p-5"
      style={{ backgroundColor: "#fff", backgroundSize: "100% 100%" }}
    >
      <Header2 step={step} />
      <form
        className="w-full lg:w-[800px] rounded-2xl m-auto relative"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 justify-between items-center mb-10 ">
          <div className="text-center text-3xl flex flex-col gap-5 font-light mb-5">
            <p>{selector.email}</p>
            <p>{selector.firstName} {selector.lastName}</p>
          </div>
          <select
            name="qualification"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px]"
            onChange={handleChange}
            value={data.qualification}
          >
            <option value="" className="" selected="">
              QUALIFICATION(S)
            </option>
            <option value="BA" className="uppercase">
              BA
            </option>
            <option value="BBA" className="uppercase">
              BBA
            </option>
            <option value="BSCS" className="uppercase">
              BSCS
            </option>
            <option value="BSSE" className="uppercase">
              BSSE
            </option>
            <option value="BSIT" className="uppercase">
              BSIT
            </option>
            <option value="BFA" className="uppercase">
              BFA
            </option>
            <option value="BS. HONS." className="uppercase">
              BS. HONS.
            </option>
            <option value="ACCA" className="uppercase">
              ACCA
            </option>
            <option value="OTHER" className="uppercase">
              OTHER
            </option>
          </select>
          <select
            name="year_completion"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px]"
            onChange={handleChange}
            value={data.year_completion}
          >
            <option value="" selected="">
              YEAR OF COMPLETION
            </option>
            <option value="2023" className="uppercase">
              2023
            </option>
            <option value="2022" className="uppercase">
              2022
            </option>
            <option value="2021" className="uppercase">
              2021
            </option>
            <option value="2020" className="uppercase">
              2020
            </option>
            <option value="2019" className="uppercase">
              2019
            </option>
            <option value="2018" className="uppercase">
              2018
            </option>
            <option value="2017" className="uppercase">
              2017
            </option>
            <option value="2016" className="uppercase">
              2016
            </option>
            <option value="2015" className="uppercase">
              2015
            </option>
            <option value="2014" className="uppercase">
              2014
            </option>
            <option value="2013" className="uppercase">
              2013
            </option>
            <option value="2012" className="uppercase">
              2012
            </option>
            <option value="2011" className="uppercase">
              2011
            </option>
            <option value="2010" className="uppercase">
              2010
            </option>
          </select>
          <input
            name="university"
            type="text"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="University"
            onChange={handleChange}
            value={data.university}
          />
          <select
            name="experience"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px]"
            onChange={handleChange}
            value={data.experience}
          >
            <option value="" selected="">
              EXPERIENCE
            </option>
            <option value="NO EXPERIENCE" className="uppercase">
              NO EXPERIENCE
            </option>
            <option value="LESS THAN 1 Year" className="uppercase">
              LESS THAN 1 YEAR
            </option>
            <option value="1 YEARS" className="uppercase">
              1 YEARS
            </option>
            <option value="2 YEARS" className="uppercase">
              2 YEARS
            </option>
            <option value="3 YEARS" className="uppercase">
              3 YEARS
            </option>
            <option value="4 YEARS" className="uppercase">
              4 YEARS
            </option>
            <option value="5 YEARS" className="uppercase">
              5 YEARS
            </option>
            <option value="6 YEARS" className="uppercase">
              6 YEARS
            </option>
            <option value="7 YEARS" className="uppercase">
              7 YEARS
            </option>
            <option value="MORE THAN 7 YEARS" className="uppercase">
              MORE THAN 7 YEARS
            </option>
          </select>
          <select
            name="employment_status"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px]"
            onChange={handleChange}
            value={data.employment_status}
          >
            <option value="" selected="">
              CURRENT EMPLOYMENT STATUS
            </option>
            <option value="STUDENT" className="uppercase">
              STUDENT
            </option>
            <option value="UNEMPLOYED" className="uppercase">
              UNEMPLOYED
            </option>
            <option value="PART TIME" className="uppercase">
              EMPLOYED (PART TIME)
            </option>
            <option value="FULL TIME" className="uppercase">
              EMPLOYED (FULL TIME)
            </option>
            <option value="INTERNSHIP" className="uppercase">
              EMPLOYED (INTERNSHIP)
            </option>
            <option value="OTHER" className="uppercase">
              OTHER
            </option>
          </select>
          {/* <input
            name="CV"
            type="file"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="CV / Resume"
          /> */}
          {/* <p className="tracking-[2px] md:tracking-[0px] text-[14px] text-center text-[#737373] uppercase">
            UPLOAD YOUR Résumé IN ENGLISH AS DOCX OR PDF ONLY.
          </p> */}
        </div>
        {/* Next Button */}
        <button
          className="uppercase  absolute right-10 lg:-right-[4rem] -bottom-[4rem] lg:bottom-10 block rounded-lg bg-black text-white w-24 h-24"
          type="submit"
        >
          Submit
        </button>

        {/* Back Button */}
        <button
          className="uppercase  absolute left-10 lg:-left-[4rem] -bottom-[4rem] lg:bottom-10 block rounded-lg bg-black text-white w-24 h-24"
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Details3;

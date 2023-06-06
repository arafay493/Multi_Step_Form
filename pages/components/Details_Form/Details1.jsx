import React, { useState, useEffect } from "react";
import Header2 from "../Header2";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { setDetails1 } from "@/store/slices/userDetails";

const Details1 = ({ step, setStep }) => {
  const [data, setData] = useState({
    email: "",
    confirmEmail: "",
    firstName: "",
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    countryCode: "",
  });
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.details);
  useEffect(() => {
    if (selector) {
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
    e.preventDefault();
    setStep(step + 1);
    dispatch(setDetails1(data));
  };
  return (
    <div
      className="flex flex-col justify-between h-full select-none backdrop-blur-sm p-5"
      style={{ backgroundColor: "#fff", backgroundSize: "100% 100%" }}
    >
      <Header2 />
      <form className="w-full lg:w-[800px] rounded-2xl m-auto relative" onSubmit={handleSubmit}>
        <div
          className="flex flex-col gap-2 justify-between items-center my-10"
        >
          <input
            name="email"
            type="email"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="Email Address"
            onChange={handleChange}
            value={data.email}
          />
          <input
            name="confirmEmail"
            type="email"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="Confirm Email Address"
            onChange={handleChange}
            value={data.confirmEmail}
          />
          {data.email !== data.confirmEmail && (
            <span className="text-xs text-red-600">
              Email and Confirm Email are not same
            </span>
          )}
          <input
            name="firstName"
            type="text"
            required
            id="email"
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            onChange={handleChange}
            value={data.firstName}
            placeholder="First Name"
          />
          <span className="text-sm text-center">
            Use your legal name as it appears on your official documents
          </span>
          <input
            name="lastName"
            type="text"
            required
            id="email"
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            onChange={handleChange}
            value={data.lastName}
            placeholder="Last Name ( Including Miiddle Name)"
          />
          <input
            name="dob"
            type="date"
            required
            id="email"
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black placeholder:uppercase px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            onChange={handleChange}
            value={data.dob}
          />
          <input
            name="country"
            type="text"
            required
            id="email"
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56] select-none"
            onChange={handleChange}
            placeholder="Country"
            readOnly
            disabled
            value={selector.country}
          />
          <div className="flex gap-2 w-full md:w-[500px]">
            <select
              name="countryCode"
              className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-[100px] md:w-[150px]"
              onChange={handleChange}
              value={data.countryCode}
            >
              <option value="">code</option>
              <option value="+92">+92</option>
              <option value="+91">+91</option>
            </select>
            <input
              name="phone"
              type="text"
              required
              className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full focus:border-[#BE9F56]"
              placeholder="Phone Number"
              onChange={handleChange}
              value={data.phone}
            />
          </div>
        </div>
        {/* Next Button */}
        <button
          className="uppercase  absolute right-10 lg:-right-[4rem] -bottom-[4rem] lg:bottom-10 block rounded-lg bg-black text-white w-24 h-24"
          type="submit"
        >
          Continue
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

export default Details1;

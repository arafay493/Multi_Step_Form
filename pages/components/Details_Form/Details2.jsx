import React, { useState, useEffect } from "react";
import Header2 from "../Header2";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { setDetails2 } from "@/store/slices/userDetails";
const Details2 = ({ step, setStep }) => {
  const [data, setData] = useState({
    cnic: "",
    address1: "",
    address2: "",
    city: "",
    region: "",
    zip_code: "",
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
    const {cnic , address1 ,address2 , city , region , zip_code} = data
    e.preventDefault();
    setStep(step + 1);
    dispatch(setDetails2({cnic , address1 ,address2 , city , region , zip_code}));
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
        <div className="flex flex-col gap-2 justify-between items-center my-10 ">
          <div className="text-center text-3xl flex flex-col gap-5 font-light mb-5">
            <p>{selector.email}</p>
            <p>{selector.firstName + " " + selector.lastName}</p>
          </div>
          <input
            name="cnic"
            type="number"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56] appearance-none"
            placeholder="National Identity card (CNIC)"
            onChange={handleChange}
            value={data.cnic}
          />
          <input
            name="address1"
            type="text"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="Address 1"
            onChange={handleChange}
            value={data.address1}
          />
          <input
            name="address2"
            type="text"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="Address 2 (Apartment, Suite, ETC."
            onChange={handleChange}
            value={data.address2}
          />
          <input
            name="city"
            type="text"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="City"
            onChange={handleChange}
            value={data.city}
          />
          <input
            name="region"
            type="text"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black placeholder:uppercase px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="State / Region"
            onChange={handleChange}
            value={data.region}
          />
          <input
            name="zip_code"
            type="text"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="Zip Code / Post Code"
            onChange={handleChange}
            value={data.zip_code}
          />
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

export default Details2;

import React, { useState , useEffect} from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer";
import { setField } from "@/store/slices/userDetails";

const Select_Field = ({step , setStep}) => {
  const [data, setData] = useState({
    field: ""
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
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(step + 1)
    dispatch(setField(data));
  };
  return (
    <div className="flex flex-col justify-between h-full select-none">
      <p className="tracking-[3px] text-xl">Apply</p>
      <form className="border border-[#BE9F56] w-full lg:w-[800px] rounded-2xl m-auto relative" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 justify-between items-center my-10 px-10">
          <p className="uppercase tracking-[2px] mb-0">Start you Application</p>
          <div>
            <Image
              src="/images/ZIMOCAREERSLogo.png"
              width={200}
              height={50}
              alt="Picture of the author"
              className="md:w-[250px]"
            />
          </div>
          <select
            name="field"
            className="border-2 rounded-lg focus:border-[#BE9F56] px-3 py-2 lg:text-lg tracking-[4px] w-full lg:w-[400px] text-center outline-none ring-0"
            onChange={handleChange}
            value={data.field}
            required
          >
            <option value="" selected="">
              CHOOSE YOUR ROLE (FIELD)
            </option>
            <option value="Project Coordinator">Project Coordinator</option>
            <option value="Frontend Next Js">Frontend Next Js</option>
            <option value="Backend Laravel &amp; Node js">
              Backend Laravel &amp; Node js
            </option>
            <option value="Devops Engineer">Devops Engineer</option>
            <option value="React Native Developer">
              React Native Developer
            </option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="SEO Expert">SEO Expert</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Video Editor &amp; Animation">
              Video Editor &amp; Animation
            </option>
            <option value="Social Media Manager">Social Media Manager</option>
            <option value="CYBER SECURITY">CYBER SECURITY</option>
            <option value="UNITY 3D DEVELOPER">UNITY 3D DEVELOPER</option>
            <option value="UNREAL ENGINE EXPERT ">UNREAL ENGINE EXPERT </option>
          </select>
        </div>
        {/* Next Button */}
        <button className="uppercase  absolute right-10 lg:-right-[4rem] -bottom-[3.5rem] lg:bottom-10 block rounded-lg bg-black text-white p-7 lg:p-10" type="submit">
          Apply
        </button>

        {/* Back Button */}
        <button className="uppercase  absolute left-10 lg:-left-[4rem] -top-[3.5rem] lg:top-10 block rounded-lg bg-black text-white p-7 lg:p-10" onClick={() => setStep(step - 1)}>
          Back
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Select_Field;

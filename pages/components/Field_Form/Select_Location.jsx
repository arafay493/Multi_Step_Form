import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "@/store/slices/userDetails";
import Footer from "../Footer";
const Select_Location = ({ step, setStep }) => {
  const [data, setData] = useState({
    country: "",
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
      [name]: value,
    });
    // dispatch(setDetails({
    //   ...selector,
    //   [name] : value
    // }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
    dispatch(setCountry(data));
    // setData(selector.country)
  };

  return (
    <div className="flex flex-col justify-between h-full select-none">
      <p className="tracking-[3px] text-xl">Apply</p>
      <form
        className="border border-[#BE9F56] w-full lg:w-[800px] rounded-2xl m-auto relative"
        onSubmit={handleSubmit}
      >
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
            name="country"
            className="border-2 rounded-lg focus:border-[#BE9F56] px-3 py-2 lg:text-lg tracking-[4px] w-full lg:w-[400px] text-center outline-none ring-0"
            onChange={handleChange}
            value={data.country}
            required
          >
            <option className="text-center" value="" selected="">
              SELECT YOUR COUNTRY
            </option>
            <option className="text-center " value="United Kingdom">
              United Kingdom
            </option>
            <option className="text-center " value="United States">
              United States
            </option>
            <option className="text-center " value="Pakistan">
              Pakistan
            </option>
            <option className="text-center " value="India">
              India
            </option>
            <option className="text-center " value="Algeria">
              Algeria
            </option>
            <option className="text-center " value="Argentina">
              Argentina
            </option>
            <option className="text-center " value="Australia">
              Australia
            </option>
            <option className="text-center " value="Austria">
              Austria
            </option>
            <option className="text-center " value="Bahamas">
              Bahamas
            </option>
            <option className="text-center " value="Bahrain">
              Bahrain
            </option>
            <option className="text-center " value="Bangladesh">
              Bangladesh
            </option>
            <option className="text-center " value="Barbodos">
              Barbodos
            </option>
            <option className="text-center " value="Belgium">
              Belgium
            </option>
            <option className="text-center " value="Belize">
              Belize
            </option>
            <option className="text-center " value="Brazil">
              Brazil
            </option>
            <option className="text-center " value="British Virgin Islands">
              British Virgin Islands
            </option>
            <option className="text-center " value="Bulgaria">
              Bulgaria
            </option>
            <option className="text-center " value="Cameroon">
              Cameroon
            </option>
            <option className="text-center " value="Canada">
              Canada
            </option>
            <option className="text-center " value="Cayman Islands">
              Cayman Islands
            </option>
            <option className="text-center " value="Channel Islands">
              Channel Islands
            </option>
            <option className="text-center " value="Chile">
              Chile
            </option>
            <option className="text-center " value="China">
              China
            </option>
            <option className="text-center " value="Comoros">
              Comoros
            </option>
            <option className="text-center " value="Costa Rica">
              Costa Rica
            </option>
            <option className="text-center " value="Croatia">
              Croatia
            </option>
            <option className="text-center " value="Cyprus">
              Cyprus
            </option>
            <option className="text-center " value="Czechia">
              Czechia
            </option>
            <option className="text-center " value="Denmark">
              Denmark
            </option>
            <option className="text-center " value="Dominican Republic">
              Dominican Republic
            </option>
            <option className="text-center " value="Egypt, Arab Rep.">
              Egypt, Arab Rep.
            </option>
            <option className="text-center " value="Finland">
              Finland
            </option>
            <option className="text-center " value="France">
              France
            </option>
            <option className="text-center " value="Gabon">
              Gabon
            </option>
            <option className="text-center " value="Georgia">
              Georgia
            </option>
            <option className="text-center " value="Germany">
              Germany
            </option>
            <option className="text-center " value="Ghana">
              Ghana
            </option>
            <option className="text-center " value="Gibraltar">
              Gibraltar
            </option>
            <option className="text-center " value="Greece">
              Greece
            </option>
            <option className="text-center " value="Greenland">
              Greenland
            </option>
            <option className="text-center " value="Hong Kong">
              Hong Kong
            </option>
            <option className="text-center " value="Hungary">
              Hungary
            </option>
            <option className="text-center " value="Iceland">
              Iceland
            </option>
            <option className="text-center " value="India">
              India
            </option>
            <option className="text-center " value="Indonesia">
              Indonesia
            </option>
            <option className="text-center " value="Ireland">
              Ireland
            </option>
            <option className="text-center " value="Isle of Man">
              Isle of Man
            </option>
            <option className="text-center " value="Israel">
              Israel
            </option>
            <option className="text-center " value="Italy">
              Italy
            </option>
            <option className="text-center " value="Jamaica">
              Jamaica
            </option>
            <option className="text-center " value="Japan">
              Japan
            </option>
            <option className="text-center " value="Jordan">
              Jordan
            </option>
            <option className="text-center " value="Kazakhstan">
              Kazakhstan
            </option>
            <option className="text-center " value="Kenya">
              Kenya
            </option>
            <option className="text-center " value="Kuwait">
              Kuwait
            </option>
            <option className="text-center " value="Latvia">
              Latvia
            </option>
            <option className="text-center " value="Lebanon">
              Lebanon
            </option>
            <option className="text-center " value="Liechtenstein">
              Liechtenstein
            </option>
            <option className="text-center " value="Lithuania">
              Lithuania
            </option>
            <option className="text-center " value="Luxembourg">
              Luxembourg
            </option>
            <option className="text-center " value="Macao">
              Macao
            </option>
            <option className="text-center " value="Malaysia">
              Malaysia
            </option>
            <option className="text-center " value="Maldives">
              Maldives
            </option>
            <option className="text-center " value="Malta">
              Malta
            </option>
            <option className="text-center " value="Mauritius">
              Mauritius
            </option>
            <option className="text-center " value="Mexico">
              Mexico
            </option>
            <option className="text-center " value="Moldova">
              Moldova
            </option>
            <option className="text-center " value="Monaco">
              Monaco
            </option>
            <option className="text-center " value="Morocco">
              Morocco
            </option>
            <option className="text-center " value="Mozambique">
              Mozambique
            </option>
            <option className="text-center " value="Nepal">
              Nepal
            </option>
            <option className="text-center " value="Netherlands">
              Netherlands
            </option>
            <option className="text-center " value="New Zealand">
              New Zealand
            </option>
            <option className="text-center " value="Nigeria">
              Nigeria
            </option>
            <option className="text-center " value="Norway">
              Norway
            </option>
            <option className="text-center " value="Oman">
              Oman
            </option>
            <option className="text-center " value="Pakistan">
              Pakistan
            </option>
            <option className="text-center " value="Panama">
              Panama
            </option>
            <option className="text-center " value="Paraguay">
              Paraguay
            </option>
            <option className="text-center " value="Peru">
              Peru
            </option>
            <option className="text-center " value="Philippines">
              Philippines
            </option>
            <option className="text-center " value="Poland">
              Poland
            </option>
            <option className="text-center " value="Portugal">
              Portugal
            </option>
            <option className="text-center " value="Puerto Rico">
              Puerto Rico
            </option>
            <option className="text-center " value="Qatar">
              Qatar
            </option>
            <option className="text-center " value="Romania">
              Romania
            </option>
            <option className="text-center " value="San Marino">
              San Marino
            </option>
            <option className="text-center " value="Saudi Arabia">
              Saudi Arabia
            </option>
            <option className="text-center " value="Senegal">
              Senegal
            </option>
            <option className="text-center " value="Serbia">
              Serbia
            </option>
            <option className="text-center " value="Seychelles">
              Seychelles
            </option>
            <option className="text-center " value="Singapore">
              Singapore
            </option>
            <option className="text-center " value="Sint Maarten (Dutch part)">
              Sint Maarten (Dutch part)
            </option>
            <option className="text-center " value="Slovak Republic">
              Slovak Republic
            </option>
            <option className="text-center " value="Slovenia">
              Slovenia
            </option>
            <option className="text-center " value="Somalia">
              Somalia
            </option>
            <option className="text-center " value="South Africa">
              South Africa
            </option>
            <option className="text-center " value="South Korea">
              South Korea
            </option>
            <option className="text-center " value="Spain">
              Spain
            </option>
            <option className="text-center " value="Sri Lanka">
              Sri Lanka
            </option>
            <option className="text-center " value="St. Kitts and Nevis">
              St. Kitts and Nevis
            </option>
            <option className="text-center " value="St. Lucia">
              St. Lucia
            </option>
            <option className="text-center " value="St. Martin (French part)">
              St. Martin (French part)
            </option>
            <option
              className="text-center "
              value="St. Vincent and the Grenadines"
            >
              St. Vincent and the Grenadines
            </option>
            <option className="text-center " value="Sweden">
              Sweden
            </option>
            <option className="text-center " value="Switzerland">
              Switzerland
            </option>
            <option className="text-center " value="Thailand">
              Thailand
            </option>
            <option className="text-center " value="The Gambia">
              The Gambia
            </option>
            <option className="text-center " value="Trinidad and Tobago">
              Trinidad and Tobago
            </option>
            <option className="text-center " value="Tunisia">
              Tunisia
            </option>
            <option className="text-center " value="Turkiye">
              Turkiye
            </option>
            <option className="text-center " value="Turkmenistan">
              Turkmenistan
            </option>
            <option className="text-center " value="Turks and Caicos Islands">
              Turks and Caicos Islands
            </option>
            <option className="text-center " value="Ukraine">
              Ukraine
            </option>
            <option className="text-center " value="United Arab Emirates">
              United Arab Emirates
            </option>
            <option className="text-center " value="United Kingdom">
              United Kingdom
            </option>
            <option className="text-center " value="United States">
              United States
            </option>
            <option className="text-center " value="Uruguay">
              Uruguay
            </option>
            <option className="text-center " value="Vietnam">
              Vietnam
            </option>
            <option className="text-center " value="Virgin Islands (U.S.)">
              Virgin Islands (U.S.)
            </option>
            <option className="text-center " value="Zambia">
              Zambia
            </option>
            <option className="text-center " value="Zimbabwe">
              Zimbabwe
            </option>
          </select>
        </div>
        {/* Next Button */}
        <button
          className="uppercase  absolute right-10 lg:-right-[4rem] -bottom-[3.5rem] lg:bottom-10 block rounded-lg bg-black text-white p-7 lg:p-10"
          type="submit"
        >
          Start
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Select_Location;

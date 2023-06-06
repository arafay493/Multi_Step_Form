import { createSlice } from "@reduxjs/toolkit";

// number: `${countryCode}${phone}`
const initialState = {
  field: "",
  country: "",
  email: "",
  confirmEmail: "",
  firstName: "",
  lastName: "",
  dob: "",
  countryCode: "",
  phone: "",
  cnic: "",
  address1: "",
  address2: "",
  city: "",
  region: "",
  zip_code: "",
  qualification: "",
  year_completion: "",
  university: "",
  experience: "",
  employment_status: ""
};
export const userDetail = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    // setDetails(state, action) {
    //   const [name] = Object.keys(action.payload);
    //   const [value] = Object.values(action.payload);
    //   // state = { ...state, ...action.payload };
    //   state[name] = value
    //   console.log({...state})
    //   // state = { ...state, [name]: value };
    //   // console.log({...state})
    // },
    setCountry(state, action) {
      const [country] = Object.keys(action.payload);
      const [value] = Object.values(action.payload);
      state[country] = value;
      // console.log({...state})
    },
    setField(state, action) {
      const [field] = Object.keys(action.payload);
      const [value] = Object.values(action.payload);
      state[field] = value;
    },
    setDetails1(state, action) {
      const [
        email,
        confirmEmail,
        firstName,
        lastName,
        dob,
        country,
        countryCode,
        phone,
      ] = Object.keys(action.payload);
      [
        state[email],
        state[confirmEmail],
        state[firstName],
        state[lastName],
        state[dob],
        state[country],
        state[countryCode],
        state[phone],
      ] = Object.values(action.payload);
    },
    setDetails2(state, action) {
      const [cnic, address1, address2, city, region, zip_code] = Object.keys(
        action.payload
      );
      [
        state[cnic],
        state[address1],
        state[address2],
        state[city],
        state[region],
        state[zip_code],
      ] = Object.values(action.payload);
    },
    setDetails3(state, action) {
      const [
        qualification,
        year_completion,
        university,
        experience,
        employment_status,
      ] = Object.keys(action.payload);
      [
        state[qualification],
        state[year_completion],
        state[university],
        state[experience],
        state[employment_status]
      ] = Object.values(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCountry, setField, setDetails1, setDetails2, setDetails3 } =
  userDetail.actions;

export default userDetail.reducer;

import { configureStore } from '@reduxjs/toolkit'
import userDetails from "./slices/userDetails"
// import allUserDetails from './slices/allUserDetails'
export const store = configureStore({
  reducer: {
    details: userDetails,
    // allDetails: allUserDetails
  },
})


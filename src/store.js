import { configureStore } from '@reduxjs/toolkit'
import reducer, { userSlice } from './Slices/userslice'



export const store = configureStore({
  reducer: {
    user: reducer,
    activeUser: userSlice
  },
})

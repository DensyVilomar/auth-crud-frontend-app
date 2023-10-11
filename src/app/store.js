import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/apiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,

    // APIs //

    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

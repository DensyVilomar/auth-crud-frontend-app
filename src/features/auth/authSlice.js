import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('accessToken'),
  refresh: localStorage.getItem('refreshToken'),
  user: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export default authSlice.reducer

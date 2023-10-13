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
  reducers: {
    setToken: (state, action) => {
      state.token = JSON.stringify(action.payload)
    },

    setRefresh: (state, action) => {
      state.token = JSON.stringify(action.payload)
    },

    setUserInfo: (state, action) => {
      state.user = JSON.stringify(action.payload)
    },

    logout: (state) => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('userInfo')
      state.token = null
      state.refresh = null
      state.user = null
    }
  }
})

export const { setToken, setRefresh, setUserInfo, logout } = authSlice.actions

export default authSlice.reducer

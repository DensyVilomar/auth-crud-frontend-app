import { apiSlice } from '../api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerData) => ({
        url: 'auth/users/',
        method: 'POST',
        body: registerData
      })
    }),

    activation: builder.mutation({
      query: (params) => ({
        url: 'auth/users/activation/',
        method: 'POST',
        body: params
      })
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/jwt/create/',
        method: 'POST',
        body: credentials
      })
    }),

    myInfo: builder.query({
      query: () => 'auth/users/me/'
    })
  })
})

export const {
  useRegisterMutation,
  useActivationMutation,
  useLoginMutation,
  useMyInfoQuery
} = authApiSlice

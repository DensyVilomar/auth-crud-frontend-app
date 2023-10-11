import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/',
  prepareHeaders: (headers) => {
    if (localStorage.getItem('accessToken')) {
      headers.set('authorization', `JWT ${localStorage.getItem('accessToken')}`)
    }
    return headers
  }
})

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery,
  endpoints: (builder) => ({})
})

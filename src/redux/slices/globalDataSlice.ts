import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  data: [],
  error: '' as string | undefined,
}

export const fetchGlobalData = createAsyncThunk('data/globalData', () => {
  return axios
    .get('https://api.covid19api.com/summary')
    .then((response) => response)
})

const globalDataSlice = createSlice({
  name: 'data/globalData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGlobalData.pending, (state) => {
      state.loading = true
    }),
      builder.addCase(fetchGlobalData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data.Global
        state.error = ''
      }),
      builder.addCase(fetchGlobalData.rejected, (state, action) => {
        state.loading = false
        state.data = []
        state.error = action.error.message
      })
  },
})

export default globalDataSlice.reducer

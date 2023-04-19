import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import globalDataReducer from '../slices/globalDataSlice'
import { RootState } from '.'

const store = configureStore({
  reducer: globalDataReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store

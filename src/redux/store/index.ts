import { combineReducers } from '@reduxjs/toolkit'
import globalDataReducer from '../slices/globalDataSlice'

const rootReducer = combineReducers({
  globalData: globalDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer

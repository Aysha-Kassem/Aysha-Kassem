import { configureStore } from '@reduxjs/toolkit'

// slice
import listSlice from './listSlice';

const store = configureStore({
  reducer: {listSlice}
})

export default store;
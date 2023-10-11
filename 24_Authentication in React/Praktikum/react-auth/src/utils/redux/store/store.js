import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../reducer/reducer'

export const store = configureStore({
  reducer: {
    product: productReducer
  }
})

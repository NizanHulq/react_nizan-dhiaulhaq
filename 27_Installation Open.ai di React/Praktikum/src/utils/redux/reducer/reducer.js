import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    },
    addProduct(state, action) {
      state.products.push(action.payload)
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        product => product.id !== action.payload
      )
    },
    updateProduct(state, action) {
      const index = state.products.findIndex(
        product => product.id === action.payload.id
      )
      state.products[index] = action.payload
    }
  }
})

export const { setProducts, addProduct, deleteProduct, updateProduct } =
  productSlice.actions

export default productSlice.reducer

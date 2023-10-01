import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 'e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836',

      productName: 'John',

      productCategory: 'Doe',

      productFreshness: 'Doe',

      productPrice: 'Doe',

      image: 'Doe',

      additionalDescription: 'Doe'
    }
  ]
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
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

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions

export default productSlice.reducer

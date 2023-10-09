import axios from 'axios'

export const getProducts = async () => {
  try {
    const response = await axios.get(
      'https://651b1023340309952f0e3533.mockapi.io/products'
    )

    return response.data
  } catch (error) {
    throw new Error(error.toString())
  }
}

export const storeProduct = async product => {
  try {
    const response = await axios.post(
      'https://651b1023340309952f0e3533.mockapi.io/products',
      product
    )
  } catch (error) {
    throw new Error(error.toString())
  }
}

// make update product

export const updateProduct = async product => {
  try {
    const response = await axios.put(
      `https://651b1023340309952f0e3533.mockapi.io/products/${product.id}`,
      product
    )
  } catch (error) {
    throw new Error(error.toString())
  }
}

// make delete product

export const destroyProduct = async id => {
  try {
    const response = await axios.delete(
      `https://651b1023340309952f0e3533.mockapi.io/products/${id}`
    )
  } catch (error) {
    throw new Error(error.toString())
  }
}

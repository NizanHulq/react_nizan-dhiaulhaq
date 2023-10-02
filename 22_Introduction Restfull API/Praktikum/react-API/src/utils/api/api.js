import axios from "axios"


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

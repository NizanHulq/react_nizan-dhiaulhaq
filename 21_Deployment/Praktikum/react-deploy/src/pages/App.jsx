import { useState } from 'react'

import CreateProduct from './product/CreateProduct'

const options = {
  position: 'top right',
  timeout: 2000,
  offset: '30px',
};

function App() {

  return (
      <CreateProduct />
  )
}

export default App

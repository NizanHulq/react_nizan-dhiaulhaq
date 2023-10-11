import { useState } from 'react'
import { useAlert, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

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

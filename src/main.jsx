import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import CardHolder from './Card'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
     <CardHolder /> 
     </ChakraProvider>     
  </React.StrictMode>,
)

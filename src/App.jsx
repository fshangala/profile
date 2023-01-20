import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';

let router = createHashRouter([
  {
    path: "/",
    element: <Root />
  }
])
function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App

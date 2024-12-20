import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "primereact/resources/themes/md-light-indigo/theme.css"
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import Services from './routes/Services'

const router = createHashRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"services",
        element:<Services />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>,
)

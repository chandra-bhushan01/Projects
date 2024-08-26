import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      }
      


  
  ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

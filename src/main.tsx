import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import CategoryMenu from './component/Menu/singleMenu/categoryMenu.tsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path:'/categoria',
    element: <CategoryMenu />,
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'

import CategoryMenu from './component/Menu/singleMenu/categoryMenu.tsx'
import Auth from './component/Auth/Auth.tsx'
import GeneralPrenotazioni from './component/Prenotazioni/GeneralPrenotazioni.tsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path:'/categoria',
    element: <CategoryMenu />,
  },
  {
    path:'/auth',
    element: <Auth />,
  },
  {
    path:'/prenotazioni',
    element: <GeneralPrenotazioni />,
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

registerSW({
  onNeedRefresh() {
    console.log('Nuova versione disponibile')
  },
  onOfflineReady() {
    console.log('App pronta offline')
  }
})
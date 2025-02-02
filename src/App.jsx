import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// pages
import Index from './pages/index'
import CartPage from './pages/CartPage'
import MainLayout from './layouts/MainLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path='/CartPage' element={<CartPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App

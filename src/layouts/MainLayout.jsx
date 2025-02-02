import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [cart, setCart] = useState([]);

  // Savatga mahsulot qo‘shish funksiyasi
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Savatdan mahsulotni olib tashlash funksiyasi
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className='flex flex-col bg-slate-500 text-white w-full min-h-screen'>
      <Header cartCount={cart.length} />
      <main className='bg-slate-400 grow py-10'>
        <div className="w-full max-w-5xl mx-auto px-5">
          <Outlet context={{ addToCart, removeFromCart, cart }} />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarMain from '../../components/modules/Navbar/NavbarMain'
import Footer from '../../components/modules/Footer/Footer'

const Main = () => {
  return (
    <div className='flex flex-col items-center font-peworld w-full h-auto'>
        <NavbarMain />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Main
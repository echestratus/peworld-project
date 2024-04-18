import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Register = () => {
  return (
    <div className='w-[570px] h-auto flex flex-col justify-center'>
        <div className='w-full h-auto flex justify-start'>
            <nav className='container w-full h-auto relative'>
                <ul className='list-none flex justify-start p-0 gap-5 relative'>
                    <li><NavLink to='/auth/register/registerworker' className='no-underline text-[22px] font-semibold text-[#1F2A36] pb-2'>Worker</NavLink></li>
                    <li><NavLink to='/auth/register/registerrecruiter' className='no-underline text-[22px] font-semibold text-[#1F2A36] pb-2'>Recruiter</NavLink></li>
                </ul>
            </nav>     
        </div>
        <Outlet />
    </div>
  )
}

export default Register
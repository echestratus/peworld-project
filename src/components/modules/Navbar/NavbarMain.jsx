import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarMain = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-white w-full h-auto flex justify-center'>
        <nav className='w-[1140px] h-auto bg-white flex justify-between items-center'>
            <div className='container w-[127px] h-[35px]'>
                <img src="/src/assets/Main/peworldBlue.svg" alt="Peworld" onClick={()=>navigate(`/`)} className='object-cover w-full h-full hover:cursor-pointer' />
            </div>
            <ul className='flex items-center w-auto h-auto gap-10 list-none'>
                <li className='w-[24px] h-[24px]'>
                    <img src="/src/assets/Main/bell-logo.svg" alt="bell" className='object-cover w-full h-full' />
                </li>
                <li className='w-[24px] h-[24px]'>
                    <img src="/src/assets/Main/mail-logo.svg" alt="mail" className='object-cover w-full h-full' />
                </li>
                <li className='w-[32px] h-[32px]'>
                    <img src="/src/assets/Main/user-logo.png" alt="user" className='object-cover w-full h-full' />
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default NavbarMain
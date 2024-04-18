import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonBgWhite from '../../base/Button/ButtonBgWhite'
import ButtonMain from '../../base/Button/ButtonMain'

const NavbarLandingPage = ({ role, handleClickProfile, handleClickLogout }) => {
    const navigate = useNavigate()
    return (
        <div className='bg-white w-full h-auto flex justify-center'>
            <nav className='w-[1140px] h-auto bg-white flex justify-between items-center'>
                <div className='container w-[127px] h-[35px]'>
                    <img src="/src/assets/Main/peworldBlue.svg" alt="Peworld" onClick={() => navigate(`/main/home`)} className='object-cover w-full h-full hover:cursor-pointer' />
                </div>
                {role === 'worker' || role === 'recruiter' ? (
                    <>
                        <p onClick={() => navigate(`/main/home`)} className='mr-96 text-[18px] font-semibold text-[#1F2A36] hover:cursor-pointer'>Home</p>
                        <div className='flex gap-10'>
                            <div className='w-[86px] h-[44px] ml-auto'><ButtonMain onClick={handleClickProfile}>Profile</ButtonMain></div>
                            <div className='w-[86px] h-[44px] ml-auto'><ButtonBgWhite onClick={handleClickLogout}>Logout</ButtonBgWhite></div>
                        </div>

                    </>
                ) : (
                    <ul className='flex items-center w-auto h-auto gap-10 list-none'>
                        <li className='w-[87px] h-[44px]'>
                            <ButtonBgWhite onClick={() => navigate(`/auth/login`)}>Login</ButtonBgWhite>
                        </li>
                        <li className='w-[87px] h-[44px]'>
                            <ButtonMain onClick={() => navigate(`/auth/register/registerworker`)}>Register</ButtonMain>
                        </li>
                    </ul>
                )}


            </nav>
        </div>
    )
}

export default NavbarLandingPage
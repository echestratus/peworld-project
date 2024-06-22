import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonBgWhite from '../../base/Button/ButtonBgWhite'
import ButtonMain from '../../base/Button/ButtonMain'

const NavbarLandingPage = ({ role, handleClickProfile, handleClickLogout }) => {
    const navigate = useNavigate()
    return (
        <div className='bg-white w-full h-auto flex justify-center'>
            <nav className='
            laptop:w-[1140px] laptop:h-auto laptop:bg-white laptop:flex laptop:justify-between laptop:items-center
            max-tablet:w-[90%] max-tablet:h-auto max-tablet:bg-white max-tablet:flex max-tablet:justify-between max-tablet:items-center
            '>
                <div className='container w-[127px] h-[35px] max-tablet:w-[63.5px] max-tablet:h-[17.5px]'>
                    <img src="/src/assets/Main/peworldBlue.svg" alt="Peworld" onClick={() => navigate(`/main/home`)} className='object-cover w-full h-full hover:cursor-pointer' />
                </div>
                {role === 'worker' || role === 'recruiter' ? (
                    <>
                        <p onClick={() => navigate(`/main/home`)} className='mr-96 max-tablet:mr-2 text-[18px] max-tablet:text-[12px] font-semibold text-[#1F2A36] hover:cursor-pointer'>Home</p>
                        <div className='flex gap-10 max-tablet:gap-5'>
                            <div className='w-[86px] max-tablet:w-[60px] h-[44px] max-tablet:h-[35px] ml-auto'><ButtonMain onClick={handleClickProfile}>Profile</ButtonMain></div>
                            <div className='w-[86px] max-tablet:w-[60px] h-[44px] max-tablet:h-[35px] ml-auto'><ButtonBgWhite onClick={handleClickLogout}>Logout</ButtonBgWhite></div>
                        </div>

                    </>
                ) : (
                    <ul className='
                    laptop:flex laptop:items-center laptop:w-auto laptop:h-auto laptop:gap-10 laptop:list-none
                    max-tablet:flex max-tablet:items-center max-tablet:w-auto max-tablet:h-auto max-tablet:gap-5 max-tablet:list-none
                    '>
                        <li className='w-[87px] h-[44px] max-tablet:w-[60px] max-tablet:h-[35px]'>
                            <ButtonBgWhite onClick={() => navigate(`/auth/login`)}>Login</ButtonBgWhite>
                        </li>
                        <li className='w-[87px] max-tablet:w-[60px] h-[44px] max-tablet:h-[35px]'>
                            <ButtonMain onClick={() => navigate(`/auth/register/registerworker`)}>Register</ButtonMain>
                        </li>
                    </ul>
                )}


            </nav>
        </div>
    )
}

export default NavbarLandingPage
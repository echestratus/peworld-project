import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonBgWhite from '../../base/Button/ButtonBgWhite'
import ButtonMain from '../../base/Button/ButtonMain'
import PeworldBlue from '../../../assets/Main/peworldBlue.svg'

const NavbarLandingPage = ({ role, handleClickProfile, handleClickLogout }) => {
    const navigate = useNavigate()
    return (
        <div className='bg-white w-full h-auto flex justify-center'>
            <nav className='
            laptop:w-[1140px] laptop:h-auto laptop:bg-white laptop:flex laptop:justify-between laptop:items-center
            max-laptop:w-[90%] max-laptop:h-auto max-laptop:bg-white max-laptop:flex max-laptop:justify-between max-laptop:items-center
            '>
                <div className='container w-[127px] h-[35px] max-laptop:w-[100px] max-laptop:h-fit'>
                    <img src={PeworldBlue} alt="Peworld" onClick={() => navigate(`/main/home`)} className='object-cover w-full h-full hover:cursor-pointer' />
                </div>
                {role === 'worker' || role === 'recruiter' ? (
                    <>
                        <p onClick={() => navigate(`/main/home`)} className='mr-96 max-laptop:mr-2 text-[18px] max-laptop:text-[12px] font-semibold text-[#1F2A36] hover:cursor-pointer'>Home</p>
                        <div className='flex gap-10 max-laptop:gap-5'>
                            <div className='w-[86px] max-laptop:w-[60px] h-[44px] max-laptop:h-[35px] ml-auto'><ButtonMain onClick={handleClickProfile}>Profile</ButtonMain></div>
                            <div className='w-[86px] max-laptop:w-[60px] h-[44px] max-laptop:h-[35px] ml-auto'><ButtonBgWhite onClick={handleClickLogout}>Logout</ButtonBgWhite></div>
                        </div>

                    </>
                ) : (
                    <ul className='
                    laptop:flex laptop:items-center laptop:w-auto laptop:h-auto laptop:gap-10 laptop:list-none
                    max-laptop:flex max-laptop:items-center max-laptop:w-auto max-laptop:h-auto max-laptop:gap-5 max-laptop:list-none
                    '>
                        <li className='w-[87px] h-[44px] max-laptop:w-[60px] max-laptop:h-[35px]'>
                            <ButtonBgWhite onClick={() => navigate(`/auth/login`)}>Login</ButtonBgWhite>
                        </li>
                        <li className='w-[87px] max-laptop:w-[60px] h-[44px] max-laptop:h-[35px]'>
                            <ButtonMain onClick={() => navigate(`/auth/register/registerworker`)}>Register</ButtonMain>
                        </li>
                    </ul>
                )}


            </nav>
        </div>
    )
}

export default NavbarLandingPage
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full flex justify-center pt-10 pb-52 font-peworld bg-[#F6F7F8] gap-14'>
        <div className='container relative overflow-hidden w-[650px] h-[822px] bg-[url("/src/assets/Auth/bg-image.png")] before:bg-cover before:bg-[url("/src/assets/Auth/bg-overlay.svg")] before:w-full before:h-full before:top-0 before:left-0 before:content-[""] before:absolute phone:max-tablet:hidden'>
            <img className='top-10 left-10 w-[86px] h-[24px] relative hover:cursor-pointer' src="/src/assets/Auth/peworld-white.svg" alt="peworld-white" onClick={()=>navigate('/')} />
            <div className='flex w-full h-full justify-center items-center'>
                <h1 className='relative w-[456px] h-[280px] font-bold text-[44px] text-white'>Find the best and talented developer in various field and expertise</h1>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Auth
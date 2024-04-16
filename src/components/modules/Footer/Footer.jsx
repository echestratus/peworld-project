import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-[#5E50A1] flex justify-center'>
        <footer className='m-16 w-[1140px] h-auto'>
            <div className='mb-10 w-[178px] h-[50px]'>
                <img src="/src/assets/Auth/peworld-white.svg" alt="peworld" className='object-cover w-full h-full' />
            </div>
            <p className='w-[381px] h-auto font-[400] leading-6 text-white '>Visit us at Tech Solutions Inc, where innovation meets excellence. Our headquarters are located at 123 Innovation Avenue, Suite 101, in the bustling city of Techville, TX 54321, USA. With a team of dedicated professionals, we're committed to delivering top-notch IT solutions tailored to your needs. Reach out to us today and discover the difference!</p>
            <div className='mt-14 mb-6 w-full border-b-[1px] border-t-0 border-solid border-white'></div>
            <div className='w-full h-auto flex justify-between'>
                <p className='text-white font-thin'>2020 Peworld. All right reserved</p>
                <ul className='w-40 list-none flex justify-between'>
                    <li><Link className='no-underline text-white font-thin'>Telephone</Link></li>
                    <li><Link className='no-underline text-white font-thin'>Email</Link></li>
                </ul>
            </div>
            
        </footer>
    </div>
  )
}

export default Footer
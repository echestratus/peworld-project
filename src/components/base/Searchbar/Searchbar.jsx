import React from 'react'
import ButtonMain from '../Button/ButtonMain'

const Searchbar = ({value, handleChange, onClick}) => {
  return (
    <div className='w-full h-auto bg-white flex items-center rounded-lg'>
        <input name='search' value={value} onChange={handleChange} type="text" placeholder='Search for any skill' className='object-cover rounded-lg border-none outline-none w-[840px] h-[70px] pl-5 text-[14px] placeholder:text-[#9EA0A5] placeholder:text-[14px]'  />
        <div className='container w-[24px] h-[24px]'>
            <img src="/src/assets/Main/search-icon.svg" alt="search" className='w-full h-full object-cover hover:cursor-pointer hover:bg-slate-300 rounded-md' />
        </div>
        <div className='w-0 h-[58px] border-r border-l-0 border-solid border-[#9EA0A5] mx-5'></div>
        <p className='text-[#9EA0A5] text-[16px] font-medium'>Category</p>
        <div className='ml-5 w-[121px] h-[54px]'>
        <ButtonMain onClick={onClick}>Search</ButtonMain>
        </div>
    </div>
  )
}

export default Searchbar
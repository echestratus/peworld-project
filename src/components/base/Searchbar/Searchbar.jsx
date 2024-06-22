import React from 'react'
import ButtonMain from '../Button/ButtonMain'
import SearchIcon from '../../../assets/Main/search-icon.svg'

const Searchbar = ({value, handleChange, onClick, handleSortChange, handleSortByChange}) => {
  return (
    <div className='w-full h-auto bg-white flex items-center rounded-lg phone:max-tablet:flex-wrap phone:max-tablet:justify-center'>
        <input name='search' value={value} onChange={handleChange} type="text" placeholder='Search for any skill' className='object-cover rounded-lg border-none outline-none w-[760px] h-[70px] pl-5 text-[14px] placeholder:text-[#9EA0A5] placeholder:text-[14px] phone:max-tablet:max-w-[640px] phone:max-tablet:w-auto'  />
        <div className='container w-[24px] h-[24px] phone:max-tablet:w-[12px] phone:max-tablet:h-[12px]'>
            <img src={SearchIcon} alt="search" className='w-full h-full object-cover hover:cursor-pointer hover:bg-slate-300 rounded-md' />
        </div>
        <div className='w-0 h-[58px] border-r border-l-0 border-solid border-[#9EA0A5] mx-3 phone:max-tablet:h-[24px]'></div>
        {/* <p className='text-[#9EA0A5] text-[16px] font-medium'>Category</p> */}
        <select name="sort" onChange={handleSortChange} className='text-[#9EA0A5] text-[16px] font-medium border-none outline-none text-center phone:max-tablet:text-[12px]'>
          <option value="created_at">Sort</option>
          <option value="domicile">Domicile</option>
          <option value="name">Name</option>
        </select>
        <select name="sortBy" onChange={handleSortByChange} className='text-[#9EA0A5] text-[16px] font-medium border-none outline-none text-center phone:max-tablet:text-[12px]'>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
        <div className='ml-5 w-[121px] h-[54px] mr-3 phone:max-tablet:w-[80px]'>
        <ButtonMain onClick={onClick}>Search</ButtonMain>
        </div>
    </div>
  )
}

export default Searchbar
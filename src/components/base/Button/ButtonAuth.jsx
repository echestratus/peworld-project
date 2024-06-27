import React from 'react'

const ButtonAuth = ({onClick, children}) => {
  return (
      <button type='submit' onClick={onClick} className='laptop:h-[50px] max-laptop:h-full w-full rounded-[4px] bg-[#FBB017] font-semibold text-base max-laptop:text-[12px] text-white border-none hover:cursor-pointer hover:bg-[#cea148]'>{children}</button>
  )
}

export default ButtonAuth
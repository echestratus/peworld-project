import React from 'react'

const ButtonMain = ({onClick, children}) => {
  return (
        <button type='submit' onClick={onClick} className='laptop:h-[50px] max-laptop:h-full w-full rounded-[4px] bg-[#5E50A1] font-semibold text-base max-laptop:text-[12px] text-white border-none hover:cursor-pointer hover:bg-blue-900'>{children}</button>
  )
}

export default ButtonMain
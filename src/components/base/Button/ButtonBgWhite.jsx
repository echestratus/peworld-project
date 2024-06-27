import React from 'react'

const ButtonBgWhite = ({onClick, children}) => {
  return (
        <button type='submit' onClick={onClick} className='
        laptop:h-[50px] laptop:w-full laptop:rounded-[4px] laptop:bg-white laptop:font-semibold laptop:text-base laptop:text-[#5E50A1] laptop:border laptop:border-solid laptop:border-[#5E50A1] laptop:hover:cursor-pointer
        max-laptop:h-full max-laptop:w-full max-laptop:rounded-[4px] max-laptop:bg-white max-laptop:font-semibold max-laptop:text-[12px] max-laptop:text-[#5E50A1] max-laptop:border max-laptop:border-solid max-laptop:border-[#5E50A1] max-laptop:hover:cursor-pointer
        '>{children}</button>
  )
}

export default ButtonBgWhite
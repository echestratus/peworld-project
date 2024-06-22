import React from 'react'

const ButtonBgWhite = ({onClick, children}) => {
  return (
        <button type='submit' onClick={onClick} className='
        laptop:h-[50px] laptop:w-full laptop:rounded-[4px] laptop:bg-white laptop:font-semibold laptop:text-base laptop:text-[#5E50A1] laptop:border laptop:border-solid laptop:border-[#5E50A1] laptop:hover:cursor-pointer
        max-tablet:h-full max-tablet:w-full max-tablet:rounded-[4px] max-tablet:bg-white max-tablet:font-semibold max-tablet:text-[12px] max-tablet:text-[#5E50A1] max-tablet:border max-tablet:border-solid max-tablet:border-[#5E50A1] max-tablet:hover:cursor-pointer
        '>{children}</button>
  )
}

export default ButtonBgWhite
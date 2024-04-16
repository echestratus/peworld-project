import React from 'react'

const ButtonAuth = ({onClick, children}) => {
  return (
    <div>
        <button type='submit' onClick={onClick} className='h-[50px] w-full rounded-[4px] bg-[#FBB017] font-bold text-base text-white border-none hover:cursor-pointer hover:bg-[#cea148]'>{children}</button>
    </div>
  )
}

export default ButtonAuth
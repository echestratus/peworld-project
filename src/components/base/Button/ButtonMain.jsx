import React from 'react'

const ButtonMain = ({onClick, children}) => {
  return (
    <div className='w-full h-auto'>
        <button type='submit' onClick={onClick} className='h-[50px] w-full rounded-[4px] bg-[#5E50A1] font-semibold text-base text-white border-none hover:cursor-pointer'>{children}</button>
    </div>
  )
}

export default ButtonMain
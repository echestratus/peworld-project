import React from 'react'

const ButtonBgWhite = ({onClick, children}) => {
  return (
    <div>
        <button type='submit' onClick={onClick} className='h-[50px] w-full rounded-[4px] bg-white font-semibold text-base text-[#5E50A1] border border-solid border-[#5E50A1] hover:cursor-pointer'>{children}</button>
    </div>
  )
}

export default ButtonBgWhite
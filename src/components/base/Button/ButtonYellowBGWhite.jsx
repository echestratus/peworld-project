import React from 'react'

const ButtonYellowBGWhite = ({onClick, children}) => {
  return (
    <div>
        <button type='submit' onClick={onClick} className='h-[50px] w-full rounded-[4px] bg-white font-semibold text-base text-[#FBB017] border border-solid border-[#FBB017] hover:cursor-pointer'>{children}</button>
    </div>
  )
}

export default ButtonYellowBGWhite
import React from 'react'

const SkillsList = ({children, onClick, id}) => {
  return (
    <div>
        <button type='button' onClick={onClick} id={id} className='px-4 py-1 w-auto h-[28px] bg-[#FBB017] border border-solid border-[#FBB017] rounded-[4px] text-white text-[12px] hover:cursor-pointer phone:max-tablet:text-[8px] phone:max-tablet:h-[20px] phone:max-tablet:px-2'>{children}</button>
    </div>
  )
}

export default SkillsList
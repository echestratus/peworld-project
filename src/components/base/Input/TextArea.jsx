import React from 'react'

const TextArea = ({type="text", name, onChange, placeholder, value, label, defaultValue}) => {
  return (
    <div className='flex flex-col'>
        {label && (<label className='ml-1 mb-1 font-normal text-xs text-[#9EA0A5]'>{label}</label>)}
        <textarea type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} defaultValue={defaultValue} className='font-peworld box-border w-full h-[144px] rounded-[4px] px-5 outline-none border border-solid border-[#E2E5ED] bg-white font-normal text-sm placeholder:font-normal placeholder:text-sm placeholder:text-[#858D96]'></textarea>
    </div>
  )
}

export default TextArea
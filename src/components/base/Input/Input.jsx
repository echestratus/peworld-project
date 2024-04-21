import React from 'react'

const Input = ({type="text", name, onChange, placeholder, value, label, defaultValue}) => {
  return (
    <div className='w-full h-auto flex flex-col'>
        {label && (<label className='ml-1 mb-1 font-normal text-xs text-[#9EA0A5]'>{label}</label>)}
        <input type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} defaultValue={defaultValue} className='box-border w-full h-[50px] rounded-[4px] px-5 outline-none border border-solid border-[#E2E5ED] bg-white font-normal text-sm placeholder:font-normal placeholder:text-sm placeholder:text-[#858D96]' />
    </div>
  )
}

export default Input
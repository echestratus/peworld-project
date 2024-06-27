import React from 'react'

const CardOpinion = ({img, name, job, description}) => {
  return (
    <div className='
    laptop:w-[339px] laptop:h-[437px] laptop:bg-white laptop:py-10 laptop:font-peworld laptop:box-border
    max-laptop:w-[100%] max-laptop:max-w-[339px] max-laptop:h-fit max-laptop:min-h-[437px] max-laptop:bg-white max-laptop:py-10 max-laptop:font-peworld max-laptop:box-border
    '>
        <div className='w-full flex justify-center'>
            <img src={img} alt="image-user" className='
            laptop:w-[120px] laptop:h-[120px] laptop:rounded-full laptop:outline laptop:outline-8 laptop:outline-[#FBB0175E] laptop:mx-auto object-cover
            max-laptop:w-[90px] max-laptop:h-[90px] max-laptop:rounded-full max-laptop:outline max-laptop:outline-8 max-laptop:outline-[#FBB0175E] max-laptop:mx-auto
            ' />
        </div>
        <p className='font-semibold text-[30px] max-laptop:text-[20px] text-[#1F2A36] text-center mb-0 leading-7'>{name}</p>
        <p className='font-normal text-[18px] max-laptop:text-[12px] text-[#9EA0A5] text-center leading-3'>{job}</p>
        <p className='font-normal text-[18px] max-laptop:text-[12px] text-[#46505C] text-center mt-6 px-16 max-laptop:px-5'>{description}</p>
    </div>
  )
}

export default CardOpinion
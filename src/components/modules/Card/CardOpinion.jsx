import React from 'react'

const CardOpinion = ({img, name, job, description}) => {
  return (
    <div className='
    laptop:w-[339px] laptop:h-[437px] laptop:bg-white laptop:py-10 laptop:font-peworld laptop:box-border
    max-tablet:w-[100%] max-tablet:h-fit max-tablet:min-h-[437px] max-tablet:bg-white max-tablet:py-10 max-tablet:font-peworld max-tablet:box-border
    '>
        <div className='w-full flex justify-center'>
            <img src={img} alt="image-user" className='
            laptop:w-[120px] laptop:h-[120px] laptop:rounded-full laptop:outline laptop:outline-8 laptop:outline-[#FBB0175E] laptop:mx-auto object-cover
            max-tablet:w-[90px] max-tablet:h-[90px] max-tablet:rounded-full max-tablet:outline max-tablet:outline-8 max-tablet:outline-[#FBB0175E] max-tablet:mx-auto
            ' />
        </div>
        <p className='font-semibold text-[30px] max-tablet:text-[20px] text-[#1F2A36] text-center mb-0 leading-7'>{name}</p>
        <p className='font-normal text-[18px] max-tablet:text-[12px] text-[#9EA0A5] text-center leading-3'>{job}</p>
        <p className='font-normal text-[18px] max-tablet:text-[12px] text-[#46505C] text-center mt-6 px-16 max-tablet:px-5'>{description}</p>
    </div>
  )
}

export default CardOpinion
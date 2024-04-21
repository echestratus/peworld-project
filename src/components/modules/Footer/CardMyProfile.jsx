import React from 'react'
import ButtonMain from '../../base/Button/ButtonMain'
import SkillsList from '../../base/Button/SkillsList'
import { useNavigate } from 'react-router-dom'

const CardMyProfile = ({ workersDetail, workersSkill, onClick}) => {
    const navigate = useNavigate()
    const { name, domicile, job_desk, workplace, description, email, photo } = workersDetail
    return (
        <div className='w-[357px] h-auto flex flex-col items-center justify-center bg-white rounded-md relative phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
            {photo === null ? (<img src="/src/assets/Main/icon_user_whiteongrey.svg" alt="photo" className='w-[150px] h-[150px] rounded-full mt-8' />) : (<img src={photo} alt="photo" className='w-[150px] h-[150px] rounded-full mt-8' />)}
            
            <div className='w-[297px] h-auto'>
                <p className='text-[22px] font-semibold text-[#1F2A36]'>{name}</p>
                <p className='text-[14px] font-normal text-[#1F2A36]'>{job_desk}</p>
                <div className='flex items-center justify-start gap-2 mr-auto'>
                    <img src="/src/assets/Main/map-pin.svg" alt="map-pin" className='w-[16px] h-[16px]' />
                    <p className='text-[14px] font-normal text-[#9EA0A5]'>{domicile}</p>
                </div>
                <p className='text-[14px] font-normal text-[#9EA0A5]'>{workplace}</p>
                <p className='text[14px] font-normal text-[#9EA0A5] leading-7'>{description}</p>
            </div>
            <div className='w-[297px] h-[50px]'>
                <ButtonMain onClick={onClick}>Edit</ButtonMain>
            </div>
            <div className='w-[297px] h-auto mt-10'><p className='text-[22px] font-semibold text-[#1F2A36]'>Skill</p></div>
            <div className='w-[297px] h-auto flex flex-wrap gap-2 justify-start'>
                {workersSkill.map((value, index) => (
                    <SkillsList key={index}>{value.skill_name}</SkillsList>
                ))}
            </div>
            <div className='w-[297px] h-auto mt-10 mb-20'>
                <div className='flex items-center justify-start gap-5 mr-auto'>
                    <img src="/src/assets/Main/mail-logo.svg" alt="map-pin" className='w-[24px] h-[24px]' />
                    <p className='text-[14px] font-normal text-[#9EA0A5]'>{email}</p>
                </div>
            </div>

        </div>
    )
}

export default CardMyProfile
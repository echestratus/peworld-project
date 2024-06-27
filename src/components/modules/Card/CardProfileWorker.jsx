import React, { useState } from 'react'
import ButtonMain from '../../base/Button/ButtonMain'
import SkillsList from '../../base/Button/SkillsList'
import IconUser from '../../../assets/Main/icon_user_whiteongrey.svg'
import MapPin from '../../../assets/Main/map-pin.svg'
import MailIcon from '../../../assets/Main/mail-logo.svg'

const CardProfileWorker = ({ workersDetail, workersSkill, handleClickHire }) => {
    const { name, domicile, job_desk, workplace, description, email, photo } = workersDetail
    const [role, setRole] = useState(localStorage.getItem('role'))
    return (
        <div className='laptop:w-[357px] max-laptop:w-full h-auto max-laptop:box-border max-laptop:px-4 flex flex-col items-center justify-start bg-white rounded-md relative'>
            {photo === null ? (<img src={IconUser} alt="photo" className='w-[150px] h-[150px] rounded-full mt-8' />) : (<img src={photo} alt="photo" className='w-[150px] h-[150px] rounded-full mt-8 object-cover' />)}

            <div className='w-[297px] max-laptop:w-[95%] h-auto'>
                <p className='text-[22px] font-semibold text-[#1F2A36]'>{name}</p>
                <p className='text-[14px] font-normal text-[#1F2A36]'>{job_desk}</p>
                <div className='flex items-center justify-start gap-2 mr-auto'>
                    <img src={MapPin} alt="map-pin" className='w-[16px] h-[16px]' />
                    <p className='text-[14px] font-normal text-[#9EA0A5]'>{domicile}</p>
                </div>
                <p className='text-[14px] font-normal text-[#9EA0A5]'>{workplace}</p>
                <p className='text[14px] font-normal text-[#9EA0A5] leading-7'>{description}</p>
            </div>
                {role === 'recruiter' && (
                    <div className='laptop:w-[297px] mx-auto max-laptop:w-[80%] max-laptop:max-w-[297px] h-[50px]'>
                        <ButtonMain onClick={handleClickHire}>Hire</ButtonMain>
                    </div>
                )}
            <div className='w-[297px] max-laptop:w-[95%] h-auto mt-10'><p className='text-[22px] font-semibold text-[#1F2A36]'>Skill</p></div>
            <div className='w-[297px] max-laptop:w-[95%] h-auto flex flex-wrap gap-2 justify-start'>
                {workersSkill.map((value, index) => (
                    <SkillsList key={index}>{value.skill_name}</SkillsList>
                ))}
            </div>
            <div className='w-[297px] max-laptop:w-[95%] h-auto mt-10 mb-20'>
                <div className='flex items-center justify-start gap-5 mr-auto'>
                    <img src={MailIcon} alt="map-pin" className='w-[24px] h-[24px]' />
                    <p className='text-[14px] font-normal text-[#9EA0A5]'>{email}</p>
                </div>
            </div>

        </div>
    )
}

export default CardProfileWorker
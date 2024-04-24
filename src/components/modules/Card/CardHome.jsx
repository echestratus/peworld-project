import React from 'react'
import ButtonMain from '../../base/Button/ButtonMain'
import { useNavigate } from 'react-router-dom'
import SkillsList from '../../base/Button/SkillsList'

const CardHome = ({ workersData }) => {
    const navigate = useNavigate()
    const { name, job_desk, domicile, skills, photo, id } = workersData
    const handleClickViewProfile = (id) => {
        alert(`Directed to profile's detail`)
        navigate(`/main/profileworker/${id}/portofolio`)
    }
    return (
        <div className='w-full h-auto bg-white flex items-center mb-[2px] rounded-md py-5'>
            <div className='w-[100px] h-[100px] ml-8 mr-8 phone:max-tablet:w-[40px] phone:max-tablet:h-[40px]'>
                {photo === null ? (<img src="/src/assets/Main/icon_user_whiteongrey.svg" alt="photo" className='object-cover w-full h-full rounded-full' />) : (<img src={photo} alt="photo" className='object-cover w-full h-full rounded-full' />)}
            </div>
            <div className='flex flex-col w-[400px] h-auto phone:max-tablet:w-max-[40%] phone:max-tablet:w-[40%]'>
                <p className='text-[22px] text-[#1F2A36] font-[600] my-1 phone:max-tablet:text-[16px]'>{name}</p>
                <p className='text-[14px] text-[#9EA0A5] my-1 phone:max-tablet:text-[10px]'>{job_desk}</p>
                <div className='flex items-center justify-start gap-3 w-full h-auto my-1'>
                    <img src="/src/assets/Main/map-pin.svg" alt="map-pin" className='w-[16px] h-[16px] phone:max-tablet:w-[10px] phone:max-tablet:h-[10px]' />
                    <p className='text-[14px] text-[#9EA0A5] phone:max-tablet:text-[8px]'>{domicile}</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3 w-full h-auto my-1 phone:max-tablet:gap-1'>
                    {skills.length > 0 && skills.map((item, index) =>
                        (<SkillsList key={index}>{item}</SkillsList>)
                    )}
                </div>
            </div>
            <div className='w-[148px] h-[54px] ml-auto mr-20 phone:max-tablet:w-[70px] phone:max-tablet:mr-5'>
                <ButtonMain onClick={()=>handleClickViewProfile(id)}>View Profile</ButtonMain>
            </div>

        </div>
    )
}

export default CardHome
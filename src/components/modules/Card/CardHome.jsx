import React from 'react'
import ButtonMain from '../../base/Button/ButtonMain'
import { useNavigate } from 'react-router-dom'
import SkillsList from '../../base/Button/SkillsList'
import IconUser from '../../../assets/Main/icon_user_whiteongrey.svg'
import MapPin from '../../../assets/Main/map-pin.svg'

const CardHome = ({ workersData }) => {
    const navigate = useNavigate()
    let { name, job_desk, domicile, skills, photo, id } = workersData
    if (domicile === "" || domicile === null) {
        domicile = "Unknown"
    }
    const handleClickViewProfile = (id) => {
        alert(`Directed to profile's detail`)
        navigate(`/main/profileworker/${id}/portofolio`)
    }
    return (
        <div className='w-full h-auto bg-white flex max-laptop:flex-col max-laptop:gap-4 items-center mb-[2px] rounded-md py-5'>
            <div className='w-[100px] h-[100px] ml-8 mr-8 phone:max-laptop:w-[40px] phone:max-laptop:h-[40px]'>
                {photo === null ? (<img src={IconUser} alt="photo" className='object-cover w-full h-full rounded-full' />) : (<img src={photo} alt="photo" className='object-cover w-full h-full rounded-full' />)}
            </div>
            <div className='flex flex-col w-[400px] h-auto phone:max-laptop:w-max-[40%] phone:max-laptop:w-[40%]'>
                <p className='text-[22px] text-[#1F2A36] font-[600] my-1 phone:max-laptop:text-[16px]'>{name}</p>
                <p className='text-[14px] text-[#9EA0A5] my-1 phone:max-laptop:text-[10px]'>{job_desk}</p>
                <div className='flex items-center justify-start gap-3 w-full h-auto my-1'>
                    <img src={MapPin} alt="map-pin" className='w-[16px] h-[16px] phone:max-laptop:w-[10px] phone:max-laptop:h-[10px]' />
                    <p className='text-[14px] text-[#9EA0A5] phone:max-laptop:text-[8px]'>{domicile}</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3 w-full h-auto my-1 phone:max-laptop:gap-1'>
                    {skills.length > 0 && skills.map((item, index) =>
                        (<SkillsList key={index}>{item}</SkillsList>)
                    )}
                </div>
            </div>
            <div className='w-[148px] laptop:h-[54px] max-laptop:h-[45px] laptop:ml-auto laptop:mr-20 phone:max-laptop:w-max-[40%] phone:max-laptop:mr-5'>
                <ButtonMain onClick={()=>handleClickViewProfile(id)}>View Profile</ButtonMain>
            </div>

        </div>
    )
}

export default CardHome
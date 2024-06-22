import React from 'react'
import ButtonMain from '../../base/Button/ButtonMain'
import IconUser from '../../../assets/Main/icon_user_whiteongrey.svg'
import MapPin from '../../../assets/Main/map-pin.svg'
import MailLogo from '../../../assets/Main/mail-logo.svg'
import InstaLogo from '../../../assets/Main/instagram.svg'
import PhoneLogo from '../../../assets/Main/phone-logo.svg'
import LinkedInLogo from '../../../assets/Main/linkedin-logo.svg'

const CardRecruiterProfile = ({ recruiterData, handleClickEditProfileCompany }) => {
    return (
        <div className='w-[1140px] h-auto flex flex-col items-center mt-28 mb-52 relative rounded-md bg-white phone:max-tablet:max-w-[640px] phone:max-tablet:w-full'>
            <div className='absolute w-full h-[200px] bg-[#5E50A1] rounded-t-md phone:max-tablet:max-w-[640px]'>
                <label className='flex items-center justify-start gap-4 relative left-[85%] top-[75%] hover:cursor-pointer phone:max-tablet:gap-1 phone:max-tablet:left-[80%]'>
                    <img src="/src/assets/Main/edit-logo-white.svg" alt="edit-logo" className='w-[16px] h-[16px] phone:max-tablet:w-[8px] phone:max-tablet:h-[8px]' />
                    <p className='text-[22px] text-white font-normal phone:max-tablet:text-[11px]'>Ubah Latar</p>
                </label>
            </div>
            {recruiterData.photo ? (
                <img src={recruiterData.photo} alt='user-photo' className='w-[150px] h-[150px] mt-[125px] relative rounded-full' />
            ) : (
                <img src={IconUser} alt='user-photo' className='w-[150px] h-[150px] mt-[125px] relative rounded-full' />
            )}
            <div className='relative w-full h-auto bg-white rounded-b-md flex flex-col items-center pb-36'>
                <p className='text-[22px] text-[#1F2A36] font-semibold'>{recruiterData.company}</p>
                <p className='text=[14px] text-[#1F2A36] font-normal'>{recruiterData.position}</p>
                <label className='flex items-center justify-start gap-4'>
                    <img src={MapPin} alt="map-logo" className='w-[16px] h-[16px]' />
                    <p className='text-[14px] text-[#9EA0A5] font-normal'>{recruiterData.city}</p>
                </label>
                <p className='text-[14px] text-[#9EA0A5] font-normal text-center'>{recruiterData.description}</p>
                <div className='w-[297px] h-auto'>
                    <ButtonMain onClick={handleClickEditProfileCompany}>Edit Profile</ButtonMain>
                </div>
                <div className='flex flex-col items-start gap-3 mt-10'>
                    <label className='flex items-center justify-start gap-4'>
                        <img src={MailLogo} alt="mail-logo" className='w-[24px] h-[24px]' />
                        <p className='text-[14px] text-[#9EA0A5] font-normal'>{recruiterData.email}</p>
                    </label>
                    <label className='flex items-center justify-start gap-4'>
                        <img src={InstaLogo} alt="mail-logo" className='w-[24px] h-[24px]' />
                        <p className='text-[14px] text-[#9EA0A5] font-normal'>{recruiterData.instagram}</p>
                    </label>
                    <label className='flex items-center justify-start gap-4'>
                        <img src={PhoneLogo} alt="mail-logo" className='w-[24px] h-[24px]' />
                        <p className='text-[14px] text-[#9EA0A5] font-normal'>{recruiterData.phone}</p>
                    </label>
                    <label className='flex items-center justify-start gap-4'>
                        <img src={LinkedInLogo} alt="mail-logo" className='w-[24px] h-[24px]' />
                        <p className='text-[14px] text-[#9EA0A5] font-normal'>{recruiterData.linkedin}</p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CardRecruiterProfile
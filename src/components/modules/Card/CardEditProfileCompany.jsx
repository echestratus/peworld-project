import React from 'react'
import ButtonMain from '../../base/Button/ButtonMain'
import ButtonBgWhite from '../../base/Button/ButtonBgWhite'
import EditLogo from '../../../assets/Main/edit-logo.svg'
import MapPin from '../../../assets/Main/map-pin.svg'
import MailLogo from '../../../assets/Main/mail-logo.svg'
import IconUser from '../../../assets/Main/icon_user_whiteongrey.svg'

const CardEditProfileCompany = ({ formProfile, handleSubmitProfile, handleClickCancel, handleChangeUploadImage }) => {
    const { company, position, city, description, email, phone, instagram, linkedin, photo } = formProfile
    return (
        <div className='laptop:w-[357px] max-laptop:max-w-[357px] max-laptop:w-full h-auto max-laptop:box-border max-laptop:px-4 flex flex-col items-center justify-start rounded-md relative'>
            <div className='w-full h-auto max-laptop:px-5 max-laptop:box-border flex flex-col items-center justify-start bg-white rounded-md relative'>
                {photo === null ? (<img src={IconUser} alt="photo" className='w-[150px] h-[150px] rounded-full object-cover mt-8' />) : (<img src={photo} alt="photo" className='w-[150px] h-[150px] rounded-full object-cover mt-8' />)}
                <div className='w-full max-laptop:w-[95%] h-auto flex justify-center items-center gap-2'>
                    <label>
                        <img src={EditLogo} alt="edit-logo" className='w-[16px] h-[16px] hover:cursor-pointer' />
                        <input type='file' accept='image/*' className='hidden' onChange={handleChangeUploadImage} />
                    </label>
                    <p className='text-[#9EA0A5] text-[22px] font-semibold'>Edit</p>
                </div>
                <div className='w-[297px] max-laptop:w-[95%] h-auto break-words'>
                    <p className='text-[22px] font-semibold text-[#1F2A36]'>{company}</p>
                    <p className='text-[14px] font-normal text-[#1F2A36]'>{position}</p>
                    <div className='w-full h-auto flex items-center justify-start gap-2 mr-auto'>
                        <img src={MapPin} alt="map-pin" className='w-[16px] h-[16px]' />
                        <div className='w-[273px] h-auto break-words'>
                            <p className='text-[14px] font-normal text-[#9EA0A5]'>{city}</p>
                        </div>

                    </div>
                    <div className='w-full h-auto flex items-center justify-start gap-2 mr-auto'>
                        <img src={MailLogo} alt="map-pin" className='w-[16px] h-[16px]' />
                        <div className='w-[273px] h-auto break-words'>
                            <p className='text-[14px] font-normal text-[#9EA0A5]'>{email}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full py-10'>
                <div className='w-[357px] max-laptop:w-[95%] h-[50px] mt-5 max-laptop:max-w-[357px]'>
                    <ButtonMain onClick={handleSubmitProfile}>Submit</ButtonMain>
                </div>
                <div className='w-[357px] max-laptop:w-[95%] h-[50px] mt-5 max-laptop:max-w-[357px]'>
                    <ButtonBgWhite onClick={handleClickCancel}>Cancel</ButtonBgWhite>
                </div>
            </div>
        </div>

    )
}

export default CardEditProfileCompany
import React from 'react'
import ButtonMain from '../../base/Button/ButtonMain'
import ButtonBgWhite from '../../base/Button/ButtonBgWhite'

const CardEditProfileCompany = ({ formProfile, handleSubmitProfile, handleClickCancel, handleChangeUploadImage }) => {
    const { company, position, city, description, email, phone, instagram, linkedin, photo } = formProfile
    return (
        <div className='w-[357px] h-auto flex flex-col items-center justify-start relative phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
            <div className='w-[357px] h-auto flex flex-col items-center justify-start bg-white rounded-md relative phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
                {photo === null ? (<img src="https://openclipart.org/image/2400px/svg_to_png/250353/icon_user_whiteongrey.png" alt="photo" className='w-[150px] h-[150px] rounded-full mt-8' />) : (<img src={photo} alt="photo" className='w-[150px] h-[150px] rounded-full mt-8' />)}
                <div className='w-full h-auto flex justify-center items-center gap-2'>
                    <label>
                        <img src="/src/assets/Main/edit-logo.svg" alt="edit-logo" className='w-[16px] h-[16px] hover:cursor-pointer' />
                        <input type='file' accept='image/*' className='hidden' onChange={handleChangeUploadImage} />
                    </label>
                    <p className='text-[#9EA0A5] text-[22px] font-semibold'>Edit</p>
                </div>
                <div className='w-[297px] h-auto break-words'>
                    <p className='text-[22px] font-semibold text-[#1F2A36]'>{company}</p>
                    <p className='text-[14px] font-normal text-[#1F2A36]'>{position}</p>
                    <div className='w-full h-auto flex items-center justify-start gap-2 mr-auto'>
                        <img src="/src/assets/Main/map-pin.svg" alt="map-pin" className='w-[16px] h-[16px]' />
                        <div className='w-[273px] h-auto break-words'>
                            <p className='text-[14px] font-normal text-[#9EA0A5]'>{city}</p>
                        </div>

                    </div>
                    <div className='w-full h-auto flex items-center justify-start gap-2 mr-auto'>
                        <img src="/src/assets/Main/mail-logo.svg" alt="map-pin" className='w-[16px] h-[16px]' />
                        <div className='w-[273px] h-auto break-words'>
                            <p className='text-[14px] font-normal text-[#9EA0A5]'>{email}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-[357px] h-auto py-10 phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
                <div className='mt-5'>
                    <ButtonMain onClick={handleSubmitProfile}>Submit</ButtonMain>
                </div>
                <div className='mt-5'>
                    <ButtonBgWhite onClick={handleClickCancel}>Cancel</ButtonBgWhite>
                </div>
            </div>
        </div>

    )
}

export default CardEditProfileCompany
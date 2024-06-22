import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import { getHireWithWorkerAction } from '../../../config/redux/action/getHireWithWorkerAction'

const Notifications = () => {
    const {loading, formHire} = useSelector((state) => state.getHireWithWorker )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHireWithWorkerAction())
    }, [])

    if (loading === true) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <ClipLoader />
            </div>
        )
    }
  return (
    <div className='w-full h-auto flex justify-center bg-[#F6F7F8]'>        
        <div className='w-[1140px] h-auto flex flex-col items-center gap-1 mt-28 mb-52 relative rounded-md phone:max-tablet:max-w-[640px] phone:max-tablet:w-full'>
            {formHire.map((recruiter, index) => {
                return (
                    <NotificationItem key={index} name={recruiter.recruiter_name} company={recruiter.recruiter_company} photo={recruiter.recruiter_photo} purpose={recruiter.message_purpose} description={recruiter.desciption_request_hire} />
                )
            })}
        </div>
    </div>
  )
}

export default Notifications

const NotificationItem = ({name, company, photo, purpose, description}) => {
    return (
    <div className='w-full h-auto bg-white flex items-center mb-[2px] rounded-md py-5'>
        <div className='w-[100px] h-[100px] ml-8 mr-8 phone:max-tablet:w-[40px] phone:max-tablet:h-[40px]'>
            {photo === null ? (<img src="/src/assets/Main/icon_user_whiteongrey.svg" alt="photo" className='object-cover w-full h-full rounded-full' />) : (<img src={photo} alt="photo" className='object-cover w-full h-full rounded-full' />)}
        </div>
        <div className='flex flex-col w-[400px] h-auto phone:max-tablet:w-max-[40%] phone:max-tablet:w-[40%]'>
            <p className='text-[22px] text-[#1F2A36] font-[600] my-1 phone:max-tablet:text-[16px]'>{name}</p>
            <p className='text-[14px] text-[#9EA0A5] my-1 phone:max-tablet:text-[10px]'>{company}</p>
            <p className='text-[14px] text-[#9EA0A5] phone:max-tablet:text-[8px]'>{purpose}</p>
            <p className='text-[14px] text-[#9EA0A5] phone:max-tablet:text-[8px] whitespace-pre-wrap'>{description}</p>
            
        </div>
    </div>
    )
}
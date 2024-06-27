import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getExperiencePerIdWorkerAction } from '../../../../config/redux/action/getExperiencePerIdWorkerAction'
import { ClipLoader } from 'react-spinners'
import BusinessIcon from '../../../../assets/Main/business-bag-svgrepo-com.svg'

const WorkerExperience = () => {
    const { id } = useParams()
    const {loading, experience} = useSelector((state)=>state.getExperiencePerIdWorker)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getExperiencePerIdWorkerAction(id))
    }, [])
    return (
        <div className='w-[693px] h-auto flex flex-col mb-16 max-laptop:w-[90%]'>
            {loading === true ? (
                <div className='w-full h-full flex justify-center items-center'>
                    <ClipLoader />
                </div>
            ) :
                experience.map((value, index) => (
                    <div key={index} className='w-full h-auto flex justify-start'>
                        <img src={BusinessIcon} alt="business-bag" className='w-[74px] h-[74px]' />
                        <div className='w-[540px] h-auto ml-5 max-laptop:max-w-[500px] max-laptop:w-[70%]'>
                            <p className='text-[20px] font-semibold text-[#1F2A36]'>{value.position}</p>
                            <p className='text-[18px] font-normal text-[#46505C]'>{value.company}</p>
                            <p className='text-[16px] font-normal text-[#9EA0A5]'>{value.work_month} {value.work_year}</p>
                            <p className='text-[14px] font-normal text-[#1F2A36]'>{value.description}</p>
                            {index !== experience.length-1 && (<div className='border-b border-solid border-[#E2E5ED] border-x-0 border-t-0 w-[520px] max-laptop:max-w-[500px] max-laptop:w-[70%]'></div>)}
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default WorkerExperience
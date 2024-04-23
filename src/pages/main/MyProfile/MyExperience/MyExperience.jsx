import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getExperiencePerIdWorkerAction } from '../../../../config/redux/action/getExperiencePerIdWorkerAction'

const MyExperience = () => {
    const { id } = useParams()
    // const [experience, setExperience] = useState([])
    const {loading, experience} = useSelector((state)=>state.getExperiencePerIdWorker)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getExperiencePerIdWorkerAction(id))
    }, [])
    return (
        <div className='w-[693px] h-auto flex flex-col mb-16 phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
            {loading === true ? (<h1 className='font-bold text-5xl text-center'>LOADING....</h1>) :
                experience.map((value, index) => (
                    <div key={index} className='w-full h-auto flex justify-start phone:max-tablet:justify-center phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
                        <img src="/src/assets/Main/business-bag-svgrepo-com.svg" alt="business-bag" className='w-[74px] h-[74px]' />
                        <div className='w-[540px] h-auto ml-5 phone:max-tablet:max-w-[640px] phone:max-tablet:w-[246px]'>
                            <p className='text-[20px] font-semibold text-[#1F2A36]'>{value.position}</p>
                            <p className='text-[18px] font-normal text-[#46505C]'>{value.company}</p>
                            <p className='text-[16px] font-normal text-[#9EA0A5]'>{value.work_month} {value.work_year}</p>
                            <p className='text-[14px] font-normal text-[#1F2A36]'>{value.description}</p>
                            {index !== experience.length-1 && (<div className='border-b border-solid border-[#E2E5ED] border-x-0 border-t-0 w-[520px] phone:max-tablet:w-[200px]'></div>)}
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default MyExperience
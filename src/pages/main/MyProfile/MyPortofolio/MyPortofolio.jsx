import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPortfolioPerIdWorkerAction } from '../../../../config/redux/action/getPortfolioPerIdWorkerAction'
import { ClipLoader } from 'react-spinners'

const MyPortofolio = () => {
    const { id } = useParams()
    // const [portofolio, setPortofolio] = useState([])
    const {loading, portofolio} = useSelector((state)=>state.getPortfolioPerIdWorker)
    const [image, setImage] = useState('/src/assets/Main/app3.png')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPortfolioPerIdWorkerAction(id))
    }, [])
    return (
        <div className='w-[693px] h-auto flex justify-start flex-wrap gap-3 phone:max-tablet:max-w-[640px] phone:max-tablet:flex-col phone:max-tablet:items-center'>
            {loading === true ? (
            <div className='w-full h-full flex justify-center items-center'>
                <ClipLoader />
            </div>
            ) :
                portofolio.map((value, index) => (
                    <div key={index} className='w-[219px] h-auto flex flex-col'>
                        {value.image === "" ? (<img src={image} alt="image" className='w-[219px] h-[148px] object-cover rounded-[4px]' />) : (<img src={value.image} alt="image" className='w-[219px] h-[148px] object-cover rounded-[4px]' />) }
                        <p className='text-center text-[14px] font-normal text-[#1F2A36]'>{value.application_name}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default MyPortofolio
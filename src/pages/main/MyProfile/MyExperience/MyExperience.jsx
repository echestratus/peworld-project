import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MyExperience = () => {
    const { id } = useParams()
    const [experience, setExperience] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axios.get(`${import.meta.env.VITE_BE_URL}/experience/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                setLoading(false)
                console.log('Show res contain experience');
                console.log(res);
                setExperience(res.data.data)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.response);
                alert('Something wrong')
            })
    }, [])
    return (
        <div className='w-[693px] h-auto flex flex-col mb-16'>
            {loading === true ? (<h1 className='font-bold text-5xl text-center'>LOADING....</h1>) :
                experience.map((value, index) => (
                    <div key={index} className='w-full h-auto flex justify-start'>
                        <img src="/src/assets/Main/business-bag-svgrepo-com.svg" alt="business-bag" className='w-[74px] h-[74px]' />
                        <div className='w-[540px] h-auto ml-5'>
                            <p className='text-[20px] font-semibold text-[#1F2A36]'>{value.position}</p>
                            <p className='text-[18px] font-normal text-[#46505C]'>{value.company}</p>
                            <p className='text-[16px] font-normal text-[#9EA0A5]'>{value.work_month} {value.work_year}</p>
                            <p className='text-[14px] font-normal text-[#1F2A36]'>{value.description}</p>
                            {index !== experience.length-1 && (<div className='border-b border-solid border-[#E2E5ED] border-x-0 border-t-0 w-[520px]'></div>)}
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default MyExperience
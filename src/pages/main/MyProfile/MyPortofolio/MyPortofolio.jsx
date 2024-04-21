import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MyPortofolio = () => {
    const { id } = useParams()
    const [portofolio, setPortofolio] = useState([])
    const [image, setImage] = useState('/src/assets/Main/app3.png')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axios.get(`${import.meta.env.VITE_BE_URL}/portfolio/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                setLoading(false)
                console.log('Show res contain portofolio');
                console.log(res);
                setPortofolio(res.data.data)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.response);
                alert('Something wrong')
            })
    }, [])
    return (
        <div className='w-[693px] h-auto flex justify-start flex-wrap gap-3 phone:max-tablet:max-w-[640px] phone:max-tablet:flex-col phone:max-tablet:items-center'>
            {loading === true ? (<h1 className='font-bold text-5xl mx-auto'>LOADING....</h1>) :
                portofolio.map((value, index) => (
                    <div key={index} className='w-[219px] h-auto flex flex-col'>
                        {value.image === "" ? (<img src={image} alt="image" className='w-[219px] h-[148px] object-cover rounded-[4px]' />) : (<img src={value.image} alt="image" className='w-[219px] h-[148px] object-cover rounded-[4px]' />) }
                        <p className='text-center text-[14px] font-normal text-[#1F2A36]'>{value.application}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default MyPortofolio
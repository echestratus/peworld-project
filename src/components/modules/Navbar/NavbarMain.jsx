import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarMain = () => {
    const [id, setId] = useState('')
    const [photo, setPhoto] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        axios.get(`${import.meta.env.VITE_BE_URL}/workers/profile`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then((res) => {
                setLoading(false)
                console.log(res.data.data);
                setPhoto(res.data.data.photo)
                setId(res.data.data.id)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.response);
                alert(`Can't fetch data`)
            })
    }, [])
    return (
        <div className='bg-white w-full h-auto flex justify-center'>
            <nav className='w-[1140px] h-auto bg-white flex justify-between items-center'>
                <div className='container w-[127px] h-[35px]'>
                    <img src="/src/assets/Main/peworldBlue.svg" alt="Peworld" onClick={() => navigate(`/`)} className='object-cover w-full h-full hover:cursor-pointer' />
                </div>
                <ul className='flex items-center w-auto h-auto gap-10 list-none'>
                    <li className='w-[24px] h-[24px]'>
                        <img src="/src/assets/Main/bell-logo.svg" alt="bell" className='object-cover w-full h-full' />
                    </li>
                    <li className='w-[24px] h-[24px]'>
                        <img src="/src/assets/Main/mail-logo.svg" alt="mail" className='object-cover w-full h-full' />
                    </li>
                    {photo ? (
                        <li className='w-[32px] h-[32px] hover:cursor-pointer' onClick={()=>navigate(`/main/myprofile/${id}/portofolio/${id}`)}>
                            <img src={photo} alt="user" className='object-cover rounded-full w-full h-full' />
                        </li>
                    ) : (
                        <li className='w-[32px] h-[32px] hover:cursor-pointer' onClick={()=>navigate(`/main/myprofile/${id}/portofolio/${id}`)} >
                            <img src="/src/assets/Main/icon_user_whiteongrey.svg" alt="user" className='object-cover w-full h-full rounded-full hover:cursor-pointer'  />
                        </li>
                    )}

                </ul>

            </nav>
        </div >
    )
}

export default NavbarMain
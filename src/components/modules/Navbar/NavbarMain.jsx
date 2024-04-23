import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { profileWorkerAction } from '../../../config/redux/action/profileWorkerAction'
import { profileRecruiterAction } from '../../../config/redux/action/profileRecruiterAction'

const NavbarMain = () => {
    // const [id, setId] = useState('')
    // const [photo, setPhoto] = useState('')
    // const [loading, setLoading] = useState(true)
    const { loading: loadingWorker, myDetail: myDetailWorker } = useSelector((state) => state.profileWorker)
    const { loading: loadingRecruiter, myDetail: myDetailRecruiter } = useSelector((state) => state.profileRecruiter)
    const navigate = useNavigate()
    const [role, setRole] = useState(localStorage.getItem('role'))
    const dispatch = useDispatch()
    useEffect(() => {
        if (role === 'worker') {
            dispatch(profileWorkerAction())
        } else if (role === 'recruiter') {
            dispatch(profileRecruiterAction())
        }

    }, [])
    return (
        <div className='bg-white w-full h-auto flex justify-center phone:max-tablet:max-w-[640px]'>
            <nav className='w-[1140px] h-auto bg-white flex justify-between items-center phone:max-tablet:max-w-[640px]'>
                <div className='container w-[127px] h-[35px] phone:max-tablet:ml-3'>
                    <img src="/src/assets/Main/peworldBlue.svg" alt="Peworld" onClick={() => navigate(`/`)} className='object-cover w-full h-full hover:cursor-pointer' />
                </div>
                {loadingRecruiter === true || loadingWorker === true ? (
                    <ul className='flex items-center w-auto h-auto gap-10 list-none phone:max-tablet:gap-5 phone:max-tablet:mr-3'>
                        <li className='w-[24px] h-[24px]'>
                            <img src="/src/assets/Main/bell-logo.svg" alt="bell" className='object-cover w-full h-full' />
                        </li>
                        <li className='w-[24px] h-[24px]'>
                            <img src="/src/assets/Main/mail-logo.svg" alt="mail" className='object-cover w-full h-full' />
                        </li>
                        <li className='w-[32px] h-[32px] hover:cursor-pointer' onClick={() => navigate(`/main/myprofile/${myDetailWorker.id}/portofolio`)} >
                            <img src="/src/assets/Main/icon_user_whiteongrey.svg" alt="user" className='object-cover w-full h-full rounded-full hover:cursor-pointer' />
                        </li>
                    </ul>
                ) :
                    role === 'worker' ? (
                        <ul className='flex items-center w-auto h-auto gap-10 list-none phone:max-tablet:gap-5 phone:max-tablet:mr-3'>
                            <li className='w-[24px] h-[24px]'>
                                <img src="/src/assets/Main/bell-logo.svg" alt="bell" className='object-cover w-full h-full' />
                            </li>
                            <li className='w-[24px] h-[24px]'>
                                <img src="/src/assets/Main/mail-logo.svg" alt="mail" className='object-cover w-full h-full' />
                            </li>
                            {myDetailWorker.photo ? (
                                <li className='w-[32px] h-[32px] hover:cursor-pointer' onClick={() => navigate(`/main/myprofile/${myDetailWorker.id}/portofolio`)}>
                                    <img src={myDetailWorker.photo} alt="user" className='object-cover rounded-full w-full h-full' />
                                </li>
                            ) : (
                                <li className='w-[32px] h-[32px] hover:cursor-pointer' onClick={() => navigate(`/main/myprofile/${myDetailWorker.id}/portofolio`)} >
                                    <img src="/src/assets/Main/icon_user_whiteongrey.svg" alt="user" className='object-cover w-full h-full rounded-full hover:cursor-pointer' />
                                </li>
                            )}

                        </ul>
                    ) : role === 'recruiter' ? (
                        <ul className='flex items-center w-auto h-auto gap-10 list-none phone:max-tablet:gap-5 phone:max-tablet:mr-3'>
                            <li className='w-[24px] h-[24px]'>
                                <img src="/src/assets/Main/bell-logo.svg" alt="bell" className='object-cover w-full h-full' />
                            </li>
                            <li className='w-[24px] h-[24px]'>
                                <img src="/src/assets/Main/mail-logo.svg" alt="mail" className='object-cover w-full h-full' />
                            </li>
                            {myDetailRecruiter.photo ? (
                                <li className='w-[32px] h-[32px] hover:cursor-pointer' onClick={() => navigate(`/main/recruiterprofile`)}>
                                    <img src={myDetailRecruiter.photo} alt="user" className='object-cover rounded-full w-full h-full' />
                                </li>
                            ) : (
                                <li className='w-[32px] h-[32px] hover:cursor-pointer' onClick={() => navigate(`/main/recruiterprofile`)} >
                                    <img src="/src/assets/Main/icon_user_whiteongrey.svg" alt="user" className='object-cover w-full h-full rounded-full hover:cursor-pointer' />
                                </li>
                            )}

                        </ul>
                    ) : (
                        <></>
                    )}

            </nav>
        </div >
    )
}

export default NavbarMain
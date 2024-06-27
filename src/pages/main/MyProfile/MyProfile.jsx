import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import CardMyProfile from '../../../components/modules/Footer/CardMyProfile'
import { useDispatch, useSelector } from 'react-redux'
import { profileWorkerAction } from '../../../config/redux/action/profileWorkerAction'
import { getSkillPerIdWorkerAction } from '../../../config/redux/action/getSkillPerIdWorkerAction'
import { ClipLoader } from 'react-spinners'

const MyProfile = () => {
    const {id} = useParams()
    // const [myDetail, setMyDetail] = useState({})
    const {loading, myDetail} = useSelector((state)=>state.profileWorker)
    // const [mySkill, setMySkill] = useState([])
    const {loading: loadingSkill, skills: mySkill} = useSelector((state)=>state.getSkillPerIdWorker)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileWorkerAction())
        dispatch(getSkillPerIdWorkerAction(id))

    }, [])
    const handleClickEdit = () => {
        alert(`directed to Edit your profile`)
        navigate(`/main/myprofile/${id}/editprofileworker`)
    }
    return (
        <div className='w-full h-auto min-h-[1000px] relative bg-[#F6F7F8] max-laptop:w-[100%]'>
            <div className='w-full h-[400px] bg-[#5E50A1] absolute max-laptop:w-[100%]'></div>
            {loading === true || loadingSkill === true ? (
                        <div className='w-full h-[900px] flex justify-center items-center'>
                            <ClipLoader />
                        </div>
            ) : (
                <div className='w-[1140px] h-auto mx-auto flex laptop:justify-between mt-[100px] mb-[400px] max-laptop:mb-[200px] relative max-laptop:w-[90%] phone:max-laptop:flex-col max-laptop:items-center'>
                    <div className='laptop:w-[357px] max-laptop:w-[90%] h-auto rounded-md'>
                        <CardMyProfile workersDetail={myDetail} workersSkill={mySkill} onClick={handleClickEdit}/>
                    </div>
                    <div className='laptop:w-[753px] h-auto flex flex-col items-center mx-auto rounded-md max-laptop:w-[100%] phone:max-laptop:mt-5'>
                        <div className='w-full h-auto min-h-[516px] flex flex-col items-center rounded-md bg-white max-laptop:px-5 max-laptop:box-border'>
                            <nav className='w-full h-auto relative mt-10 mb-5'>
                                <ul className='list-none flex justify-start items-center gap-5 relative'>
                                    <li><NavLink to={`/main/myprofile/${id}/portofolio`} className='no-underline text-[22px] font-semibold text-[#1F2A36] pb-2'>Portofolio</NavLink></li>
                                    <li><NavLink to={`/main/myprofile/${id}/experience`} className='no-underline text-[22px] font-semibold text-[#1F2A36] pb-2'>Experience</NavLink></li>
                                </ul>
                            </nav>
                            <Outlet />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyProfile
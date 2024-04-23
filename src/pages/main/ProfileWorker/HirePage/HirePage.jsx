import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardHire from '../../../../components/modules/Card/CardHire'
import ButtonAuth from '../../../../components/base/Button/ButtonAuth'
import Input from '../../../../components/base/Input/Input'
import TextArea from '../../../../components/base/Input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolioPerIdWorkerAction } from '../../../../config/redux/action/getPortfolioPerIdWorkerAction'
import { getSkillPerIdWorkerAction } from '../../../../config/redux/action/getSkillPerIdWorkerAction'
import { detailWorkerAction } from '../../../../config/redux/action/detailWorkerAction'
import { addHireAction } from '../../../../config/redux/action/addHireAction'

const HirePage = () => {
    const { id } = useParams()
    // const [workersDetail, setWorkersDetail] = useState({})
    const {loading, workersDetail} = useSelector((state)=>state.detailWorker)
    // const [workersSkill, setWorkersSkill] = useState([])
    const {loading: loadingSkill, skills:workersSkill} = useSelector((state)=>state.getSkillPerIdWorker)
    const [formHire, setFormHire] = useState({
        message_purpose: "",
        worker_id: id,
        name: "",
        email: "",
        phone: "",
        description: ""
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailWorkerAction(id))
        dispatch(getSkillPerIdWorkerAction(id))
    }, [])
    const handleChangeHire = (e) =>{
        setFormHire({
            ...formHire,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmitHire = () =>{
        dispatch(addHireAction(formHire, setFormHire))
    }
    return (
        <div className='w-full h-auto min-h-[1000px] relative bg-[#F6F7F8]'>
            {loading === true || loadingSkill === true ? (
                <h1 className='font-extrabold text-5xl text-center relative'>LOADING....</h1>
            ) : (
                <div className='w-[1140px] h-auto mx-auto flex justify-between mt-[100px] mb-[400px] relative'>
                    <div className='container w-[357px] h-auto rounded-md'>
                        <CardHire workersDetail={workersDetail} workersSkill={workersSkill} />
                    </div>
                    <div className='container w-[753px] h-auto flex flex-col items-center'>
                        <div className='w-full h-auto min-h-[516px] mb-10 flex flex-col items-center'>
                            <nav className='w-full h-auto relative mb-5'>
                                <p className='text-[32px] font-semibold text-[#1F2A36] ml-7'>Contact {workersDetail.name}</p>
                                <p className='text-[18px] text-[#46505C] font-normal ml-7'>Please complete these informations before keep in touch with {workersDetail.name}. After being approved you can directly message the talent.</p>
                            </nav>
                            <div className='container w-[693px] h-auto flex flex-col gap-10 mb-16'>
                                <Input type='text' name='message_purpose' label="Purpose of this message" value={formHire.message_purpose} onChange={handleChangeHire} placeholder="Input your purpose" />
                                <Input type='text' name='name' label="Name" value={formHire.name} onChange={handleChangeHire} placeholder="Input complete name" />
                                <Input type='email' name='email' label="Email" value={formHire.email} onChange={handleChangeHire} placeholder="Input email" />
                                <Input type='text' name='phone' label="Phone number" value={formHire.phone} onChange={handleChangeHire} placeholder="Input phone number" />
                                <div className='w-[693px] h-[144px] mb-10'>
                                    <TextArea type='text' name='description' label="Description" value={formHire.description} onChange={handleChangeHire} placeholder="Input description/Explain more detail" />
                                </div>
                                <ButtonAuth onClick={handleSubmitHire}>Hire</ButtonAuth>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default HirePage
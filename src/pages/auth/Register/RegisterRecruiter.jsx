import React, { useState } from 'react'
import Input from '../../../components/base/Input/Input'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ButtonAuth from '../../../components/base/Button/ButtonAuth'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { registerRecruiterAction } from '../../../config/redux/action/registerRecruiterAction'

const RegisterRecruiter = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading} = useSelector((state)=>state.registerRecruiter)
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    position: "",
    phone: "",
    confirmPass: ""
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () => {
    dispatch(registerRecruiterAction(form, navigate))
  }
  return (
    <div className='w-[570px] h-auto flex flex-col justify-center max-laptop:w-[90%] max-laptop:max-w-[768px]'>
      <h2 className='font-semibold text-[32px] text-[#1F2A36] mb-5'>Hello, Pewpeople</h2>
      <p className='mb-10 font-normal text-lg text-[#46505C]'>Discover top-tier IT talent effortlessly on our website and elevate your projects to new heights!</p>
      <div className='w-full h-auto flex flex-col gap-8 mb-16'>
        <Input type='text' name='name' placeholder='Input fullname' label='Name' value={form.name} onChange={handleChange} />
        <Input type='email' name='email' placeholder='Input email address' label='Email' value={form.email} onChange={handleChange} />
        <Input type='text' name='company' placeholder='Input company' label='Company' value={form.company} onChange={handleChange} />
        <Input type='text' name='position' placeholder='Input position' label='Position' value={form.position} onChange={handleChange} />
        <Input type='text' name='phone' placeholder='Input phone' label='Phone number' value={form.phone} onChange={handleChange} />
        <Input type='password' name='password' placeholder='Input password' label='Password' value={form.password} onChange={handleChange} />
        <Input type='password' name='confirmPass' placeholder='Input password confirmation' label='Confirm password' value={form.confirmPass} onChange={handleChange} />
      </div>
      <div className='w-full h-[50px]'>
        <ButtonAuth onClick={handleSubmit}>{loading ? "Loading" : "Register"}</ButtonAuth>
      </div>
      <p className='mt-10 text-center font-normal text-base'>Already have an account? <Link to='/auth/login' className='text-[#FBB017] no-underline'>Login here</Link></p>

    </div>
  )
}

export default RegisterRecruiter
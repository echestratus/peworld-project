import React, { useState } from 'react'
import Input from '../../../components/base/Input/Input'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ButtonAuth from '../../../components/base/Button/ButtonAuth'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../../config/redux/action/loginAction'

const Login = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector((state)=>state.login) 
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        dispatch(loginAction(form, navigate))
    }
  return (
    <div className='w-[570px] h-auto flex flex-col justify-center'>
        <h2 className='font-semibold text-[32px] text-[#1F2A36] mb-5'>Hello, Pewpeople</h2>
        <p className='mb-10 font-normal text-lg text-[#46505C]'>Discover top-tier IT talent effortlessly on our website and elevate your projects to new heights!</p>
        <div className='flex flex-col gap-8'>
            <Input type='email' name='email' placeholder='Input email address' label='Email' value={form.email} onChange={handleChange} />
            <Input type='password' name='password' placeholder='Input password' label='Password' value={form.password} onChange={handleChange} />
        </div>
        <p className='my-8 text-right font-normal text-base text-[#1F2A36]'>Forgot password?</p>
        <ButtonAuth onClick={handleSubmit}>{loading ? "Loading" : "Login"}</ButtonAuth>
        <p className='mt-8 text-center font-normal text-base'>Don't have an account yet? <Link to='/auth/register/registerworker' className='text-[#FBB017] no-underline'>Register here</Link></p>
        
    </div>
  )
}

export default Login
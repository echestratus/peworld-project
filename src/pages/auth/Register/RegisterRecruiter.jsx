import React, { useState } from 'react'
import Input from '../../../components/base/Input/Input'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ButtonAuth from '../../../components/base/Button/ButtonAuth'
import axios from 'axios'

const RegisterRecruiter = () => {
  const navigate = useNavigate()
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
    if (form.password !== form.confirmPass) {
      alert(`Confirm password should be the same as Password you have inputted`)
      navigate(`/auth/register/registerrecruiter`)
    } else {
      axios.post(`${import.meta.env.VITE_BE_URL}/recruiters/register`, {
        email: form.email,
        password: form.password,
        name: form.name,
        company: form.company,
        position: form.position,
        phone: form.phone,
      })
        .then((res) => {
          console.log(res);
          alert(`Register Succeed`)
          navigate(`/auth/login`)
        })
        .catch((err) => {
          console.log(err.response);
          alert(`Register Failed`)
        })
    }
  }
  return (
    <div className='w-[570px] h-auto flex flex-col justify-center'>
      <h2 className='font-semibold text-[32px] text-[#1F2A36] mb-5'>Hello, Pewpeople</h2>
      <p className='mb-10 font-normal text-lg text-[#46505C]'>Discover top-tier IT talent effortlessly on our website and elevate your projects to new heights!</p>
      <div className='flex flex-col gap-8 mb-16'>
        <Input type='text' name='name' placeholder='Input fullname' label='Name' value={form.name} onChange={handleChange} />
        <Input type='email' name='email' placeholder='Input email address' label='Email' value={form.email} onChange={handleChange} />
        <Input type='text' name='company' placeholder='Input company' label='Company' value={form.company} onChange={handleChange} />
        <Input type='text' name='position' placeholder='Input position' label='Position' value={form.position} onChange={handleChange} />
        <Input type='text' name='phone' placeholder='Input phone' label='Phone number' value={form.phone} onChange={handleChange} />
        <Input type='password' name='password' placeholder='Input password' label='Password' value={form.password} onChange={handleChange} />
        <Input type='password' name='confirmPass' placeholder='Input password confirmation' label='Confirm password' value={form.confirmPass} onChange={handleChange} />
      </div>
      <ButtonAuth onClick={handleSubmit}>Register</ButtonAuth>
      <p className='mt-10 text-center font-normal text-base'>Already have an account? <Link to='/auth/login' className='text-[#FBB017] no-underline'>Login here</Link></p>

    </div>
  )
}

export default RegisterRecruiter
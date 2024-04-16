import axios from 'axios'
import React, { useEffect } from 'react'
import ButtonMain from '../../../components/base/Button/ButtonMain'

const EditProfileWorker = () => {
  const handleClickSubmit = () => {
    axios.put(`${import.meta.env.VITE_BE_URL}/workers/profile`, {
      name: "Abdul Qodir",
      job_desk:"Fullstack Web Developer",
      domicile: "Lampung",
      workplace: "PT. Sumber Logam",
      description: "I Love Reading"
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res)=>{
      console.log('show res PUT');
      console.log(res);
      alert('Update succeed')
    })
    .catch((err)=>{
      console.log(err.response);
      alert('Update failed')
    })
  }
  // useEffect(()=>{
    
  // }, [])
  return (
    <div>
      EditProfileWorker
      <div className='w-[500px] h-[500px]'>
          <ButtonMain onClick={handleClickSubmit}>Simpan</ButtonMain>
      </div>
    </div>
  )
}

export default EditProfileWorker
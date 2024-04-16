import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Login from './pages/auth/Login/Login'
import Register from './pages/auth/Register/Register'
import LandingPage from './pages/LandingPage/LandingPage'
import Main from './pages/main/Main'
import EditProfileCompany from './pages/main/EditProfileCompany/EditProfileCompany'
import EditProfileWorker from './pages/main/EditProfileWorker/EditProfileWorker'
import ProfileWorker from './pages/main/ProfileWorker/ProfileWorker'
import Home from './pages/main/Home/Home'
import WorkerPortofolio from './pages/main/ProfileWorker/WorkerPortofolio/WorkerPortofolio'
import WorkerExperience from './pages/main/ProfileWorker/WorkerExperience/WorkerExperience'
import MyProfile from './pages/main/MyProfile/MyProfile'
import MyPortofolio from './pages/main/MyProfile/MyPortofolio/MyPortofolio'
import MyExperience from './pages/main/MyProfile/MyExperience/MyExperience'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/' element={<LandingPage />} />
        <Route path='/main' element={<Main />}>
          <Route path='myprofile/:id' element={<MyProfile />}>
            <Route path='portofolio/:id' element={<MyPortofolio />} />
            <Route path='experience/:id' element={<MyExperience />} />
          </Route>
          <Route path='editprofilecompany' element={<EditProfileCompany />} />
          <Route path='myprofile/:id/editprofileworker/' element={<EditProfileWorker />} />
          <Route path='home' element={<Home />} />
          <Route path='profileworker/:id' element={<ProfileWorker />} >
            <Route path='portofolio/:id' element={<WorkerPortofolio />} />
            <Route path='experience/:id' element={<WorkerExperience />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from '../../pages/auth/Auth'
import Login from '../../pages/auth/Login/Login'
import Register from '../../pages/auth/Register/Register'
import RegisterWorker from '../../pages/auth/Register/RegisterWorker'
import RegisterRecruiter from '../../pages/auth/Register/RegisterRecruiter'
import LandingPage from '../../pages/LandingPage/LandingPage'
import Main from '../../pages/main/Main'
import EditProfileCompany from '../../pages/main/EditProfileCompany/EditProfileCompany'
import EditProfileWorker from '../../pages/main/EditProfileWorker/EditProfileWorker'
import ProfileWorker from '../../pages/main/ProfileWorker/ProfileWorker'
import Home from '../../pages/main/Home/Home'
import WorkerPortofolio from '../../pages/main/ProfileWorker/WorkerPortofolio/WorkerPortofolio'
import WorkerExperience from '../../pages/main/ProfileWorker/WorkerExperience/WorkerExperience'
import MyProfile from '../../pages/main/MyProfile/MyProfile'
import MyPortofolio from '../../pages/main/MyProfile/MyPortofolio/MyPortofolio'
import MyExperience from '../../pages/main/MyProfile/MyExperience/MyExperience'
import RecruiterProfile from '../../pages/main/RecruiterProfile/RecruiterProfile'
import ProtectedRoute from '../../components/modules/ProtectedRoute/ProtectedRoute'
import HirePage from '../../pages/main/ProfileWorker/HirePage/HirePage'
import RootLandingPage from '../../pages/LandingPage/RootLandingPage'



const RouterPeworld = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth' element={<Auth />} >
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />}>
                        <Route path='registerworker' element={<RegisterWorker />} />
                        <Route path='registerrecruiter' element={<RegisterRecruiter />} />
                    </Route>
                </Route>
                <Route path='/' element={<RootLandingPage />} />
                <Route path='/main' element={<ProtectedRoute><Main /></ProtectedRoute>}>
                    <Route path='myprofile/:id' element={<MyProfile />}>
                        <Route path='portofolio' element={<MyPortofolio />} />
                        <Route path='experience' element={<MyExperience />} />
                    </Route>
                    <Route path='myprofile/:id/editprofileworker/' element={<EditProfileWorker />} />
                    <Route path='home' element={<Home />} />
                    <Route path='profileworker/:id' element={<ProfileWorker />} >
                        <Route path='portofolio' element={<WorkerPortofolio />} />
                        <Route path='experience' element={<WorkerExperience />} />
                    </Route>
                    <Route path='profileworker/:id/hire' element={<HirePage />} />
                    <Route path='recruiterprofile' element={<RecruiterProfile />} />
                    <Route path='recruiterprofile/editprofilecompany' element={<EditProfileCompany />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPeworld
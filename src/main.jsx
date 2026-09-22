import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Userlogin from './modules/login/Userlogin'
import "./css/input.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Forget from './modules/login/Forget'
import Register from './modules/login/Register'
import Landingpage from './modules/Dashboard/Landingpage'
import Dashboard from './modules/Dashboard/Dashboard'
import Teacher from './modules/Sidebarpages/Teacher'
import Student from './modules/Sidebarpages/Student'
import Attendance from './modules/Sidebarpages/Attendance'
import Finance from './modules/Sidebarpages/Finance'
import Registration from './modules/Dashboard/Registration'
import TeacherReg from './modules/Dashboard/TeacherReg'
import Notice from './modules/Sidebarpages/Notice'
import Studentd from './modules/Dashboard/Studentd'
import ErrorPage from './modules/Dashboard/Errorpage'

createRoot(document.getElementById('root')).render(
<StrictMode>

    <BrowserRouter>    
      <Routes>
          <Route path='' element={<Userlogin/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='forget' element={<Forget/>}></Route>
          <Route path='dashboard' element={<Landingpage/>}>
          
              <Route path='' element={<Dashboard/>}></Route>
              <Route path='teacher' element={<Teacher/>}></Route>
              <Route path='student' element={<Student/>}></Route>
              <Route path='Attendance' element={<Attendance/>}></Route>
              <Route path='finance' element={<Finance/>}></Route>
              <Route path='notice' element={<Notice/>}></Route>
              <Route path='studentd' element={<Studentd/>}></Route>
              <Route path='registration' element={<Registration/>}></Route>
              <Route path='teacherreg' element={<TeacherReg/>}></Route>

          </Route>
          <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    
    </BrowserRouter>

</StrictMode>
  
)

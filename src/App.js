import React from 'react'
import { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import LoginForm from './Components/Login/LoginForm/LoginForm'
import {Routes,Route} from 'react-router-dom'
import RegisterUser from './Components/Users/RegisterUser'
import CourseRegistration from './Components/Courses/CourseRegistration'
import CA202 from './Components/Class/CA202'
import TeacherAttendance from './Components/Teacher/TeacherAttendance'
import TeacherProfile from './Components/Teacher/TeacherProfile'
import AttendanceWeekly from './Components/Reports/AttendanceWeekly'
import AttendanceMonthly from './Components/Reports/AttendanceMonthly'
import SystemAuthority from './Components/Authority/SystemAuthority'
import Dashboard from './Components/Dashboard/Dashboard'
// import CA203 from './Components/Class/CA203'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
    
  return (
    
    <div>\
      {isLoggedIn ? (
      <>
        <Header />
        <Sidebar user={user} setUser={user}/>
        <div className='container-content'>
      <div className='content'> 
          <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/user' element={<RegisterUser/>}/>
              <Route path='/courses' element={<CourseRegistration/>}/>
              <Route path='/teacherAttendance' element={<TeacherAttendance/>}/>
              <Route path='/courses/:id' element={<CA202/>}/>
              {/* <Route path='/courses/CA203' element={<CA203/>}/> */}
              <Route path='/attendeceWeekly' element={<AttendanceWeekly/>}/>
              <Route path='/attendenceMonthly' element={<AttendanceMonthly/>}/>
              <Route path='/systemAuthority' element={<SystemAuthority/>}/>
              <Route path='/lectureProfile' element={<TeacherProfile user={user} setUser={setUser}/>}/>
              {/* <Route path='/' element={ <LoginForm/>}/> */}
          </Routes>

      </div>
    </div>
      </>
    ) : (
      <LoginForm setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      
    )}

   
        
        
 
    
    </div>
  )
}

export default App

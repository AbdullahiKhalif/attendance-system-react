import React from 'react'
import {Link} from 'react-router-dom'
import Profile from '../../images/profile.png'
// SIdebar component
const Sidebar = (props) => {
  return (
    <div className='sidebar'>
        <div className="sidebar-content">
                <div className="profile">
                    <img src={Profile} alt="" />
                    <h1 className='lecture-name'>{props.user}</h1>
                    <h4 className='lecture-id'>Teacher</h4>
                </div>
                
                <div className='navbar' style={{marginTop: '10px'}}>
                <ul className='navbar-items'>
                    <li> <i className='fas fa-home'></i> <Link to="/">Dashboard</Link></li>
                    <li> <i className='fas fa-users'></i> <Link to="/user">Users</Link></li>
                    <li> <i className='fas fa-box'></i> <Link to="/courses">Courses</Link></li>
                    <li> <i className='fa fa-list'></i> <Link to="/teacherAttendance">Teacher Attendance</Link></li>
                    <li> <i className='fas fa-qrcode'></i> <Link to="/attendeceWeekly">Attendance Weekly</Link></li>
                    <li> <i className='fas fa-clock'></i> <Link to="/attendenceMonthly">Attendence Monthly</Link></li>
                    <li> <i className='fas fa-lock'></i> <Link to="/systemAuthority">System Authority</Link></li>
                    <li> <i className='fas fa-user-circle'></i> <Link to="/lectureProfile">Lecture Profile</Link></li>
                    {/* <li> <i className='fas fa-power-off'></i> <Link to="/">Logout</Link></li> */}
                </ul>
            
            </div>
        </div>

    </div>
  )
}

export default Sidebar
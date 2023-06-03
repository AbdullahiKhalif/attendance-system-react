import React from 'react'
import LecttureProfile from '../../images/profile.png'
import './TeacherProfile.css'
const TeacherProfile = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
            <div className='card' style={{minHeight:'80vh', backgroundColor:'#fff'}}>

            <div className='profile'>
              <div className='img-profile'>
                <img src={LecttureProfile} alt=""/>
              </div>

              <div className='profile-content'>
                <h3>{props.user}</h3>
                <p>Title: Teacher</p>
                <p>By Area Of Computer Application</p>
              </div>
              <div className="buttons">
                <button className='btn1'>Follow</button>
                <button className='btn2'>Manage</button>
              </div>
            </div>

            </div>
        </div>

        <div className="col-sm-8">
          <div className="card" style={{minHeight:'70vh'}}>
            <h5 className='fs-5 text-center mt-1 fw-bold'>Lecture Details</h5>

            <div className="responsice-table">
              <table className='table'>
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td>{props.user}</td>
                  </tr>
                  <tr>
                    <td>Title</td>
                    <td>Teacher</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>Computer Application</td>
                  </tr>
                  <tr>
                    <td>Courses</td>
                    <td>Web Application Using React Js</td>
                  </tr>
                  <tr>
                    <td>Classes</td>
                    <td>CA202, CA203, CA2010</td>
                  </tr>
                  
                  <tr>
                    <td>Email</td>
                    <td>{props.user}.just@gmail.com</td>
                  </tr>
                  
                  <tr>
                    <td>Phone</td>
                    <td>+252 616 777 399</td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td>JT2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile

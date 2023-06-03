import React from 'react'
import TeacherAttendanceTable from '../Tables/TeacherAttendanceTable'

const TeacherAttendence = () => {
  return (
    <div>
      <div className='text-center'>
        <h5 className='fs-5 fw-bold'>Teacher Attendance Sheet</h5>
        <h6 className='fs-6 text-primary'>View This Form</h6>
      </div>

      <div className="row">
        <div className="col-sm-4">
            <input type="search" className='form-control rounded' placeholder='Search'/>
        </div>
      </div>
      
    
    {/* show teacher table */}
    <div className='mt-2'>
    <TeacherAttendanceTable />
    </div>

    </div>
  )
}

export default TeacherAttendence

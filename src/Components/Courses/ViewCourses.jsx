import React from 'react'
import  {Link} from 'react-router-dom'

const ViewCourses = ({user}) => {
    console.log("Lecture NameL "+ user)
  return (
    <div>

        <div className="row">

            <div className="col-sm-4 col-lg-4 col-md-4" >
                <div className="card bg-success" style={{height:'200px',gap:'10px'}}>
                    <div className="card-body">
                    <div className='mt-5 mb-5'>
                    <div className='courses-header d-flex justify-content-between'>
                    <h4 className='text-light fw-bold fs-4'>React Js </h4>
                    <i class="fab fa-react text-light" style={{fontSize:'65px', marginTop:'-20px'}}></i>
                    </div>
                    <h5 className='text-light fs-5'>Lecture: {user}</h5>
                    <h6 className='text-light fs-6'>CA202</h6>
               </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 col-lg-4 col-md-4" >
                <div className="card bg-primary" style={{height:'200px',gap:'10px'}}>
                    <div className="card-body">
                    <div className='mt-5 mb-5'>
                    <div className='courses-header d-flex justify-content-between'>
                    <h4 className='text-light fw-bold fs-4'>Advanced Java </h4>
                    <i class="fab fa-java text-light" style={{fontSize:'65px', marginTop:'-20px'}}></i>
                    </div>
                    <h5 className='text-light fs-5'>Lecture: {user}</h5>
                    <h6 className='text-light fs-6'>Class: CA203</h6>
               </div>
                    </div>
                </div>
            </div>


            <div className="col-sm-4 col-lg-4 col-md-4" >
                <div className="card bg-secondary" style={{height:'200px',gap:'10px'}}>
                    <div className="card-body">
                    <div className='mt-5 mb-5'>
                    <div className='courses-header d-flex justify-content-between'>
                    <h4 className='text-light fw-bold fs-4'>Research </h4>
                    <i className='fas fa-book-open text-light'style={{fontSize:'65px', marginTop:'-20px'}}></i>
                    </div>
                    <h5 className='text-light fs-5'>Lecture: {user}</h5>
                    <h6 className='text-light fs-6'>Class: CA204</h6>
               </div>
                    </div>
                </div>
            </div>



        </div>
      
    </div>
  )
}

export default ViewCourses

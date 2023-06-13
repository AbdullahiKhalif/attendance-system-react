import React from 'react'
import '../../style.css'

const Dashboard = () => {
  return (
    <div>
          <div className="row">

            <div className="col-sm-3 col-lg-3 col-md-3" >
                <div className="card bg-success" style={{height:'150px',gap:'10px'}}>
                    <div className="card-body">
                    <div className='mt-3 mb-5'>
                    <div className='courses-header d-flex justify-content-between'>
                    <h4 className='text-light fw-bold fs-4'>Users </h4>
                    <i class="fas fa-users text-light" style={{fontSize:'45px', marginTop:'0px'}}></i>
                    </div>
                    <h5 className='text-light fs-5 text-center mt-3'><span className='text-light p-2 rounded fw-bold'>54</span></h5>
              
            </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-3 col-lg-3 col-md-3" >
                <div className="card bg-primary" style={{height:'150px',gap:'10px'}}>
                    <div className="card-body">
                    <div className='mt-3 mb-5'>
                    <div className='courses-header d-flex justify-content-between'>
                    <h4 className='text-light fw-bold fs-4'>Courses </h4>
                    <i class="fas fa-box text-light" style={{fontSize:'45px', marginTop:'-10px'}}></i>
                    </div>
                    <h5 className='text-light fs-5 text-center mt-4'><span className='text-light p-2 rounded fw-bold'> 3</span></h5>
                   
            </div>
                    </div>
                </div>
            </div>


            <div className="col-sm-3 col-lg-3 col-md-3" >
                <div className="card bg-secondary" style={{height:'150px',gap:'10px'}}>
                    <div className="card-body">
                    <div className='mt-3 mb-5'>
                    <div className='courses-header d-flex justify-content-between'>
                    <h4 className='text-light fw-bold fs-5'>Teacher Attendance </h4>
                    <i className='fa fa-list text-light'style={{fontSize:'35px', marginTop:'0px'}}></i>
                    </div>
                    <h5 className='text-light fs-5 text-center mt-3'><span className='text-light p-1 rounded fw-bold'>97%</span></h5>
                   
            </div>
            
            
                    </div>
                </div>
            </div>

            <div className="col-sm-3 col-lg-3 col-md-3" >
                <div className="card bg-danger" style={{height:'150px',gap:'10px'}}>
                    <div className="card-body">
                    <div className='mt-3 mb-5'>
                    <div className='courses-header d-flex justify-content-between'>
                    <h4 className='text-light fw-bold fs-5'>Attendance Weekly</h4>
                    <i className='fas fa-qrcode text-light'style={{fontSize:'35px', marginTop:'0px'}}></i>
                    </div>
                    <h5 className='text-light fs-5 text-center mt-3'><span className='text-light p-1 rounded fw-bold'>Prenset 91%</span></h5>
                   
            </div>
            
            
                    </div>
                </div>
            </div>

            <div className="row mt-2">
            <div className="col-sm-3 col-lg-3 col-md-3" >
                <div className="card bg-warning" style={{height:'150px',gap:'10px'}}>
                    <div className="card-body">
                    <div className='mt-3 mb-5'>
                    <div className='courses-header d-flex justify-content-between'>
                    <h4 className='fw-bold fs-4'>Attendance Monthly</h4>
                    <i className='fa fa-clock text-light'style={{fontSize:'35px', marginTop:'0px'}}></i>
                    </div>
                    <h5 className='text-light fs-5 text-center mt-3'><span className='text-light p-1 rounded fw-bold'>Prenset 85%</span></h5>
                   
            </div>
            
            
                    </div>
                </div>
            </div>
            </div>



        </div>
    </div>
  )
}

export default Dashboard

import React from 'react'
import CA202List from '../Tables/CA202List'
import Swal from 'sweetalert2';

const CA202 = () => {
    const handleClick  = () => {
        Swal.fire({
            icon: 'success',
            title: 'Success✔',
            text: `Successfully Attended This Class`,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        
            });
    }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="card rounded p-1">
           <div className="card-invert">
           <h5 className='text-dark fs-6 p-1 '>Student Attendence</h5>
           </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="card">
            <div className="card-invent p-1">
                <div className='row mt-2'>
                    <div className="col-sm-3">
                        <h6 className='fs-6'>Class: CA202</h6>
                    </div>
                    <div className="col-sm-6">
                        <h6 className='fs-6'>Course: Web Application Using React</h6>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        Data: <input type="date" className='rounded' style={{border:'1px solid lightgrey',padding:'2px'}}/>
                    </div>
                </div>
            </div>

            <div className="card-block">
                <div className='m-2'>
                    <h6>Total Student: <span className='bg-info p-1 rounded'>55</span></h6>
                    <CA202List/>
                    <button className='btn btn-success btn-hvr mb-2' style={{float:'right', padding:'5px 30px'}} onClick={handleClick}>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CA202

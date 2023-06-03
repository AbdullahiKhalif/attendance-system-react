import React from 'react'

const CourseForm = () => {
  return (
    <div>
      <div className="row">
      <form>
        <div className="col-md-12">
            
                <div className="form-group">
                    <label>Course Name</label>
                    <input type="text" className="form-control" placeholder="Enter Course Name" />
                </div>
        </div> 
        <div className='row'>       
                <div className="form-group">
                    <label>Course Description</label>
                    <input type="text" className="form-control" placeholder="Enter Course Description" />
                </div>
        </div>
        <div className='row'>
                <div className="form-group">
                    <label>Course Category</label>
                    <select className='form-control'>
                        <option value="0">Selecti Option</option>
                        <option value="1">Programming</option>
                        <option value="2">Web Developement</option>
                        <option value="3">Networking</option>
                        <option value="4">Graphic Design</option>
                       
                    </select>
                </div>
        </div>
        <div className='row'>
                <div className="form-group">
                    <label>Course Duration</label>
                    <input type="text" className="form-control" placeholder="Enter Course Duration" />
                </div>
        </div>
        </form>
        </div>
       
      </div>
    
  )
}

export default CourseForm

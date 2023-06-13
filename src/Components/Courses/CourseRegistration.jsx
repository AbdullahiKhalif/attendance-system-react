import React from 'react'
import ViewCourses from './ViewCourses'
import  {Link} from 'react-router-dom'
import { Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import CourseForm from '../Forms/CourseForm';

const CourseRegistration = ({user}) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <div>
      <div className='row'>
       <div className="col-sm-4"></div>
       <div className="col-sm-4"></div>
       <div className="col-sm-4">
       <button className='btn' style={{background:'blue', color:'#fff',float:'right'}} onClick={handleShow}> <i className='fas fa-plus text-light fs-6'></i> Add new Coirses</button>
       </div>
      </div>
      <div className='mt-4'>
        <Link to="CA202" style={{textDecoration:'none'}}>
        {<ViewCourses user={user}/>}
        </Link>
      </div>

    {/* Show modal */}

    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Courses!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CourseForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default CourseRegistration

import React, { useState } from "react";
import UserTable from '../Tables/UserTable';
import { Modal, Button } from "react-bootstrap";
import UserForm from "../Forms/UserForm";

const   RegisterUser = () =>{
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
     <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
        <Button variant="primary" style={{color:'rgba(11, 10, 117, 0.5)',float:'right', padding: '10px 30px'}} className="text-light" onClick={handleShow}>
        Add New User
      </Button>
        </div>
     </div>

    {/* // table users */}
    
    <div className="row">
        <h5 className="text-dark fs-6 fw-bold">All Users List</h5>
        <UserTable />
    </div>


     {/* //modal users */}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm />
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
    </>
  );
}

export default RegisterUser
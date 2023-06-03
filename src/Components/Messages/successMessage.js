import React from 'react';
import {useState,useEffect} from 'react';
import { Alert } from 'react-bootstrap';

const SuccessMessage = (props) => {
    const [show, setShow] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    return (
      <>
        {show && (
          <Alert variant="success">
            Successfully Registered This {props.msg}
          </Alert>
        )}
      </>
    );
}

export default SuccessMessage

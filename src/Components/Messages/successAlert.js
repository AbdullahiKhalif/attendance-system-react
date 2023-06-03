import React from 'react'
import Swal from 'sweetalert2';


const SuccessAlert = (props) => {
  return (
    Swal.fire({
        icon: 'success',
        title: 'Success✔',
        text: `SuccessFully Registered This ${props.msg}`,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
    
      })
  )
}

export default SuccessAlert

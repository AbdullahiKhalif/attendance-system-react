import React from 'react'
import Swal from 'sweetalert2';
const UserTable = () => {
    const handleUpdate = () => {
        Swal.fire(
            'Warning',
            'You are not allowed to update this account.',
            'warning'
  )
    }
    const handleDelate = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success m-1',
              cancelButton: 'btn btn-danger m-1'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }
  return (
    <div>
       <div className="table-responsive">
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Type</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead> 

                <tbody>
                    {/* User 1 */}
                   <tr> 
                        <td>1</td>
                        <td>Abdullahi</td>
                        <td>Khalif</td>
                        <td>Admin</td>
                        <td>khalif123</td>
                        <td>abdullahi.a.khalif@gmail.com</td>
                        <td>618390115</td>
                        <td>
                            <a href="#" className='btn btn-info' onClick={handleUpdate}><i className='fas fa-edit'></i></a>&nbsp;&nbsp;
                            <a href="#" className='btn btn-danger' onClick={handleDelate} ><i className='fas fa-trash'></i></a>
                        </td>
                    </tr>

                     {/* User 2 */}
                   <tr> 
                        <td>2</td>
                        <td>Sadak</td>
                        <td>Rage</td>
                        <td>Student</td>
                        <td>Sadak2023</td>
                        <td>sadak2017@gmail.com</td>
                        <td>616777399</td>
                        <td>
                            <a href="#" className='btn btn-info' onClick={handleUpdate}><i className='fas fa-edit'></i></a>&nbsp;&nbsp;
                            <a href="#" className='btn btn-danger' onClick={handleDelate}><i className='fas fa-trash'></i></a>
                        </td>
                    </tr>

                     {/* User 3 */}
                   <tr> 
                        <td>3</td>
                        <td>Mohamed</td>
                        <td>Geedi</td>
                        <td>Teacher</td>
                        <td>geedi124</td>
                        <td>moha.gedi@gmail.com</td>
                        <td>619019805</td>
                        <td>
                            <a href="#" className='btn btn-info' onClick={handleUpdate}><i className='fas fa-edit'></i></a>&nbsp;&nbsp;
                            <a href="#" className='btn btn-danger' onClick={handleDelate}><i className='fas fa-trash'></i></a>
                        </td>
                    </tr>

                     {/* User 4 */}
                   <tr> 
                        <td>4</td>
                        <td>Ayan</td>
                        <td>Mohamed</td>
                        <td>Admin</td>
                        <td>ayanah2021</td>
                        <td>ayanha2023@gmail.com</td>
                        <td>615555555</td>
                        <td>
                            <a href="#" className='btn btn-info' onClick={handleUpdate}><i className='fas fa-edit'></i></a>&nbsp;&nbsp;
                            <a href="#" className='btn btn-danger' onClick={handleDelate}><i className='fas fa-trash'></i></a>
                        </td>
                    </tr>

                     {/* User 5 */}
                   <tr> 
                        <td>5</td>
                        <td>Iqo</td>
                        <td>Ali</td>
                        <td>secretory</td>
                        <td>iaqruush2020</td>
                        <td>abdullahi.a.khalif@gmail.com</td>
                        <td>61000000</td>
                        <td>
                            <a href="#" className='btn btn-info' onClick={handleUpdate}><i className='fas fa-edit'></i></a>&nbsp;&nbsp;
                            <a href="#" className='btn btn-danger' onClick={handleDelate}><i className='fas fa-trash'></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
           </div>
    </div>
  )
}

export default UserTable

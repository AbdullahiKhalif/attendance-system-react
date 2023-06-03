import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from 'sweetalert2';

const UserForm = () =>{
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [phone,setPhone] = useState('');

  const HandleSubmit = (event)=>{
    event.preventDefault();
    // alert('dahjhhhhhhhhhh')
      if(firstName === '' || lastName ==='' || password === '' || email ==='' || confirmPassword ==='' || phone ===''){
          Swal.fire({
              icon: 'error',
              title: 'error',
              text: `All Fileds Are Rqquired!`,
              confirmButtonColor: '#EB1818',
              confirmButtonText: 'OK'
          
            })

            return;
      }
  
      Swal.fire({
          icon: 'success',
          title: 'Success✔',
          text: `SuccessFully Registered This User`,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
      
          });

          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setPassword('');
          setConfirmPassword('');
  
     
      // <SuccessAlert msg="User"/>
  }
return (
  <div> 
    <form onSubmit={HandleSubmit}>
    <div className="row">

        {/* Column 1 */ }

          <div className="col-sm-6">
              <div className="form-group">
                  <label for="FirstName">First Name*</label>
                  <input type="text"  className='form-control' value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}/>
              </div>
          </div>

          {/* Column 2 */}
          <div className="col-sm-6">
              <div className="form-group">
                  <label for="LastName">Last Name*</label>
                  <input type="text"  className='form-control'  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} />
              </div>
          </div>

        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-12">
              <div className="form-group">
                  <label for="email">User Type*</label>
                  <select className='form-control'>
                      <option value="0">Select Option</option>
                      <option value="Admin">Admin</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Student">Student</option>
                      <option value="secretory">secretory</option>
                  </select>
              </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-12">
              <div className="form-group">
                  <label for="email">Email*</label>
                  <input type="email" className='form-control'  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-12">
              <div className="form-group">
                  <label for="phone">Phone*</label>
                  <input type="number" className='form-control'  value={phone} on 
                  onChange={(e) => setPhone(e.target.value)}/>
              </div>
          </div>
        </div>

        <div className="row">
              <div className="col-sm-12">
              <div className="form-group">
                  <label for="password">password*</label>
                  <input type="password"  className='form-control'  value={password} 
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
          </div>

          {/* Column 2 */}
          <div className="col-sm-12">
              <div className="form-group">
                  <label for="confirmPassword">Confirm Password*</label>
                  <input type="password"  className='form-control'  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
          </div>
        </div>     

    </form>
      
         
   </div>
      
      
)
}

export default UserForm;
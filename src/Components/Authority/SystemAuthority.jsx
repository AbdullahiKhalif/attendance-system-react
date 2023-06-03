import React from 'react'
import './systemAuthority.css'
import Swal from 'sweetalert2';

const SystemAuthority = () => {
    const handleAutorization = () => {
        Swal.fire({
            icon: 'success',
            title: 'Success✔',
            text: `SuccessFully Authorized This User`,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        
            });
    }
  return (
    <div>


    <div className="row">
        <div className="col-xl-12">
            <div className="card">
                
            <div className="card-block table-border-style m-2">
                
            <div className="row">
                <div className="col-sm-12">
                    <select name="type" id="user_id" className="form-control m-1">
                        <option value="0">Select User</option>
                        <option value="Eng Khalif">Eng Khalif </option>
                        <option value="Eng Amiin">Eng Amiin </option>
                        <option value="Eng Sadak">Eng Sadak </option>
                        <option value="Eng Iqro">Eng Iqro </option>
                        <option value="Eng Ayan">Eng Ayan </option>
                        
                    </select>
                </div>


                
            </div>

            <div className="row">
            <div className="col-sm-12">
                <fieldset className="authority-border">
                    <legend className="authority-border">
                        <input type="checkbox" name="all_authority" id="all_authority"/>
                        All Authority
                    </legend>


                    <div className="row" id="authorityArea">
                        <div className="col-sm-4">

                            <fieldset className="authority-border">
                                <legend className ="authority-border">
                                    <input type="checkbox" />
                                    Dashborad
                                </legend>

                                <br/>

                                <label for=""><input type="checkbox" />
                                    Dashborad
                                </label>

                                <div className="link_action">
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Dashborad
                                    </label>
                                </div>
                            </fieldset>
                        
                        </div>

                        <div className="col-sm-4">
                            <fieldset className="authority-border">
                                <legend className="authority-border">
                                    <input type="checkbox" />
                                        Subscriber
                                </legend>
                                <br/>

                                <label for=""><input type="checkbox" /> User</label>

                                <div className="link_action">
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Update User
                                    </label>
                                            <br/>     
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Register User
                                    </label>
                                </div>

                                <label for=""><input type="checkbox" /> Currency</label>

                                <div className="link_action">
                                <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Register Currency
                                </label>
                                <br/>

                                <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Update Currency
                                    </label>
                                </div>



                            </fieldset>
                        </div>

                        <div className="col-sm-4">
                            <fieldset className="authority-border">
                                <legend className="authority-border">
                                    <input type="checkbox" />
                                        Super Admin
                                </legend>
                                <br />
                                <label for=""><input type="checkbox" /> Attendance</label>

                                <div className="link_action">
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Register Attendance
                                    </label>
                                    <br/>
                                    
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Update Attendance
                                    </label>

                                    <br/>
                                    
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Delete Attendance
                                    </label>
                                </div>

                                <label for=""><input type="checkbox" /> Task</label>

                                <div className="link_action">
                                <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Register Task
                                </label>
                                <br/>

                                <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Update Task
                                </label>

                                <br/>

                                <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Delete Task
                                </label>
                                </div>


                                <label for=""><input type="checkbox" />   Subtask</label>

                                <div className="link_action">
                                <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Register Subtask
                                </label>
                                <br/>

                                <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Update Subtask
                                </label>

                                <br/>

                                <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Delete Subtask
                                </label>
                                </div>


                                <label for=""><input type="checkbox" />
                                    User Authority
                                </label>

                                <div className="link_action">
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        User Authority
                                    </label>
                                </div>


                                <label for=""><input type="checkbox"  />
                                    Report Statement
                                </label>

                                <div className="">
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        user Reports
                                    </label>
                                </div>
                                <div className="">
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Weekly Report
                                    </label>
                                </div>
                                <div className="">
                                    <label for=""><input type="checkbox" style={{marginLeft:'25px'}} />
                                        Monthly Report
                                    </label>
                                </div>



                            </fieldset>
                        </div>
                    </div>
                
                    <button className="btn btn-primary m-1" onClick={handleAutorization}>Authorize User</button>

                </fieldset>
            </div>
            </div>
                
            </div>
            </div>
        </div>
    </div>
      


    </div>
  )
}

export default SystemAuthority

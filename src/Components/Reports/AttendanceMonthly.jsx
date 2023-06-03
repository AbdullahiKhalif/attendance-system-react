import React from 'react'
import { useState} from 'react';
import JustLogo from '../../images/logo1.png'    

const AttendanceMonthly = () => {
    const [month,setMonth] = useState();
   
  return (
    <div>
        <div class="row">

            <div class="col-xl-12">
                    <div class="card p-2" style={{backgroundColor:'#fff'}}>

                        <div class="card-block table-border-style">

                       
                        <div class="row">
                            <div class="col-sm-4">
                                <label htmlFor="">Select Statement*</label>
                                <select  id="type" class="form-control">
                                    <option value="0">All</option>
                                    <option value="Custom">Custom</option>
                                </select>
                            </div>

                            <div class="col-sm-4">
                                <label htmlFor="">Select Month*</label>
                               <select className='form-control' onChange={(e) => setMonth(e.target.value)}>
                                <option>Select Month</option>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Oct">Oct</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
                               </select>
                            </div>

                            <div class="col-sm-4">
                                <label htmlFor="">Search</label>
                                <input type="search" className='form-control'/>
                            </div>
                       
                        </div>
                        
                            
                        
                            <div class="table-responsive">
                                <img src={JustLogo} style={{
                                    height:'10%',
                                    width:'50%',
                                    marginLeft:'130px',
                                    objectFit: 'cover',
                                    marginTop:'-15px',
                                    
                                }}/>

                                <h6 className='fs-6 '>Month: <span className='badge bg-info p-2 rounded text-dark'>{month}</span></h6>
                                
                                <table className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Week One</th>
                                        <th>Week Two</th>
                                        <th>Week Three</th>
                                        <th>Week Four</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>C119556</td>
                                        <td>Sadak Rage</td>
                                        <td><span className='badge bg-success text-light p-2'>3</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>2</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>2</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>3</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>75%</span>
                                   <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>25%</span>
                                        </td>

                                        
                                    </tr>


                                    <tr>
                                        <td>C1201120</td>
                                        <td>Abdullahi Khalif</td>
                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>95&</span>
                                   <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>5%</span>
                                        </td>

                                        
                                    </tr>

                                    <tr>
                                        <td>C120800</td>
                                        <td>Mohamed Gedi</td>
                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>85%</span>
                                   <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>15%</span>
                                        </td>

                                        
                                    </tr>


                                    <tr>
                                        <td>C120119</td>
                                        <td>Iqro Abdi Ali</td>
                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>90&</span>
                                   <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>10%</span>
                                        </td>

                                        
                                    </tr>

                                    <tr>
                                        <td>C120774</td>
                                        <td>Ayan Mohamed</td>
                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>100%</span>
                                   <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0%</span>
                                        </td>

                                        
                                    </tr>


                                    <tr>
                                        <td>C120000</td>
                                        <td>Abdullahi Hassan</td>
                                        <td><span className='badge bg-success text-light p-2'>0</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>5</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>0</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>5</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>1</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>4</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>0</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>5</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5&</span>
                                   <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>95%</span>
                                        </td>

                                        
                                    </tr>

                                    <tr>
                                        <td>C120109</td>
                                        <td>Sadam Jamac</td>
                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>85%</span>
                                   <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>15%</span>
                                        </td>

                                        
                                    </tr>


                                    <tr>
                                        <td>C120913</td>
                                        <td>Mascuud Sheikhdoon</td>
                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>0</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>5</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>5</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>0</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>4</span>
                                  <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>1</span>
                                        </td>

                                        <td><span className='badge bg-success text-light p-2'>70&</span>
                                   <span className='badge bg-danger text-light p-2' style={{marginLeft:'10px'}}>30%</span>
                                        </td>

                                        
                                    </tr>

                                </tbody>
                            </table>

                            
                            </div>

                           
                         
                            <div>
                            <button class="btn btn-success" id="print_statement"><i class="fa fa-print text-light"></i> Print</button>
                            <button class="btn btn-primary" style={{marginLeft:'10px'}}><i class="fa fa-file-excel text-light"> </i> Export</button>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default AttendanceMonthly

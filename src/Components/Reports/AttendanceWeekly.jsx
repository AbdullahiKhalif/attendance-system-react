import React from 'react'
import { useState} from 'react';
import JustLogo from '../../images/logo1.png'    
import AttendanceWeekReqort from '../Tables/AttendanceWeekReqort';

const AttendanceWeekly = () => {
    const [showTable, setShowTable] = useState(false);
    const handleShowTable = () =>{
        setShowTable(true);
    }
  return (
    <div>
        <div class="row">

            <div class="col-xl-12">
                    <div class="card p-2" style={{backgroundColor:'#fff'}}>

                        <div class="card-block table-border-style">

                        <form id="formReport">
                        <div class="row">
                            <div class="col-sm-4">
                                <select  id="type" class="form-control m-1">
                                    <option value="0">All</option>
                                    <option value="Custom">Custom</option>
                                </select>
                            </div>

                            <div class="col-sm-4">
                                <input type="date" name="" id="from" class="form-control m-1"/>
                            </div>

                            <div class="col-sm-4">
                                <input type="date" name="" id="to" class="form-control m-1 "/>
                            </div>
                        <div className="col-sm-4">
                        <button type='button' class="btn btn-info m-3 float-right" onClick={handleShowTable}><i className='fas fa-search'></i> Search</button>
                       
                        </div>
                        </div>
                        </form>
                            
                        
                            <div class="table-responsive">
                                <img src={JustLogo} style={{
                                    height:'10%',
                                    width:'50%',
                                    marginLeft:'130px',
                                    objectFit: 'cover',
                                    marginTop:'-15px',
                                    
                                }}/>

                                {showTable && <AttendanceWeekReqort/>}

                                
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

export default AttendanceWeekly

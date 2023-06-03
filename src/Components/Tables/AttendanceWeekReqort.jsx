import React from 'react'

const AttendanceWeekReqort = () => {
  return (
    <div>
         <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>C119556</td>
                                        <td>Sadak Abdullahi Rage</td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                    </tr>

                                    <tr>
                                        <td>C120112</td>
                                        <td>Abdullahi Ali Khalif</td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-danger p-2'>Absent</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-danger p-2'>Absent</span></td>
                                    </tr>

                                    <tr>
                                        <td>C120119</td>
                                        <td>Iqro Abi Abdi</td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-danger p-2'>Absent</span></td>
                                        <td><span className='badge bg-success p-2'>Absent</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-danger p-2'>Present</span></td>
                                    </tr>

                                    <tr>
                                        <td>C120774</td>
                                        <td>Ayan Abdullahi Mohamed</td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-danger p-2'>Absent</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                    </tr>

                                    <tr>
                                        <td>C120800</td>
                                        <td>Mohamed Hussein Gedi</td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-success p-2'>Present</span></td>
                                        <td><span className='badge bg-danger p-2'>Absent</span></td>
                                        <td><span className='badge bg-danger p-2'>Asbsent</span></td>
                                        <td><span className='badge bg-danger p-2'>Present</span></td>
                                    </tr>
                                </tbody>
                            </table>
    </div>
  )
}

export default AttendanceWeekReqort

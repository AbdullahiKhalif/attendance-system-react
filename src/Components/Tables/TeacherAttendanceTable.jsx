import React from 'react'

const TeacherAttenceTable = () => {
  return (
    <div className='responsive-table'>
      <table className='table table-hover'>
        <thead>
            <tr>
                <th>No:</th>
                <th>Event Name</th>
                <th>Event Categoty</th>
                <th>Teacher Name</th>
                <th>Month</th>
                <th>Date</th>
                <th>Role At Event</th>
                <th>status</th>
            </tr>
          </thead>  
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Reseach</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C3CAD8'}}>Seminar</span> </td>
                    <td>Shafie Abdi</td>
                    <td> <span className='bg-primary p-2 rounded'>May</span> </td>
                    <td>May 9, 2023</td>
                    <td> <span  className='bg-secondary p-2 rounded text-light'>Presenter</span> </td>
                    <td><span className='bg-success p-2 rounded text-light'>Attended</span></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Conference on Education</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#FFCFA4'}}>Conferance</span> </td>
                    <td>Cr Warsame</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C8C9CE'}}>September</span> </td>
                    <td>Sep 14, 2022</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#F588FF'}}>Moderator</span> </td>
                    <td><span className='p-2 rounded bg-success text-light'>Attended</span></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>2nd Annual Seminar</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#FFCFA4'}}>Seminar</span> </td>
                    <td>Ismail Jamal</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C5D1EC'}}>March</span> </td>
                    <td>March 16, 2023</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#E7C4EB'}}>Participant</span> </td>
                    <td><span className='p-2 rounded text-light bg-success'>Attended</span></td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Workshop on Education</td>
                    <td> <span className='p-2 rounded text-light' style={{backgroundColor:'#8F7C6B'}}>Workshop</span> </td>
                    <td>Abdullahi Mohamed</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#9EA4AA'}}>August</span> </td>
                    <td>August 21, 2022</td>
                    <td> <span  className='p-2 rounded text-light' style={{backgroundColor:'#E6439C'}}>Presenter</span> </td>
                    <td><span className='p-2 rounded text-light bg-success'>Attended</span></td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Conforence of conflict</td>
                    <td> <span className='p-2 rounded text-light' style={{backgroundColor:'#818CA3'}}>Conferance</span> </td>
                    <td>Mohamed Black</td>
                    <td> <span className='bg-info p-2 rounded'>Octobar</span> </td>
                    <td>Octobar 29, 2022</td>
                    <td> <span  className='bg-secondary p-2 rounded text-light'>Presenter</span> </td>
                    <td><span className='bg-success p-2 rounded text-light'>Attended</span></td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>Training Tabaaral ICT</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#FFCFA4'}}>Training</span> </td>
                    <td>Abdullahi Khalif</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C8C9CE'}}>Feb</span> </td>
                    <td>Feb 6, 2023</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#F588FF'}}>Participant</span> </td>
                    <td><span className='p-2 rounded bg-danger text-light'>Skipped</span></td>
                </tr>

                <tr>
                    <td>7</td>
                    <td>Motivation Students</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#FFCFA4'}}>Seminar</span> </td>
                    <td>Mohamed Abdikarim</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C5D1EC'}}>May</span> </td>
                    <td>May 20, 2023</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#E7C4EB'}}>Presenter</span> </td>
                    <td><span className='p-2 rounded text-light bg-success'>Attended</span></td>
                </tr>

                <tr>
                    <td>8</td>
                    <td>IT on celebration</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#F09E56'}}>Celebration</span> </td>
                    <td>Mohamed Khalaf</td>
                    <td> <span className='p-2 rounded text-light' style={{backgroundColor:'#105DAA'}}>June</span> </td>
                    <td>June 8, 2023</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#7592E4'}}>Presenter</span> </td>
                    <td><span className='p-2 rounded text-light bg-success'>Attended</span></td>
                </tr>

                
                <tr>
                    <td>9</td>
                    <td>Reseach</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C3CAD8'}}>Seminar</span> </td>
                    <td>Shafie Abdi</td>
                    <td> <span className='bg-primary p-2 rounded'>May</span> </td>
                    <td>May 9, 2023</td>
                    <td> <span  className='bg-secondary p-2 rounded text-light'>Presenter</span> </td>
                    <td><span className='bg-success p-2 rounded text-light'>Attended</span></td>
                </tr>

                <tr>
                    <td>10</td>
                    <td>Conference on Education</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#FFCFA4'}}>Conferance</span> </td>
                    <td>Cr Warsame</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C8C9CE'}}>September</span> </td>
                    <td>Sep 14, 2022</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#F588FF'}}>Moderator</span> </td>
                    <td><span className='p-2 rounded bg-success text-light'>Attended</span></td>
                </tr>

                <tr>
                    <td>11</td>
                    <td>2nd Annual Seminar</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#FFCFA4'}}>Seminar</span> </td>
                    <td>Ismail Jamal</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C5D1EC'}}>March</span> </td>
                    <td>March 16, 2023</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#E7C4EB'}}>Participant</span> </td>
                    <td><span className='p-2 rounded text-light bg-success'>Attended</span></td>
                </tr>

                <tr>
                    <td>12</td>
                    <td>Workshop on Education</td>
                    <td> <span className='p-2 rounded text-light' style={{backgroundColor:'#8F7C6B'}}>Workshop</span> </td>
                    <td>Abdullahi Mohamed</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#9EA4AA'}}>August</span> </td>
                    <td>August 21, 2022</td>
                    <td> <span  className='p-2 rounded text-light' style={{backgroundColor:'#E6439C'}}>Presenter</span> </td>
                    <td><span className='p-2 rounded text-light bg-success'>Attended</span></td>
                </tr>

                <tr>
                    <td>13</td>
                    <td>Conforence of conflict</td>
                    <td> <span className='p-2 rounded text-light' style={{backgroundColor:'#818CA3'}}>Conferance</span> </td>
                    <td>Mohamed Black</td>
                    <td> <span className='bg-info p-2 rounded'>Octobar</span> </td>
                    <td>Octobar 29, 2022</td>
                    <td> <span  className='bg-secondary p-2 rounded text-light'>Presenter</span> </td>
                    <td><span className='bg-success p-2 rounded text-light'>Attended</span></td>
                </tr>

                <tr>
                    <td>14</td>
                    <td>Training Tabaaral ICT</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#FFCFA4'}}>Training</span> </td>
                    <td>Abdullahi Khalif</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C8C9CE'}}>Feb</span> </td>
                    <td>Feb 6, 2023</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#F588FF'}}>Participant</span> </td>
                    <td><span className='p-2 rounded bg-danger text-light'>Skipped</span></td>
                </tr>

                <tr>
                    <td>15</td>
                    <td>Motivation Students</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#FFCFA4'}}>Seminar</span> </td>
                    <td>Mohamed Abdikarim</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#C5D1EC'}}>May</span> </td>
                    <td>May 20, 2023</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#E7C4EB'}}>Presenter</span> </td>
                    <td><span className='p-2 rounded text-light bg-success'>Attended</span></td>
                </tr>

                <tr>
                    <td>16</td>
                    <td>JDay on Celebration</td>
                    <td> <span className='p-2 rounded' style={{backgroundColor:'#F09E56'}}>Celebration</span> </td>
                    <td>Mohamed Black</td>
                    <td> <span className='p-2 rounded text-light' style={{backgroundColor:'#105DAA'}}>June</span> </td>
                    <td>June 26,27, 2023</td>
                    <td> <span  className='p-2 rounded' style={{backgroundColor:'#7592E4'}}>Presenter</span> </td>
                    <td><span className='p-2 rounded text-light bg-success'>Attended</span></td>
                </tr>
                
            </tbody>
        
      </table>
    </div>
  )
}

export default TeacherAttenceTable

import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className="left">
           <div className="content-left">
                <i className='fas fa-user-circle' style={{
                    color: '#57B2E1',
                    fontSize: '32px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginRight: '10px',
                }}></i>
                <h1>LECTURE</h1>
           </div>
        </div>
        <div className="right">
          <div className="content-right">
            <i class='fas fa-bars'></i>
          </div>
        </div>
    </div>
  )
}

export default Header

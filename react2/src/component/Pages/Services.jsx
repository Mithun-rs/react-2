import React from 'react'
import "./Services.css"
const services = () => {
  return (
    <div>
      <div className='head'>
        NEED BOX
      </div>
      <div className='ser'>
        <input placeholder='Username..' type="text" />
        <input placeholder='Email..' type="mail" />
      </div>
      <div className='qure'>
        <input placeholder='Enter your Quries' type="text" />
        <button>SUBMIT</button>
      </div>
    </div>
  )
}

export default services

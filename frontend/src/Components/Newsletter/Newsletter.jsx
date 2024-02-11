import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to Our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email Id' />
            <button>Subcribe</button>
        </div>
    </div>
  )
}

export default Newsletter
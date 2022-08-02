import { Link } from 'react-router-dom'
import React from 'react'
import './index.css'

export const Nav = () => {
  return (
    <div className='navbar'>
      <ul className='Nav__item-wrapper'>
        <li className='active'>
          <Link className='Nav__link' to='/'>
            Home
          </Link>
        </li>
        <li className='active'>
          <Link className='Nav__link' to='/Login'>
            Login
          </Link>
        </li>
        <li className='active'>
          <Link className='Nav__link' to='/Register'>
            Register
          </Link>
        </li>
      </ul>
    </div>
  )
}

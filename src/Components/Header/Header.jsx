import React from 'react'
import './header.css'
import logo from '../Images/logo.png'

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='container'>
            <div className='header-container'>
                <ul className='header-list'>
                    <li>
                        <img src={logo} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
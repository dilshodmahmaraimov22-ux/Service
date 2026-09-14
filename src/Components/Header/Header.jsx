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
                    <li className='header-item'>
                        <img className='header-img' src={logo} alt="" />
                        <a className='header-link' href="#">Our Services</a>
                    </li>
                    <li className='header-item'>
                        <a className='header-link' href="#">About</a>
                        <a className='header-link' href="#">Blog&News</a>
                        <a className='header-link' href="#">Contact</a>
                    </li>
                    <li className='header-item'>
                        <a className='header-link' href="#">Account</a>
                        <a className='header-link' href="#">+2349067322844</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
import React from 'react'
import lemon from '../Images/Lemon.png'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className="footer-container">
                <ul className='footer-list'>
                    <li className='footer-item'>
                        <img src={lemon} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
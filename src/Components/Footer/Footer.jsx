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
                        <img className='footer-img' src={lemon} alt="" />
                        <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#">Service</a>
                        <a className='footer-link' href="#">Domain</a>
                        <a className='footer-link' href="#">Shared Hosting</a>
                        <a className='footer-link' href="#">Cloud Hosting</a>
                        <a className='footer-link' href="#">Private Hosting</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#">Hosting</a>
                        <a className='footer-link' href="#">Cheap Hosting</a>
                        <a className='footer-link' href="#">Hosting Wordpress</a>
                        <a className='footer-link' href="#">Email Hosting</a>
                        <a className='footer-link' href="#">Hosting Unlimited</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#">Company</a>
                        <a className='footer-link' href="#">About</a>
                        <a className='footer-link' href="#">Career</a>
                        <a className='footer-link' href="#">Contact Us</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#">Help</a>
                        <a className='footer-link' href="#">FAQ</a>
                        <a className='footer-link' href="#">Help support</a>
                    </li>
                </ul>
                <ul className='footer-list2'>
                    <li className='fotter-item2'>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
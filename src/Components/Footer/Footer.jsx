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
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#">Service</a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#">Service</a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="#">Service</a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                        <a className='footer-link' href="#"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
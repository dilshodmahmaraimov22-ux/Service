import React from 'react'
import './Reklama.css'
import rek1 from '../Images/Rek1.png'
import rek2 from '../Images/Rek2.png'
import rek3 from '../Images/Rek3.png'
import rek4 from '../Images/Rek4.png'
import rek5 from '../Images/Rek5.png'
import rek6 from '../Images/Rek6.png'
import icon1 from '../Images/Icon1.png'
import icon2 from '../Images/Icon2.png'
import icon3 from '../Images/Icon3.png'

const Reklama = () => {
  return (
    <>
    <div className='reklama'>
        <div className='container'>
            <div className='reklama-container'>
                <ul className='reklama-list'>
                    <li className='reklama-item'>
                        <h1 className='reklama-title'>True Cloud Web  Hosting</h1>
                        <p className='reklama-text'>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
                    </li>
                    <li className='reklama-item'>
                        <img src={rek1} alt="rasm" />
                        <img src={rek2} alt="rasm" />
                        <img src={rek3} alt="rasm" />
                        <img src={rek4} alt="rasm" />
                        <img src={rek5} alt="rasm" />
                        <img src={rek6} alt="rasm" />
                    </li>
                </ul>
                <ul className='reklama-list2'>
                    <li className='reklama-item2'>
                        <img className='reklama-img2' src={icon1} alt="" />
                        <h1 className='reklama-title2'>99.9% Uptime</h1>
                        <p className='reklama-text2'>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </li>
                    <li className='reklama-item2'>
                        <img className='reklama-img2' src={icon2} alt="" />
                        <h1 className='reklama-title2'>Blazing Fast Web Hosting</h1>
                        <p className='reklama-text2'>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </li>
                    <li className='reklama-item2'>
                        <img className='reklama-img2' src={icon3} alt="" />
                        <h1 className='reklama-title2'>Free SSL Certificates</h1>
                        <p className='reklama-text2'>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Reklama
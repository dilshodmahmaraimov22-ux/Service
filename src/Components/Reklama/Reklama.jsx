import React from 'react'
import './Reklama.css'
import rek1 from '../Images/Rek1.png'
import rek2 from '../Images/Rek2.png'
import rek3 from '../Images/Rek3.png'
import rek4 from '../Images/Rek4.png'
import rek5 from '../Images/Rek5.png'
import rek6 from '../Images/Rek6.png'

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
            </div>
        </div>
    </div>
    </>
  )
}

export default Reklama
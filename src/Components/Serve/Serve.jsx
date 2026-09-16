import React from 'react'
import './Serve.css'
import s1 from '../Images/S1.png'
import s2 from '../Images/S2.png'
import s3 from '../Images/S3.png'
import s4 from '../Images/S4.png'
import s5 from '../Images/S5.png'
import s6 from '../Images/S6.png'

const Serve = () => {
  return (
    <>
    <div className='serve'>
        <div className='container'>
            <div className='serve-container'>
                <ul className='serve-list'>
                   <li className='serve-item'>
                    <h1 className='serve'>We serve over 100 Nigerian Websites</h1>
                    <p className='serve-item'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                   </li>
                   <li className='serve-item'>
                    <img src={s1} alt="" />
                    <img src={s2} alt="" />
                    <img src={s3} alt="" />
                    <img src={s4} alt="" />
                    <img src={s4} alt="" />
                    <img src={s5} alt="" />
                   </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Serve
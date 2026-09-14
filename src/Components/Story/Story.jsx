import React from 'react'
import './Story.css'
import st1 from '../Images/St1.png'
import st2 from '../Images/St2.png'
import st3 from '../Images/St3.png'

const Story = () => {
  return (
    <>
    <div className='story'>
        <div className='container'>
            <div className='story-container'>
                <h1 className='story-title'>Real Stories from Real Customers</h1>
                <p className='story-text'>Get inspired by these stories.</p>
                <ul className='story-list'>
                    <li className='story-item'>
                        <img className='story-img' src={st1} alt="" />
                        <p className='story-text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem Floyd Miles Vice President, CLI</p>
                        <h1 className='story-title2'>Floyd Miles</h1>
                        <p className='story-text3'>Vice President, CLI</p>
                    </li>
                    <li className='story-item'>
                        <img className='story-img' src={st2} alt="" />
                        <p className='story-text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem Jane Cooper CEO, JPNL</p>
                        <h1 className='story-title2'>Jane Cooper</h1>
                        <p className='story-text3'>CEO, JPNL</p>
                    </li>
                    <li className='story-item'>
                        <img className='story-img' src={st3} alt="" />
                        <p className='story-text2'>LemonWares saved our time in Hosting my company page.</p>
                        <h1 className='story-title2'>Kristin Watson</h1>
                        <p className='story-text3'>Co-Founder, LeeveOn Branding</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Story